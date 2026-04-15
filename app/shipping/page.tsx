import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Política de Envío",
  description: "Conoce las opciones de envío, tiempos de entrega y costos de envío de GameZone Honduras.",
}

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen py-8 lg:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">Política de Envío</h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Opciones de Envío</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p className="text-muted-foreground">
                En GameZone Honduras, ofrecemos varias opciones de envío para satisfacer tus necesidades:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Envío Estándar:</strong> 3-5 días hábiles - L. 150 (Gratis en pedidos desde L. 1,250)
                </li>
                <li>
                  <strong className="text-foreground">Envío Express:</strong> 1-2 días hábiles - L. 350
                </li>
                <li>
                  <strong className="text-foreground">Entrega el Mismo Día:</strong> Disponible en Tegucigalpa y San Pedro Sula - L. 500
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tiempo de Procesamiento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Los pedidos generalmente se procesan en 1-2 días hábiles. Durante temporadas altas o eventos de ventas, el procesamiento puede tomar hasta 3 días hábiles. Recibirás un correo de confirmación con información de seguimiento una vez que tu pedido haya sido enviado.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Destinos de Envío</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Actualmente enviamos a todos los departamentos de Honduras. Los tiempos de entrega pueden variar según la ubicación. Las entregas a zonas rurales pueden requerir tiempo adicional. Para pedidos especiales o envíos a áreas remotas, contáctanos para más información.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Seguimiento de Pedido</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Una vez que tu pedido sea enviado, recibirás un correo electrónico con información de seguimiento. Puedes usar este número de seguimiento para monitorear el estado de entrega de tu paquete. Si tienes alguna pregunta sobre tu envío, por favor contacta a nuestro equipo de atención al cliente.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Problemas de Entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Si tu paquete se pierde, daña o tiene un retraso significativo, por favor contáctanos dentro de los 14 días posteriores a la fecha de entrega esperada. Trabajaremos con el transportista para resolver el problema y asegurar que recibas tu pedido o un reembolso completo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
