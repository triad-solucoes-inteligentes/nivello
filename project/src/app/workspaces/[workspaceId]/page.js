import mongoose from "mongoose";
import { notFound, redirect } from "next/navigation";

import { auth } from "@/auth";
import Display from "@/components/dashboard/workspaceId/overview/Display";
import { Workspaces } from "@/lib/models/Workspace";
import { Quotes } from "@/lib/models/Quote";
import { Works } from "@/lib/models/Work";
import { Clients } from "@/lib/models/Client";

const RECENT_QUOTES_LIMIT = 5;

export default async function Page({ params }) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const { workspaceId } = await params;

  if (!mongoose.Types.ObjectId.isValid(workspaceId)) {
    notFound();
  }

  const workspaceObjectId = new mongoose.Types.ObjectId(workspaceId);
  const ownerObjectId = new mongoose.Types.ObjectId(session.user.id);

  const workspace = await Workspaces.findOne({
    _id: workspaceObjectId,
    owner: ownerObjectId,
  }).lean();

  if (!workspace) {
    notFound();
  }

  const [quoteCount, workCount, clientCount, recentQuotesResult] = await Promise.all([
    Quotes.countDocuments({ workspaceId: workspaceObjectId }),
    Works.countDocuments({ workspaceId: workspaceObjectId }),
    Clients.countDocuments({ workspaceId: workspaceObjectId }),
    Quotes.aggregate([
      { $match: { workspaceId: workspaceObjectId } },
      { $sort: { createdAt: -1 } },
      { $limit: RECENT_QUOTES_LIMIT },
      {
        $lookup: {
          from: "clients",
          localField: "clientId",
          foreignField: "_id",
          as: "client",
        },
      },
      { $unwind: { path: "$client", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "works",
          localField: "workId",
          foreignField: "_id",
          as: "work",
        },
      },
      { $unwind: { path: "$work", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "products",
          localField: "products",
          foreignField: "_id",
          as: "products",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          createdAt: 1,
          total: { $sum: "$products.total" },
          "client.name": 1,
          "work.name": 1,
        },
      },
    ]),
  ]);

  const recentQuotes = JSON.parse(JSON.stringify(recentQuotesResult));

  return (
    <Display
      workspace={{
        _id: workspace._id.toString(),
        name: workspace.name,
        teamId: workspace.teamId,
        logo: workspace.logo,
      }}
      user={{
        name: session.user.name ?? session.user.email,
        role: session.user.role,
      }}
      counts={{
        quotes: quoteCount,
        works: workCount,
        clients: clientCount,
      }}
      recentQuotes={recentQuotes}
    />
  );
}
