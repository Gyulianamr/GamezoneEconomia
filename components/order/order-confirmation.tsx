"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface OrderItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

interface OrderData {
  orderId: string
  items: OrderItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  customer: {
    fullName: string
    email: string
    address: string
    city: string
    postalCode: string
  }
  date: string
}

export function OrderConfirmation() {
  const [order, setOrder] = useState<OrderData | null>(null)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-HN", {
      style: "currency",
      currency: "HNL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  useEffect(() => {
    const savedOrder = localStorage.getItem("gamezone-last-order")
    if (savedOrder) {
      try {
        setOrder(JSON.parse(savedOrder))
      } catch {
        console.error("Error al cargar datos del pedido")
      }
    }
  }, [])

  if (!order) {
    return (
      <Card className="text-center">
        <CardContent className="pt-8">
          <div className="mb-4 inline-flex rounded-full bg-secondary p-4">
            <Package className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="mb-2 text-xl font-semibold">No se Encontró Pedido</h2>
          <p className="mb-6 text-muted-foreground">
            No pudimos encontrar información de pedidos recientes.
          </p>
          <Button asChild>
            <Link href="/products">Empezar a Comprar</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Success Message */}
      <Card className="border-primary/30 bg-primary/5 text-center">
        <CardContent className="pt-8">
          <div className="mb-4 inline-flex rounded-full bg-primary/20 p-4">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">¡Pedido Confirmado!</h1>
          <p className="text-muted-foreground">
            Tu pedido ha sido realizado exitosamente. Gracias por comprar en GameZone.
          </p>
          <p className="mt-4 font-mono text-sm text-muted-foreground">
            ID del Pedido: <span className="font-medium text-foreground">{order.orderId}</span>
          </p>
        </CardContent>
      </Card>

      {/* Email Notice */}
      <Card className="bg-secondary/50">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="rounded-full bg-background p-2">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Correo de confirmación enviado</p>
            <p className="text-xs text-muted-foreground">
              Hemos enviado los detalles del pedido a {order.customer.email}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Resumen del Pedido</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Items */}
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.id} className="flex gap-3">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-secondary">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">Cant: {item.quantity}</p>
                  </div>
                  <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>

          <Separator />

          {/* Totals */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatPrice(order.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Envío</span>
              <span>{order.shipping === 0 ? "Gratis" : formatPrice(order.shipping)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">ISV</span>
              <span>{formatPrice(order.tax)}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shipping Address */}
      <Card>
        <CardHeader>
          <CardTitle>Dirección de Envío</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-medium">{order.customer.fullName}</p>
          <p className="text-sm text-muted-foreground">{order.customer.address}</p>
          <p className="text-sm text-muted-foreground">
            {order.customer.city}, {order.customer.postalCode}
          </p>
        </CardContent>
      </Card>

      {/* Continue Shopping */}
      <Card>
        <CardFooter className="flex-col gap-3 pt-6">
          <Button asChild className="w-full" size="lg">
            <Link href="/products">
              Seguir Comprando
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
