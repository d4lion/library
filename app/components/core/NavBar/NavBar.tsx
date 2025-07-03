import { Link } from "@remix-run/react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu"

import UserMenu from "./UserMenu"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  }, [])

  if (!render) return null

  return (
    <header>
      <div className="bg-[#5F8DB5] h-7"></div>

      <nav className="bg-[#003865] h-20 flex justify-between items-center">
        <div className="flex items-center justify-between h-full px-4">
          <Link to="/" className="text-white">
            <img
              src="/20-blanco.png"
              alt="logo de secretos para contar"
              width={100}
            />
          </Link>
        </div>

        <NavigationMenu className="text-white">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Contenidos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 md:w-[400px] lg:w-[500px] rounded-lg shadow-lg border-t border-gray-200">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/libros"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Libros
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Explora nuestra colección de libros digitales y
                        audiolibros
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/documentacion" className="bg-transparent">
                  Documentación
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <UserMenu />
      </nav>
    </header>
  )
}
