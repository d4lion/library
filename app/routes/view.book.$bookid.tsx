import PdfViewer from "~/components/core/book-view/PDFViewe"

export default function ViewBooks() {
  // Esto es un pdf de ejemplo para probar las caracteristicas

  // TODO: Crear un servicio que permita reconocer que libro se está pidiendo para traer su direccion URL
  return <PdfViewer fileUrl="/books/dictionary.pdf" />
}
