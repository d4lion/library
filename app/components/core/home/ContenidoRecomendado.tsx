/**
 * @contributor Ani Guarin
 * @helpedWith Creacion del site home para la libreria
 * @profileLink https://github.com/AniGuarin
 */

import { Link } from "@remix-run/react"

export function ContenidoRecomendadoSection() {
  const materiales = [
    {
      id: 1,
      tag: "Lectura",
      image: "/contenido_recomendado/Cuentos-para-desenredar-enredos.webp",
      title: "Cuentos para desenredar enredos",
    },
    {
      id: 2,
      tag: "Lectura",
      image: "/contenido_recomendado/La-casa-y-el-campo.webp",
      title: "La casa y el campo",
    },
    {
      id: 3,
      tag: "Lectura",
      image: "/contenido_recomendado/Historias-y-lugares.webp",
      title: "Historias y lugares",
    },
    {
      id: 4,
      tag: "Lectura",
      image: "/contenido_recomendado/El-hombre-y-su-cultura.webp",
      title: "El Hombre y su cultura",
    },
    {
      id: 5,
      tag: "Lecturas para todos los días",
      image: "/contenido_recomendado/Lecturas-para-todos-los-dias.webp",
      title: "Todo lo contrario",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-xs uppercase tracking-wider text-gray-600 text-center font-semibold mb-1">
          MATERIALES
        </h2>
        <h3 className="text-2xl font-medium text-center mb-8">
          Contenido recomendado
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {materiales.map((material) => (
            <div
              key={material.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col"
            >
              <div className="relative">
                <div className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                  {material.tag}
                </div>
                <img
                  src={material.image}
                  alt={material.title}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-4 flex-grow">
                <h4 className="text-lg font-medium mb-2">{material.title}</h4>
              </div>
              <div className="px-4 pb-4">
                <Link
                  to={`/material/${material.id}`}
                  className="inline-block bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded"
                >
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/books"
            className="inline-block bg-orange-600 hover:bg-orange-700 transition-colors text-white px-6 py-3 rounded font-semibold uppercase"
          >
            Ver todos los materiales
          </Link>
        </div>
      </div>
    </section>
  )
}
