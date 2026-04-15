import type { Metadata } from "next"
import { CartContent } from "@/components/cart/cart-content"

export const metadata: Metadata = {
  title: "Carrito de Compras",
  description: "Revisa tu carrito de compras y procede al pago en GameZone.",
}

export default function CartPage() {
  return (
    <div className="min-h-screen py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">Carrito de Compras</h1>
        <CartContent />
      </div>
    </div>
  )
}
