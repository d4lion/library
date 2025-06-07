import type { MetaFunction } from "@remix-run/node"
import { ContenidoRecomendadoSection } from "~/components/core/home/ContenidoRecomendado"
import { HeroSection } from "~/components/core/home/HeroSection"
import { EstadisticasSection } from "~/components/core/home/SeccionEstadisticas"
import { ProgramasSection } from "~/components/core/home/SeccionPrograma"
import { AppLayout } from "~/components/core/Layouts/AppLayout"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <AppLayout>
      <HeroSection />
      <ProgramasSection />
      <ContenidoRecomendadoSection />
      <EstadisticasSection />
    </AppLayout>
  )
}
