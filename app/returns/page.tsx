import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Política de Devoluciones",
  description: "Conoce la política de devoluciones, reembolsos y cambios de GameZone Honduras.",
}

export default function ReturnsPolicyPage() {
  return (
    <div className="min-h-screen py-8 lg:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">Política de Devoluciones</h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Política de 30 Días</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Queremos que estés completamente satisfecho con tu compra. Si no estás contento con tu pedido, puedes devolver la mayoría de los productos dentro de los 30 días posteriores a la entrega para un reembolso completo. Los productos deben estar en su condición original, sin abrir y con todo el empaque original.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Productos Elegibles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">Los siguientes productos son elegibles para devolución:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Videojuegos y software sin abrir</li>
                <li>Consolas de videojuegos en empaque original</li>
                <li>Accesorios gaming sin usar con etiquetas</li>
                <li>Productos defectuosos (independientemente de si fueron abiertos)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Productos No Retornables</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">Los siguientes productos no pueden ser devueltos:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Videojuegos o software abiertos (a menos que sean defectuosos)</li>
                <li>Códigos de descarga digital que hayan sido canjeados</li>
                <li>Tarjetas de regalo</li>
                <li>Productos marcados como venta final</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cómo Devolver</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal space-y-2 pl-4 text-muted-foreground">
                <li>Contacta a nuestro equipo de atención al cliente para iniciar una devolución</li>
                <li>Recibe tu número de Autorización de Devolución de Mercancía (RMA)</li>
                <li>Empaca el producto de forma segura en su empaque original</li>
                <li>Incluye el número RMA en el exterior del paquete</li>
                <li>Envía el paquete usando un método de envío con seguimiento</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Procesamiento de Reembolsos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Una vez que recibamos tu devolución, inspeccionaremos el producto y procesaremos tu reembolso dentro de 5-7 días hábiles. Los reembolsos se acreditarán a tu método de pago original. Ten en cuenta que los costos de envío no son reembolsables a menos que la devolución sea debido a un error nuestro o un producto defectuoso.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cambios</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Si deseas cambiar un producto por uno diferente, por favor devuelve el producto original para un reembolso y realiza un nuevo pedido del producto deseado. Esto asegura el tiempo de procesamiento más rápido y garantiza la disponibilidad de tu nuevo producto.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
