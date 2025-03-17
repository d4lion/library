import { BookCardV2 } from "~/components/core/books-view/BookCardV2"

import { SearchBar } from "@components/books-view/searchBar"
import { LoaderFunction } from "@remix-run/node"

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

export const loader: LoaderFunction = async () => {
  const books: IBook[] = await getBooks()
  return books
}

export default function Books() {
  const booksLoaderData = useLoaderData()
  const { setBooks, quantity, books } = useBookStore()
  const { display } = useBooksLayoutStore()

  useEffect(() => {
    setBooks(booksLoaderData as IBook[])
  }, [booksLoaderData, setBooks])

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

  return (
    <div className="p-4 sm:mx-40">
      <SearchBar results={quantity} />
      <AnimatePresence mode="wait">
        <motion.div
          key={display} // Clave única para que Framer detecte cambios
          className={`${display} flex items-center justify-center gap-4`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={FramerMotionAnimationVariables}
        >
          {books.map((book) => (
            <BookCardV2
              id={book.id}
              key={book.id}
              title={book.title}
              author={book.author}
              publisher={book.editorial}
              summary={book.summary}
              coverImage={book.cover}
              tags={book.genre}
              rating={book.rating ?? 4.5}
              year={book.year ?? 2021}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
