import { useEffect, useState } from "react"
import { pdfjs, Document, Page } from "react-pdf"

import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs"

export default function BookView({ fileUrl }: { fileUrl: string }) {
  const [numPages, setNumPages] = useState<number>(0)
  const [zoomScalar, setZoomScalar] = useState<number>(3)
  const [currentPair, setCurrentPair] = useState(1)

  const [pageWidth, setPageWidth] = useState(0)
  useEffect(() => {
    const handleResize = () => {
      const totalWidth = window.innerWidth
      setPageWidth(totalWidth / zoomScalar)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [zoomScalar])

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  const nextPage = () => {
    if (currentPair + 2 <= numPages) setCurrentPair(currentPair + 2)
  }

  const prevPage = () => {
    if (currentPair - 2 >= 1) setCurrentPair(currentPair - 2)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Visor PDF */}
      <div className="flex-grow overflow-auto bg-gray-100 flex items-center justify-center pb-24">
        <Document file={fileUrl} onLoadSuccess={onLoadSuccess}>
          <div className="flex flex-row justify-center items-center">
            <Page
              pageNumber={currentPair}
              width={pageWidth}
              className="shadow-md"
            />
            {currentPair + 1 <= numPages && (
              <Page
                pageNumber={currentPair + 1}
                width={pageWidth}
                className="shadow-md"
              />
            )}
          </div>
        </Document>
      </div>

      {/* Controles flotantes abajo */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-4 bg-white shadow-md">
        <button
          onClick={prevPage}
          disabled={currentPair === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-40"
        >
          ← Anterior
        </button>

        <div className="flex gap-2 items-center">
          <button
            onClick={() => setZoomScalar((z) => Math.min(z * 2, 8))}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            -
          </button>
          <button
            onClick={() => setZoomScalar((z) => Math.max(z / 2, 1))}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            +
          </button>
        </div>

        <span className="text-gray-600 text-sm">
          Páginas {currentPair}
          {currentPair + 1 <= numPages ? ` - ${currentPair + 1}` : ""} de{" "}
          {numPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPair + 1 > numPages}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-40"
        >
          Siguiente →
        </button>
      </div>
    </div>
  )
}
