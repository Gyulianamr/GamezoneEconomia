import Link from "next/link"
import { Gamepad2, Disc3, Headphones } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Consolas",
    description: "PlayStation, Xbox, Nintendo y más",
    icon: Gamepad2,
    href: "/products?category=Consolas",
    count: 3,
  },
  {
    name: "Videojuegos",
    description: "Los últimos títulos y clásicos favoritos",
    icon: Disc3,
    href: "/products?category=Videojuegos",
    count: 4,
  },
  {
    name: "Accesorios Gaming",
    description: "Controles, audífonos, teclados y más",
    icon: Headphones,
    href: "/products?category=Accesorios Gaming",
    count: 5,
  },
]

export function CategoriesSection() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Comprar por Categoría</h2>
          <p className="mt-2 text-muted-foreground">
            Explora nuestra amplia selección de productos gaming
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="group h-full cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{category.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                  <span className="text-sm font-medium text-primary">
                    {category.count} productos
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
