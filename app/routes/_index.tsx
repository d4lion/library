import type { MetaFunction } from "@remix-run/node"
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
      <h1 className="text-2xl font-bold text-center mt-8">Welcome to Remix!</h1>
    </AppLayout>
  )
}
