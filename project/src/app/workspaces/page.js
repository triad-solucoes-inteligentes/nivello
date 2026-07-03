import z from "zod";
import mongoose from "mongoose";
import { notFound, redirect } from "next/navigation";

import { auth } from "@/auth";
import Display from "@/components/dashboard/workspaces/Display";
import { Workspaces } from "@/lib/models/Workspace";

const PAGE_SIZE = parseInt(process.env.NEXT_PUBLIC_PAGE_SIZE, 10) || 20;
const ORDER_VALUES = ["name", "createdAt"];
const DIRECTION_VALUES = ["asc", "desc"];

const querySchema = z.object({
  search: z
    .string()
    .optional()
    .transform((val) => (val ? val.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : val)),
  page: z
    .string()
    .optional()
    .refine((val) => !val || (/^\d+$/.test(val) && parseInt(val, 10) > 0), {
      message: "Page must be a positive integer string",
    }),
  order: z.enum(ORDER_VALUES).optional().default("createdAt"),
  direction: z.enum(DIRECTION_VALUES).optional().default("desc"),
});

export default async function Page({ searchParams }) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const queryResult = querySchema.safeParse(await searchParams);
  if (!queryResult.success) return notFound();

  const { search, page, order, direction } = queryResult.data;

  const ownerObjectId = new mongoose.Types.ObjectId(session.user.id);

  const searchTerms = search
    ? search
        .split(",")
        .map((term) => term.trim())
        .filter((term) => term.length > 0)
    : [];

  let matchCondition = { owner: ownerObjectId };
  if (searchTerms.length > 0) {
    matchCondition = {
      $and: [
        matchCondition,
        ...searchTerms.map((term) => ({
          $or: [{ name: { $regex: term, $options: "i" } }],
        })),
      ],
    };
  }

  let currentPage = parseInt(page || "1", 10);
  if (isNaN(currentPage) || currentPage < 1) {
    currentPage = 1;
  }

  let skip = (currentPage - 1) * PAGE_SIZE;
  if (isNaN(skip) || skip < 0) {
    skip = 0;
  }

  const dir = { asc: 1, desc: -1 }[direction];
  const sortOptions = {
    name: { name: dir },
    createdAt: { createdAt: dir },
  };
  const sortBy = sortOptions[order];

  const aggregationResult = await Workspaces.aggregate([
    { $match: matchCondition },
    {
      $facet: {
        data: [
          { $sort: sortBy },
          { $skip: skip },
          { $limit: PAGE_SIZE },
          {
            $project: {
              _id: 1,
              name: 1,
              teamId: 1,
              logo: 1,
              createdAt: 1,
            },
          },
        ],
        count: [{ $count: "total" }],
      },
    },
  ]);

  const totalCount =
    aggregationResult[0].count.length > 0 ? aggregationResult[0].count[0].total : 0;

  let totalPages = Math.ceil(totalCount / PAGE_SIZE);
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }

  const workspaces = JSON.parse(JSON.stringify(aggregationResult[0].data));

  return (
    <Display
      workspaces={workspaces}
      pagination={{
        page: currentPage,
        totalPages,
        totalCount,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1,
      }}
      search={search || ""}
      order={order}
      direction={direction}
    />
  );
}
