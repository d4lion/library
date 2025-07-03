import { BookCardV2 } from "~/components/core/books-view/BookCardV2"

import { SearchBar } from "@components/books-view/searchBar"
import { LoaderFunction, MetaFunction } from "@remix-run/node"

// Services
import { getBooks } from "~/services/BookService"
import { useLoaderData } from "@remix-run/react"

// Interfaces
import { IBook } from "~/interfaces/Book"

// Store
import { useBookStore } from "~/stores/useBookStore"
import { useBooksLayoutStore } from "~/stores/useBooksLayout"

// React
import { useEffect } from "react"

// Framer Motion
import { motion, AnimatePresence } from "framer-motion"
import { AppLayout } from "~/components/core/Layouts/AppLayout"

export const loader: LoaderFunction = async () => {
  const books: IBook[] = await getBooks()
  return books
}

export const meta: MetaFunction = () => {
  return [
    {
      title: "Libreria Secretos Para Contar",
    },
  ]
}

const FramerMotionAnimationVariables = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
}

export default function Books() {
  const booksLoaderData = useLoaderData()
  const { setBooks, books, searchFilters } = useBookStore()
  const { display } = useBooksLayoutStore()

  useEffect(() => {
    setBooks(booksLoaderData as IBook[])
  }, [booksLoaderData, setBooks])

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchFilters.searchTerm.toLowerCase())
  )

  console.log(filteredBooks)

  return (
    <AppLayout>
      <div className="p-4 sm:mx-40">
        <SearchBar results={filteredBooks.length} />
        <AnimatePresence mode="wait">
          <motion.div
            key={display} // Clave única para que Framer detecte cambios
            className={`${display} flex items-center justify-center gap-4`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={FramerMotionAnimationVariables}
          >
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id.toString() + index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.35, // Retrasa cada elemento progresivamente
                }}
              >
                <BookCardV2
                  id={book.id}
                  title={book.title}
                  author={book.authors[0].name}
                  publisher={book.editorial}
                  summary={book.summary}
                  coverImage={book.cover}
                  tags={book.genres}
                  rating={book.rating}
                  year={book.year}
                  pdfLink={book.pdfLink}
                  audioLink={book.audioBookLink}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </AppLayout>
  )
}
