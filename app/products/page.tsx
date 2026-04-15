import { Suspense } from "react"
import type { Metadata } from "next"
import { ProductCatalog } from "@/components/products/product-catalog"

export const metadata: Metadata = {
  title: "Todos los Productos",
  description:
    "Explora nuestra colección completa de productos gaming incluyendo consolas, videojuegos y accesorios gaming. PlayStation, Xbox, Nintendo y más.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Todos los Productos</h1>
          <p className="mt-2 text-muted-foreground">
            Explora nuestra colección completa de productos gaming
          </p>
        </div>

        <Suspense fallback={<ProductCatalogSkeleton />}>
          <ProductCatalog />
        </Suspense>
      </div>
    </div>
  )
}

function ProductCatalogSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-square rounded-lg bg-secondary" />
          <div className="mt-4 h-4 w-3/4 rounded bg-secondary" />
          <div className="mt-2 h-4 w-1/2 rounded bg-secondary" />
        </div>
      ))}
    </div>
  )
}
