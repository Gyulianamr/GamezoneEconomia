"use client"

import { useSearchParams } from "next/navigation"
import { useMemo } from "react"
import Link from "next/link"
import { Search, ArrowLeft } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import products from "@/data/products.json"

interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  inStock: boolean
  featured: boolean
}

export function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const results = useMemo(() => {
    if (!query.trim()) return []

    const searchQuery = query.toLowerCase().trim()
    return (products as Product[]).filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
    )
  }, [query])

  if (!query.trim()) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Search className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-2">Buscar Productos</h1>
        <p className="text-muted-foreground mb-6">
          Ingresa un término de búsqueda para encontrar productos
        </p>
        <Link href="/products">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ver todos los productos
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Encabezado de búsqueda */}
      <div>
        <Link
          href="/products"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a la tienda
        </Link>
        <h1 className="text-3xl font-bold">
          Resultados para &quot;{query}&quot;
        </h1>
        <p className="text-muted-foreground mt-2">
          {results.length === 0
            ? "No se encontraron productos"
            : `${results.length} producto${results.length === 1 ? "" : "s"} encontrado${results.length === 1 ? "" : "s"}`}
        </p>
      </div>

      {/* Resultados */}
      {results.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Search className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">
            No encontramos resultados
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md">
            No hay productos que coincidan con &quot;{query}&quot;. Intenta con otros
            términos o explora nuestras categorías.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/products?category=Consolas">
              <Button variant="outline">Consolas</Button>
            </Link>
            <Link href="/products?category=Videojuegos">
              <Button variant="outline">Videojuegos</Button>
            </Link>
            <Link href="/products?category=Accesorios Gaming">
              <Button variant="outline">Accesorios</Button>
            </Link>
          </div>
        </div>
      )}

      {/* Productos sugeridos cuando no hay resultados */}
      {results.length === 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">
            Productos que te pueden interesar
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {(products as Product[])
              .filter((p) => p.featured)
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
