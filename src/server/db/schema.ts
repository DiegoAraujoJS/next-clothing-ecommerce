import {integer, text, boolean, pgTable, serial} from 'drizzle-orm/pg-core'

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
})

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  inStock: boolean("in_stock").default(true).notNull(),
  image: text("image"),
  categoryId: integer("category_id").references(() => categories.id),
})

