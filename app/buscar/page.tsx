import { Suspense } from "react"
import { SearchResults } from "@/components/search/search-results"

export const metadata = {
  title: "Buscar - GameZone",
  description: "Busca productos en nuestra tienda de videojuegos y accesorios gaming",
}

export default function SearchPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<SearchLoadingSkeleton />}>
          <SearchResults />
        </Suspense>
      </div>
    </main>
  )
}

function SearchLoadingSkeleton() {
  return (
    <div className="space-y-8">
      <div className="h-10 w-64 animate-pulse rounded-lg bg-secondary" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="aspect-[3/4] animate-pulse rounded-xl bg-secondary" />
        ))}
      </div>
    </div>
  )
}
