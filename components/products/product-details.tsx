"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, ShoppingCart, Check, Truck, Shield } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "@/components/product-card"
import products from "@/data/products.json"

interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  inStock: boolean
}

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [showAdded, setShowAdded] = useState(false)
  const { addToCart } = useCart()

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-HN", {
      style: "currency",
      currency: "HNL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      quantity
    )
    setShowAdded(true)
    setTimeout(() => setShowAdded(false), 2000)
  }

  const incrementQuantity = () => setQuantity((q) => Math.min(q + 1, 10))
  const decrementQuantity = () => setQuantity((q) => Math.max(q - 1, 1))

  return (
    <div className="min-h-screen py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Productos
        </Link>

        {/* Product details grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              {product.category}
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">{product.name}</h1>
            <p className="mb-6 text-2xl font-bold">{formatPrice(product.price)}</p>

            {/* Availability */}
            <div className="mb-6 flex items-center gap-2">
              {product.inStock ? (
                <>
                  <span className="flex h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm text-primary">En Stock</span>
                </>
              ) : (
                <>
                  <span className="flex h-2 w-2 rounded-full bg-destructive" />
                  <span className="text-sm text-destructive">Agotado</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="mb-8 leading-relaxed text-muted-foreground text-pretty">{product.description}</p>

            {/* Quantity selector */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">Cantidad</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1 || !product.inStock}
                >
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Disminuir cantidad</span>
                </Button>
                <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={incrementQuantity}
                  disabled={quantity >= 10 || !product.inStock}
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Aumentar cantidad</span>
                </Button>
              </div>
            </div>

            {/* Add to cart button */}
            <Button
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock || showAdded}
              className="mb-8"
            >
              {showAdded ? (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  ¡Agregado al Carrito!
                </>
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Agregar al Carrito - {formatPrice(product.price * quantity)}
                </>
              )}
            </Button>

            {/* Benefits */}
            <div className="space-y-3">
              <Card className="bg-secondary/50">
                <CardContent className="flex items-center gap-3 p-4">
                  <Truck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Envío Gratis</p>
                    <p className="text-xs text-muted-foreground">En pedidos desde L. 1,250</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-secondary/50">
                <CardContent className="flex items-center gap-3 p-4">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">30 Días de Devolución</p>
                    <p className="text-xs text-muted-foreground">Política de devoluciones sin complicaciones</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 lg:mt-24">
            <h2 className="mb-8 text-2xl font-bold">Productos Relacionados</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
