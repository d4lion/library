import { create } from "zustand"

// eslint-disable-next-line import/no-unresolved
import { IBook } from "~/interfaces/Book"

interface BooksResponse {
  books: IBook[]
  status?: number
  quantity: number
  setBooks: (books: IBook[]) => void
  setStatus: (status: number) => void
}

export const useBookStore = create<BooksResponse>((set) => ({
  books: [],
  quantity: 0,
  status: 200,
  setBooks: (books: IBook[]) => set({ books, quantity: books.length }),
  setStatus: (status: number) => set({ status }),
}))
