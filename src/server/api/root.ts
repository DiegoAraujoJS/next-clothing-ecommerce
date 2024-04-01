import { productsRouter } from "./routers/products"
import { t } from "./trpc"

export const appRouter = t.router({
  products: productsRouter
})


export type AppRouter = typeof appRouter
