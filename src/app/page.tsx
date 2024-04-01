import db from "@/server/db/drizzle";
import { categories, products } from "@/server/db/schema";
import { eq, ilike, sql } from "drizzle-orm";

export default async function Home({searchParams} : {searchParams: {category?: string}}) {
  const where = searchParams.category ? ilike(categories.name, searchParams.category) : undefined
  const result = await db.select().from(products).innerJoin(categories, eq(products.categoryId, categories.id)).where(where)
  console.log(result)
  return (
    <main className="">
      <h1 className="">Products</h1>
      <ul className="flex flex-wrap gap-4">
        {result.map(({products, categories}) => (
          <li key={products.id} className="border-red-100 border-4 min-w-20 flex flex-col max-w-96">
            <h2 className="text-center ">{products.title}</h2>
            <img src={products.image ?? ""} alt={products.title} height="200" width="150" className="border-solid border-black border-4 m-auto"/>
            <p className="">{products.description}</p>
            <p className="">${products.price}</p>
            <p className="">{categories.name}</p>
            <p className="">{products.inStock ? "💚" : "🔴"}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
