import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/context/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: {
    default: "GameZone - Tu Tienda Gaming Definitiva",
    template: "%s | GameZone",
  },
  description:
    "Encuentra los mejores juegos, consolas y accesorios gaming en GameZone. Compra PlayStation, Xbox, Nintendo, accesorios gaming y más con envío rápido a Honduras.",
  keywords: [
    "tienda gaming",
    "videojuegos",
    "consolas",
    "PlayStation 5",
    "Xbox Series X",
    "Nintendo Switch",
    "accesorios gaming",
    "audífonos gaming",
    "teclado gaming",
    "mouse gaming",
    "Honduras",
    "Lempiras",
  ],
  authors: [{ name: "GameZone" }],
  creator: "GameZone",
  openGraph: {
    type: "website",
    locale: "es_HN",
    siteName: "GameZone",
    title: "GameZone - Tu Tienda Gaming Definitiva",
    description:
      "Encuentra los mejores juegos, consolas y accesorios gaming en GameZone.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GameZone - Tu Tienda Gaming Definitiva",
    description:
      "Encuentra los mejores juegos, consolas y accesorios gaming en GameZone.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
