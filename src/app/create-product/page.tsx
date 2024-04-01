import db from "@/server/db/drizzle";
import { categories, products } from "@/server/db/schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {

  const heads = headers()
  const url = heads.get("next-url")

  async function createCategory(formData: FormData) {
    'use server'

    const name = formData.get("name")

    if (typeof name !== "string") {
      return
    }

    const result = await db.insert(categories).values({name})
    if (url) {
      revalidatePath(url)
      redirect(url)
    }
  }

  async function createProduct(formData: FormData) {
    'use server'

    const title = formData.get("title")
    const description = formData.get("description")
    const price = Number(formData.get("price"))

    if (typeof title !== "string" || typeof description !== "string" || isNaN(price)) {
      return
    }

    await db.insert(products).values({title, description, price, categoryId: Number(formData.get("category"))})
    revalidatePath("/")
    redirect("/")
  }

  const result = await db.select().from(categories)

  return (
    <div>
      <form action={createCategory} className="border-solid border-2 mb-4">
        <div className="grid grid-cols-2">
          <label htmlFor="create-category-name">Nombre</label>
          <input type="text" name="name" id="create-category-name" />
        </div>
        <button type="submit" className="bg-blue-300 w-1/2">
          Crear Categoría
        </button>
      </form>
      <form className="flex flex-col" action={createProduct}>
        <div className="border-solid border-2 grid grid-cols-2 grid-rows-4">
          <div className="row-start-1">
            Categoría
          </div>
          <select name="category" id="create-product-category">
            {result.map((category, i) => (
              <option key={i} value={category.id}>{category.name}</option>
            ))}
          </select>
          <div className="row-start-2">
            Título
          </div>
          <input type="text" name="title" className="row-start-2 col-start-2" />
          <div className="row-start-3">
            Descripción
          </div>
          <textarea className="row-start-3 col-start-2" name="description"></textarea>
          <div className="row-start-4">
            Precio
          </div>
          <input type="number" name="price" className="row-start-4 col-start-2" />
        </div>
        <button type="submit" className="w-1/2 bg-blue-300">
          Crear Producto
        </button>
      </form>
    </div>
  )
}
