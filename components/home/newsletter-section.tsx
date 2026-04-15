"use client"

import { useState } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus("error")
      setMessage("Por favor ingresa tu correo electrónico")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error")
      setMessage("Por favor ingresa un correo válido")
      return
    }

    setStatus("loading")

    // Simular llamada API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Evento de analítica simulado
    console.log(`[Analytics] Suscripción newsletter: ${email}`)

    setStatus("success")
    setMessage("¡Gracias por suscribirte! Revisa tu bandeja de entrada para ofertas exclusivas.")
    setEmail("")
  }

  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="border-primary/30">
          <CardContent className="flex flex-col items-center p-8 text-center lg:p-12">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl">Mantente en el Juego</h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              Suscríbete a nuestro boletín para ofertas exclusivas, nuevos lanzamientos y noticias gaming.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  disabled={status === "loading"}
                />
                <Button type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Suscribiendo..." : "Suscribirse"}
                </Button>
              </div>

              {message && (
                <p
                  className={`mt-3 text-sm ${
                    status === "success" ? "text-primary" : "text-destructive"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>

            <p className="mt-4 text-xs text-muted-foreground">
              Al suscribirte, aceptas nuestra Política de Privacidad. Cancela cuando quieras.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
