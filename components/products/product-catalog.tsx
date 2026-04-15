"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import products from "@/data/products.json"

const categories = ["Todos", "Consolas", "Videojuegos", "Accesorios Gaming"]

export function ProductCatalog() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const categoryParam = searchParams.get("category")
  const activeCategory = categoryParam || "Todos"

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((product) => product.category === activeCategory)

  const handleCategoryChange = (category: string) => {
    if (category === "Todos") {
      router.push("/products")
    } else {
      router.push(`/products?category=${encodeURIComponent(category)}`)
    }
    // Evento de analítica simulado
    console.log(`[Analytics] Filtro de categoría cambiado: ${category}`)
  }

  return (
    <div>
      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-muted-foreground">
        Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? "producto" : "productos"}
        {activeCategory !== "Todos" && ` en ${activeCategory}`}
      </p>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">No se encontraron productos en esta categoría.</p>
          <Button variant="outline" className="mt-4" onClick={() => handleCategoryChange("Todos")}>
            Ver Todos los Productos
          </Button>
        </div>
      )}
    </div>
  )
}
