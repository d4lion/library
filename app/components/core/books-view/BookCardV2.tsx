// Interfaces
import {
  BookCoverProps,
  BookActionsButtonsProps,
  BookHeaderProps,
  BookSummaryProps,
  BookTagsProps,
  TooltipButtonProps,
} from "./IBooksCardV2"

import { useState } from "react"
import {
  Heart,
  Share2,
  Bookmark,
  Star,
  ChevronDown,
  Download,
  FileText,
  Headphones,
} from "lucide-react"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card"
import { motion } from "framer-motion"
import { Link } from "@remix-run/react"
import { useAuthStore } from "~/stores/useAuthStore"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"

interface BookCardProps {
  id: string | number
  title: string
  author: string
  publisher: string
  coverImage: string
  summary: string
  tags: string[]
  rating?: number | string
  year?: number | string
}

export function BookCardV2({
  id,
  title,
  author,
  publisher,
  coverImage,
  summary,
  tags,
  rating = 4.5,
  year,
}: BookCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [saved, setSaved] = useState(false)
  const [liked, setLiked] = useState(false)
  const { isAauthenticated } = useAuthStore()

  const truncatedSummary =
    summary.length > 150 && !expanded
      ? `${summary.substring(0, 150)}...`
      : summary

  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto"
      >
        <Card className="overflow-hidden border-slate-200 hover:shadow-lg transition-shadow duration-300 h-full">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
            <BookCover
              coverImage={coverImage}
              title={title}
              year={year || 2025}
              isAuthenticated={isAauthenticated}
              liked={liked}
              saved={saved}
              setLiked={setLiked}
              setSaved={setSaved}
            />

            <div className="flex-1 flex flex-col min-w-0">
              <BookHeader
                id={id}
                title={title}
                author={author}
                publisher={publisher}
                rating={rating}
              />

              <BookTags tags={tags} />

              <BookSummary
                summary={summary}
                truncatedSummary={truncatedSummary}
                expanded={expanded}
                setExpanded={setExpanded}
              />

              <BookActions isAuthenticated={isAauthenticated} />
            </div>
          </div>
        </Card>
      </motion.div>
    </TooltipProvider>
  )
}

const BookCover = ({
  coverImage,
  title,
  year,
  isAuthenticated,
  liked,
  saved,
  setLiked,
  setSaved,
}: BookCoverProps) => (
  <div className="relative flex-shrink-0 w-full sm:w-[140px] md:w-[180px] h-[200px] sm:h-[220px] md:h-[260px] rounded-md overflow-hidden group mx-auto sm:mx-0">
    <img
      src={coverImage || "/placeholder.svg"}
      alt={`Portada de ${title}`}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {isAuthenticated && (
      <BookActionsButtons
        liked={liked}
        saved={saved}
        setLiked={setLiked}
        setSaved={setSaved}
      />
    )}

    {year && (
      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
        {year}
      </div>
    )}
  </div>
)

const BookActionsButtons = ({
  liked,
  saved,
  setLiked,
  setSaved,
}: BookActionsButtonsProps) => (
  <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <TooltipButton
      icon={Heart}
      tooltip="Me gusta"
      active={liked}
      onClick={() => setLiked(!liked)}
    />
    <TooltipButton
      icon={Bookmark}
      tooltip="Guardar"
      active={saved}
      onClick={() => setSaved(!saved)}
    />
    <TooltipButton
      icon={Share2}
      tooltip="Compartir"
      active={false}
      onClick={() => {
        // Implementar función de compartir
        console.log("Compartir libro")
      }}
    />
  </div>
)

const TooltipButton = ({
  icon: Icon,
  tooltip = "",
  active,
  onClick,
}: TooltipButtonProps & {
  icon: React.ComponentType<{ className?: string }>
}) => (
  <>
    {tooltip ? (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white cursor-pointer shadow-sm"
            onClick={onClick}
          >
            <Icon
              className={`h-4 w-4 ${
                active ? "fill-primary text-primary" : "text-slate-600"
              }`}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    ) : (
      <Button
        variant="secondary"
        size="icon"
        className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white cursor-pointer shadow-sm"
        onClick={onClick}
      >
        <Icon
          className={`h-4 w-4 ${
            active ? "fill-primary text-primary" : "text-slate-600"
          }`}
        />
      </Button>
    )}
  </>
)

const BookHeader = ({
  id,
  title,
  author,
  publisher,
  rating,
}: BookHeaderProps) => (
  <CardHeader className="p-0 pb-3 space-y-2">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
      <div className="flex-1 min-w-0">
        <Link to={`/book/${id}`} className="block group">
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {title}
          </h3>
        </Link>
      </div>

      <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded text-amber-600 flex-shrink-0 self-start">
        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
        <span className="text-sm font-medium">{rating}</span>
      </div>
    </div>

    <div className="space-y-1">
      <div className="text-slate-600 text-sm sm:text-base">
        <span className="text-slate-500">por:</span>{" "}
        <span className="font-medium truncate">{author}</span>
      </div>
      <div className="text-xs sm:text-sm text-slate-500">
        <span className="truncate">Editorial: {publisher}</span>
      </div>
    </div>
  </CardHeader>
)

const BookTags = ({ tags }: BookTagsProps) => (
  <CardContent className="p-0 py-3">
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {tags.slice(0, 6).map((tag: string, index: number) => (
        <Badge
          key={index}
          variant="secondary"
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-2 py-1 truncate max-w-[120px]"
          title={tag}
        >
          {tag}
        </Badge>
      ))}
      {tags.length > 6 && (
        <Badge
          variant="secondary"
          className="bg-slate-100 text-slate-500 text-xs px-2 py-1"
        >
          +{tags.length - 6}
        </Badge>
      )}
    </div>
  </CardContent>
)

const BookSummary = ({
  summary,
  truncatedSummary,
  expanded,
  setExpanded,
}: BookSummaryProps) => (
  <div className="flex-1 mb-4">
    <div className="text-sm text-slate-700 leading-relaxed">
      <p className={expanded ? "" : "line-clamp-3 sm:line-clamp-4"}>
        {expanded ? summary : truncatedSummary}
      </p>

      {summary.length > 150 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary hover:text-primary/80 font-medium mt-2 flex items-center text-sm transition-colors"
        >
          {expanded ? "Leer menos" : "Leer más"}
          <ChevronDown
            className={`ml-1 h-4 w-4 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  </div>
)

const BookActions = ({ isAuthenticated }: { isAuthenticated: boolean }) => (
  <CardFooter className="p-0 mt-auto">
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="gap-2 cursor-pointer flex-1 sm:flex-none"
            disabled={!isAuthenticated}
            variant="primary"
          >
            <Download className="h-4 w-4" />
            <span className="truncate">Descargar</span>
          </Button>
        </TooltipTrigger>
        {!isAuthenticated && (
          <TooltipContent>
            <p>Inicia sesión para descargar</p>
          </TooltipContent>
        )}
      </Tooltip>

      <Button
        variant="secundary"
        className="gap-2 cursor-pointer flex-1 sm:flex-none"
      >
        <FileText className="h-4 w-4" />
        <span className="truncate">Ver PDF</span>
      </Button>

      <Button
        variant="outline"
        className="gap-2 cursor-pointer flex-1 sm:flex-none bg-transparent"
      >
        <Headphones className="h-4 w-4" />
        <span className="truncate sm:hidden">Audio</span>
        <span className="truncate hidden sm:inline">Audiolibro</span>
      </Button>
    </div>
  </CardFooter>
)
