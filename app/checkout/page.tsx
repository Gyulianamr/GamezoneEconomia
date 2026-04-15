import type { Metadata } from "next"
import { CheckoutForm } from "@/components/checkout/checkout-form"

export const metadata: Metadata = {
  title: "Finalizar Compra",
  description: "Completa tu pedido de forma segura en GameZone. Pago seguro con múltiples opciones.",
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">Finalizar Compra</h1>
        <CheckoutForm />
      </div>
    </div>
  )
}
