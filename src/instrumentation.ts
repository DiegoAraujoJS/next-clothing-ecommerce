import db from "@/server/db/drizzle";
import { categories, products } from "@/server/db/schema";
import { eq } from "drizzle-orm";

  const samples: {title: string, description: string, price: number, categoryId: number, image?: string}[] = [{'title': 'Jeans rectos vintage',
    'description': 'Ideal para un look casual. Temporada otoño 2021.',
    'price': 19989,
    'categoryId': 1},
    {'title': 'Camiseta gráfica',
      'description': 'Ideal para hacer deporte. Temporada primavera 2020.',
      'price': 13164,
      'categoryId': 2},
    {'title': 'Sudadera capucha y cierre',
      'description': 'Estilo urbano y moderno. Temporada otoño 2022.',
      'price': 6092,
      'categoryId': 3},
    {'title': 'Cárdigan tejido oversize',
      'description': 'Máximo confort en días fríos. Temporada verano 2023.',
      'price': 18220,
      'categoryId': 3},
    {'title': 'Pantalones chinos slim',
      'description': 'Pantalones elegantes para cualquier ocasión. Temporada verano 2022.',
      'price': 13149,
      'categoryId': 1},
    {'title': 'Sudadera capucha y cierre',
      'description': 'Máximo confort en días fríos. Temporada verano 2023.',
      'price': 12068,
      'categoryId': 3},
    {'title': 'Sudadera capucha y cierre',
      'description': 'Estilo urbano y moderno. Temporada verano 2021.',
      'price': 10037,
      'categoryId': 3},
    {'title': 'Cárdigan tejido oversize',
      'description': 'Estilo urbano y moderno. Temporada otoño 2022.',
      'price': 19449,
      'categoryId': 3},
    {'title': 'Cárdigan tejido oversize',
      'description': 'Máximo confort en días fríos. Temporada primavera 2021.',
      'price': 5808,
      'categoryId': 3},
    {'title': 'Camiseta gráfica',
      'description': 'Cómoda para el día a día. Temporada primavera 2020.',
      'price': 9020,
      'categoryId': 2},
    {'title': 'Top deportivo',
      'description': 'Ideal para hacer deporte. Temporada otoño 2023.',
      'price': 6572,
      'categoryId': 2},
    {'title': 'Remera básica algodón',
      'description': 'Añade un toque divertido a tu outfit. Temporada invierno 2020.',
      'price': 16983,
      'categoryId': 2},
    {'title': 'Camiseta gráfica',
      'description': 'Añade un toque divertido a tu outfit. Temporada invierno 2020.',
      'price': 12280,
      'categoryId': 2},
    {'title': 'Cárdigan tejido oversize',
      'description': 'Máximo confort en días fríos. Temporada invierno 2021.',
      'price': 6735,
      'categoryId': 3},
    {'title': 'Camiseta gráfica',
      'description': 'Cómoda para el día a día. Temporada verano 2021.',
      'price': 6047,
      'categoryId': 2},
    {'title': 'Remera básica algodón',
      'description': 'Añade un toque divertido a tu outfit. Temporada primavera 2021.',
      'price': 8575,
      'categoryId': 2},
    {'title': 'Camiseta gráfica',
      'description': 'Añade un toque divertido a tu outfit. Temporada invierno 2023.',
      'price': 12986,
      'categoryId': 2},
    {'title': 'Jeans rectos vintage',
      'description': 'Pantalones elegantes para cualquier ocasión. Temporada primavera 2023.',
      'price': 13929,
      'categoryId': 1},
    {'title': 'Top deportivo',
      'description': 'Añade un toque divertido a tu outfit. Temporada primavera 2020.',
      'price': 19892,
      'categoryId': 2},
    {'title': 'Remera básica algodón',
      'description': 'Ideal para hacer deporte. Temporada primavera 2020.',
      'price': 11084,
      'categoryId': 2}];
async function bootstrap() {

  for (const sample of samples) {
    await db.insert(products).values(sample);
  }
}

export async function register(){
  // insert categories Pantalones, Remeras, Sweaters

  // const cat = [
  //   "Pantalones",
  //   "Remeras",
  //   "Sweaters"
  // ]
  // 
  // for (let i = 0; i < cat.length; i++) {
  //   const category = cat[i]
  //   const result = await db.insert(categories).values({name: category})
  //   console.log(result)
  // }

  // const jeanImage = "https://res.cloudinary.com/dq4efqvk9/image/upload/v1711938754/vr6y93au9doxh9hjvpcw.jpg"
  // const shirtImage = "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Written-and-Directed-by-chennai.jpg?v=1662807782"
  // const sweaterImage = "https://res.cloudinary.com/dq4efqvk9/image/upload/v1711938754/gw0lwgxlwncp1nsgwgws.jpg"

  // const productImages = [
  //   jeanImage,
  //   shirtImage,
  //   sweaterImage
  // ]
  // // update all the products adding the corresponding image

  // for (let i = 0; i < samples.length; i++) {
  //   const product = samples[i]
  //   product.image = productImages[product.categoryId - 1]
  // }

  // await bootstrap()
}
