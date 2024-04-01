import db from "@/server/db/drizzle";
import { t } from "../trpc";
import { z } from "zod";
import { products } from "@/server/db/schema";

export const productsRouter = t.router({
  get: t.procedure
  .query(async () => {
    const result = await db.select().from(products)
    return result
  }),
  create: t.procedure
  .input(z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
  }))
  .mutation(async ({input}) => {
    const result = await db.insert(products).values(input).returning({id: products.id})
    return result[0].id
  })
})
