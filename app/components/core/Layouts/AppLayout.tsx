import { SiteHeader } from "../NavBar/NavBar"

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  )
}
