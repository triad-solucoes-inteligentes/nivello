---
name: next-page-pattern
description: Use this skill when creating or refactoring Next.js app router pages in Nivello. It enforces the server page + Display component pattern, Zod query validation, Mongo aggregation pagination, and English route folder names.
user-invocable: true
---

# Next Page Pattern

Use this pattern for list pages and dashboard-like resource pages.

## Route names

- Route folder names must always be in English.
- Examples: use `quotes/new`, not `orcamentos/novo`; use `clients`, not `clientes`.
- Keep labels and product copy in pt-BR when the UI is user-facing.

## File split

- `src/app/<route>/page.js` is a server page responsible for auth, params, query parsing, database reads, serialization, and returning a Display component.
- `src/components/dashboard/<scope>/<resource>/Display.jsx` renders the UI.
- Do not put large tables, cards, filters, or presentation markup directly in `page.js`.

## Server page structure

Follow this order:

1. Import `z` from `zod`, `mongoose`, and Next navigation helpers.
2. Import app helpers, models, and the resource `Display`.
3. Define constants near the top: `PAGE_SIZE`, allowed order values, allowed directions, and any filter values.
4. Define `querySchema` with Zod for `search`, `page`, `order`, `direction`, and resource filters.
5. In `Page({ searchParams, params })`, authenticate, await params/searchParams, validate ids, verify workspace access, parse queries, build safe Mongo filters, paginate, sort from allow-lists, aggregate with `$facet`, serialize results, and return `<Display />`.

## Display component

- Receive data as props from the server page.
- Use existing UI primitives from `src/components/ui`.
- Build internal links using English routes.
- Preserve query params for pagination, sorting, and filters.
- Keep tables horizontally scrollable on small screens.
- Use empty states for zero results.

## Reference shape

```js
import z from "zod";
import mongoose from "mongoose";
import { notFound, redirect } from "next/navigation";

import { auth } from "@/auth";
import Display from "@/components/dashboard/workspaceId/resource/Display";
import { Resources } from "@/lib/models/Resource";
import { Workspaces } from "@/lib/models/Workspace";

const PAGE_SIZE = parseInt(process.env.NEXT_PUBLIC_PAGE_SIZE, 10) || 20;
const ORDER_VALUES = ["name", "createdAt"];
const DIRECTION_VALUES = ["asc", "desc"];

const querySchema = z.object({
  search: z
    .string()
    .optional()
    .transform((val) => (val ? val.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : val)),
  page: z.string().optional(),
  order: z.enum(ORDER_VALUES).optional().default("createdAt"),
  direction: z.enum(DIRECTION_VALUES).optional().default("desc"),
});

export default async function Page({ searchParams, params }) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const { workspaceId } = await params;
  if (!mongoose.Types.ObjectId.isValid(workspaceId)) notFound();

  const queryResult = querySchema.safeParse(await searchParams);
  if (!queryResult.success) return notFound();

  return <Display />;
}
```
