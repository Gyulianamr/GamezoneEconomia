"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function CartContent() {
  const { items, removeFromCart, updateQuantity, getSubtotal, getTax, getCartTotal } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-HN", {
      style: "currency",
      currency: "HNL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const shippingCost = getSubtotal() >= 1250 ? 0 : 150

  if (items.length === 0) {
    return (
      <Card className="mx-auto max-w-md text-center">
        <CardContent className="pt-8">
          <div className="mb-4 inline-flex rounded-full bg-secondary p-4">
            <ShoppingBag className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="mb-2 text-xl font-semibold">Tu carrito está vacío</h2>
          <p className="mb-6 text-muted-foreground">
            Parece que aún no has agregado ningún producto a tu carrito.
          </p>
          <Button asChild>
            <Link href="/products">Empezar a Comprar</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>
              Productos en el Carrito ({items.length} {items.length === 1 ? "producto" : "productos"})
            </CardTitle>
          </CardHeader>
          <CardContent className="divide-y divide-border">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                {/* Product image */}
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-secondary">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                {/* Product info */}
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <Link
                        href={`/products/${item.id}`}
                        className="font-medium transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {formatPrice(item.price)} c/u
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Eliminar producto</span>
                    </Button>
                  </div>

                  {/* Quantity and total */}
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                        <span className="sr-only">Disminuir cantidad</span>
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= 10}
                      >
                        <Plus className="h-3 w-3" />
                        <span className="sr-only">Aumentar cantidad</span>
                      </Button>
                    </div>
                    <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Order Summary */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Resumen del Pedido</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatPrice(getSubtotal())}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Envío</span>
              <span>{shippingCost === 0 ? "Gratis" : formatPrice(shippingCost)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">ISV (15%)</span>
              <span>{formatPrice(getTax())}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>{formatPrice(getCartTotal() + shippingCost)}</span>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-3">
            <Button asChild className="w-full" size="lg">
              <Link href="/checkout">Proceder al Pago</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/products">Seguir Comprando</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Free shipping notice */}
        {getSubtotal() < 1250 && (
          <Card className="mt-4 border-primary/30 bg-primary/5">
            <CardContent className="p-4 text-center text-sm">
              <p>
                Agrega <span className="font-bold text-primary">{formatPrice(1250 - getSubtotal())}</span>{" "}
                más para obtener <span className="font-bold">envío gratis</span>
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
