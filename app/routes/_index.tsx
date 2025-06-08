import type { MetaFunction } from "@remix-run/node"
import { useSearchParams } from "@remix-run/react"
import { useEffect, useState } from "react"
import { ContenidoRecomendadoSection } from "~/components/core/home/ContenidoRecomendado"
import { HeroSection } from "~/components/core/home/HeroSection"
import { EstadisticasSection } from "~/components/core/home/SeccionEstadisticas"
import { ProgramasSection } from "~/components/core/home/SeccionPrograma"
import { AppLayout } from "~/components/core/Layouts/AppLayout"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"

export const meta: MetaFunction = () => {
  return [
    { title: "Secretor para contar | Home" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

enum queryParams {
  old_repo = "https://github.com/Secretos-para-contar/library",
}

export default function Index() {
  const [oldRepoDialogOpen, setOldRepoDialogOpen] = useState(false)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (searchParams.get("from") == queryParams.old_repo) {
      setOldRepoDialogOpen(true)
    }
  }, [])

  return (
    <AppLayout>
      <Dialog open={oldRepoDialogOpen} onOpenChange={setOldRepoDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle style={{ fontSize: "24px" }}>
              Vienes del repositorio antiguo de este proyecto 🚧
            </DialogTitle>
            <DialogDescription style={{ fontSize: "20px" }}>
              Te recordamos que puedes consultar en cualquier momento la
              documentación de este y su codigo fuente en el nuevo repositorio
              haciendo{" "}
              <a
                style={{ color: "orange" }}
                href="https://github.com/d4lion/library"
              >
                click aquí
              </a>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <HeroSection />
      <ProgramasSection />
      <ContenidoRecomendadoSection />
      <EstadisticasSection />
    </AppLayout>
  )
}
