import type { Metadata } from "next"
import { OrderConfirmation } from "@/components/order/order-confirmation"

export const metadata: Metadata = {
  title: "Pedido Confirmado",
  description: "Tu pedido ha sido realizado exitosamente. Gracias por comprar en GameZone.",
}

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen py-8 lg:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <OrderConfirmation />
      </div>
    </div>
  )
}
