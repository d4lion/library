// eslint-disable-next-line import/no-unresolved
import { IBook } from "@interfaces/Book"

export async function getBooks(): Promise<IBook[]> {
  // Peticion a la api
  const response = await fetch(
    "https://67433f9cb7464b1c2a64205a.mockapi.io/api/v1/books"
  )

  console.log(JSON.stringify(booksData))

  return response.json()
}

// const BooksData = [
//   {
//     id: 1,
//     title: "Cien años de soledad",
//     author: "Gabriel Garcia Marquez",
//     summary:
//       "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español.",
//     editorial: "Sudamericana",
//     genre: ["Ficción", "Realismo mágico"],
//     cover:
//       "https://secretosparacontar.org/wp-content/uploads/2024/01/PORTADA-CONTRARIOS.webp",
//     downloadLink: "https://example.com",
//     pdfLink: "https://example.com",
//     audiobookLink: "https://example.com",
//   },
//   {
//     id: 2,
//     title: "El amor en los tiempos del cólera",
//     author: "Gabriel Garcia Marquez",
//     summary:
//       "El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez, publicada en 1985. Es considerada una de las obras maestras de la literatura hispanoamericana.",
//     editorial: "Sudamericana",
//     genre: ["Ficción", "Romance"],
//     cover:
//       "https://secretosparacontar.org/wp-content/uploads/2024/01/Erase-una-vez.webp",
//     downloadLink: "https://example.com",
//     pdfLink: "https://example.com",
//     audiobookLink: "https://example.com",
//   },
//   {
//     id: 3,
//     title: "Rayuela",
//     author: "Julio Cortázar",
//     summary:
//       "Rayuela es una novela del escritor argentino Julio Cortázar. Publicada en 1963, es una de las obras más importantes de la literatura hispanoamericana.",
//     editorial: "Sudamericana",
//     genre: ["Ficción", "Novela experimental"],
//     cover:
//       "https://secretosparacontar.org/wp-content/uploads/2024/01/PORTADA-CONTRARIOS.webp",
//     downloadLink: "https://example.com",
//     pdfLink: "https://example.com",
//     audiobookLink: "https://example.com",
//   },
// ]

const booksData = [
  {
    id: 1,
    year: 2021,
    rating: 4.3,
    title: "Cien años de soledad",
    author: "Gabriel Garcia Marquez",
    summary:
      "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español.",
    editorial: "Sudamericana",
    genre: ["Ficción", "Realismo mágico"],
    cover:
      "https://secretosparacontar.org/wp-content/uploads/2024/01/PORTADA-CONTRARIOS.webp",
    downloadLink: "https://example.com",
    pdfLink: "https://example.com",
    audiobookLink: "https://example.com",
  },
  {
    id: 2,
    year: 2021,
    rating: 4.5,
    title: "El amor en los tiempos del cólera",
    author: "Gabriel Garcia Marquez",
    summary:
      "El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez, publicada en 1985. Es considerada una de las obras maestras de la literatura hispanoamericana.",
    editorial: "Sudamericana",
    genre: ["Ficción", "Romance"],
    cover:
      "https://secretosparacontar.org/wp-content/uploads/2024/01/Erase-una-vez.webp",
    downloadLink: "https://example.com",
    pdfLink: "https://example.com",
    audiobookLink: "https://example.com",
  },
  {
    id: 3,
    year: 2021,
    rating: 4,
    title: "Rayuela",
    author: "Julio Cortázar",
    summary:
      "Rayuela es una novela del escritor argentino Julio Cortázar. Publicada en 1963, es una de las obras más importantes de la literatura hispanoamericana.",
    editorial: "Sudamericana",
    genre: ["Ficción", "Novela experimental"],
    cover:
      "https://secretosparacontar.org/wp-content/uploads/2024/01/PORTADA-CONTRARIOS.webp",
    downloadLink: "https://example.com",
    pdfLink: "https://example.com",
    audiobookLink: "https://example.com",
  },
  {
    id: 4,
    year: 2021,
    title: "El Aleph",
    author: "Jorge Luis Borges",
    summary:
      "El Aleph es un libro de cuentos del escritor argentino Jorge Luis Borges, publicado en 1949. Es una de las obras más importantes de la literatura argentina y universal.",
    editorial: "Sudamericana",
    genre: ["Ficción", "Cuentos"],
    cover:
      "https://secretosparacontar.org/wp-content/uploads/2024/01/PORTADA-CONTRARIOS.webp",
    downloadLink: "https://example.com",
    pdfLink: "https://example.com",
    audiobookLink: "https://example.com",
  },
]
