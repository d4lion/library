export interface IBook {
  id: number
  title: string
  authors: IAuthor[]
  year: string | number
  rating?: string | number
  summary: string
  editorial: string
  genres: string[]
  cover: string
  downloadLink: string
  pdfLink: string
  audiobookLink: string
}

interface IAuthor {
  id: number
  name: string
}
