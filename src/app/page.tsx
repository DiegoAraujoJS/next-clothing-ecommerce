import db from "@/server/db/drizzle";
import { categories, products } from "@/server/db/schema";
import { eq, ilike, sql } from "drizzle-orm";
import Image from "next/image";

export default async function Home({searchParams} : {searchParams: {category?: string}}) {
  const where = searchParams.category ? ilike(categories.name, searchParams.category) : undefined
  const result = await db.select().from(products).innerJoin(categories, eq(products.categoryId, categories.id)).where(where)
  console.log(result)
  return (
    <main className="border flex p-8">
      <ul className="flex flex-wrap gap-4 justify-center border">
        {result.map(({products, categories}) => (
          <li key={products.id} className="border-red-100 border-4 flex flex-col w-full max-w-80 h-full max-h-72 items-center">
            <h2 className="text-center">{products.title}</h2>
            <div className="border border-black w-1/2 h-1/2">
              <Image
                src={products.image}
                alt={products.title}
                width={200}
                height={200}
                style={{width: "100%", height: "100%"}}
              />
            </div>
            <div>
              <p className="">{products.description}</p>
              <p className="">${products.price}</p>
              <p className="">{categories.name}</p>
              <p className="">{products.inStock ? "💚" : "🔴"}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
