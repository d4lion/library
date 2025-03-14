import { Link } from "@remix-run/react"
import {
  Book,
  BookOpen,
  BookText,
  BookmarkCheck,
  GraduationCap,
  History,
  Library,
  LogOut,
  Menu,
  Music,
  PenTool,
  School,
  Settings,
  Sparkles,
  User,
  Users,
} from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "../../ui/navigation-menu"

const genres = [
  {
    category: "Literatura",
    items: [
      {
        title: "Novela",
        description: "Narrativas extensas de ficción",
        href: "/genero/novela",
        icon: BookText,
      },
      {
        title: "Poesía",
        description: "Expresión artística en verso",
        href: "/genero/poesia",
        icon: PenTool,
      },
      {
        title: "Ensayo",
        description: "Textos argumentativos y reflexivos",
        href: "/genero/ensayo",
        icon: BookmarkCheck,
      },
    ],
  },
  {
    category: "Por Edad",
    items: [
      {
        title: "Infantil",
        description: "Lecturas para niños de todas las edades",
        href: "/genero/infantil",
        icon: Sparkles,
      },
      {
        title: "Juvenil",
        description: "Historias para adolescentes y jóvenes",
        href: "/genero/juvenil",
        icon: BookOpen,
      },
    ],
  },
  {
    category: "No Ficción",
    items: [
      {
        title: "Historia",
        description: "Relatos y análisis históricos",
        href: "/genero/historia",
        icon: History,
      },
      {
        title: "Biografía",
        description: "Vidas e historias personales",
        href: "/genero/biografia",
        icon: User,
      },
      {
        title: "Ciencia",
        description: "Divulgación científica accesible",
        href: "/genero/ciencia",
        icon: GraduationCap,
      },
    ],
  },
]

const formats = [
  {
    title: "Libros Digitales (PDF)",
    description: "Descarga y lee en cualquier dispositivo",
    href: "/formatos/pdf",
    icon: Book,
  },
  {
    title: "Audiolibros",
    description: "Escucha tus libros favoritos",
    href: "/formatos/audio",
    icon: Music,
  },
  {
    title: "Libros Interactivos",
    description: "Experiencias de lectura inmersivas",
    href: "/formatos/interactivo",
    icon: Sparkles,
  },
]

const programs = [
  {
    title: "Programas Educativos",
    description: "Iniciativas para escuelas y comunidades",
    href: "/programas/educativos",
    icon: School,
  },
  {
    title: "Talleres de Lectura",
    description: "Grupos de lectura guiados por expertos",
    href: "/programas/talleres",
    icon: Users,
  },
  {
    title: "Formación Docente",
    description: "Capacitación para educadores",
    href: "/programas/formacion",
    icon: GraduationCap,
  },
  {
    title: "Bibliotecas Comunitarias",
    description: "Apoyo a bibliotecas locales",
    href: "/programas/bibliotecas",
    icon: Library,
  },
]

export function SiteHeader() {
  return (
    <header>
      <div className="bg-[#5F8DB5] h-7"></div>
      <nav className="bg-[#003865] h-16 flex justify-between">
        <div className="flex items-center justify-between h-full px-4">
          <Link to={"/"} className="text-white">
            <h1 className="text-2xl font-bold">Biblioteca Digital</h1>
          </Link>
        </div>

        <NavigationMenu className="text-white">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Contenidos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link to={"/books"} className="h-full">
                        Books
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to={"/books"}>Books</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to={"/books"}>Books</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to={"/books"}>Books</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to={"/books"}>
                <NavigationMenuLink className="bg-transparent">
                  Documentacion
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="w-[300px]"></div>
      </nav>
    </header>
  )
}
