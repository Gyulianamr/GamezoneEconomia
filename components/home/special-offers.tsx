import Link from "next/link"
import { Tag, Truck, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const offers = [
  {
    icon: Tag,
    title: "10% en Primera Compra",
    description: "Usa el código BIENVENIDO10",
  },
  {
    icon: Truck,
    title: "Envío Gratis",
    description: "En pedidos desde L. 1,250",
  },
  {
    icon: Shield,
    title: "Garantía de Compra",
    description: "30 días para devoluciones",
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "2-5 días hábiles en Honduras",
  },
]

export function SpecialOffers() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Promo Banner */}
        <Card className="mb-12 overflow-hidden border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5">
          <CardContent className="flex flex-col items-center justify-between gap-6 p-8 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold">Ofertas Gaming de Temporada</h2>
              <p className="mt-2 text-muted-foreground">
                Obtén hasta 20% de descuento en consolas y accesorios seleccionados
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/products">Ver Ofertas</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <Card key={offer.title} className="bg-secondary/50">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-lg bg-primary/10 p-2">
                  <offer.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{offer.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{offer.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
