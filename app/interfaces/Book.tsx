export interface IBook {
  id: number
  title: string
  authors: IAuthor[]
  isbn: string
  year: string | number
  rating: number
  summary: string
  editorial: string
  genres: string[]
  cover: string
  downloadLink: string
  pdfLink: string
  audioBookLink: string
}

interface IAuthor {
  id: number
  name: string
}
