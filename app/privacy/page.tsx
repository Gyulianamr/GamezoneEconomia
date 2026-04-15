import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Conoce cómo GameZone Honduras recopila, usa y protege tu información personal.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-8 lg:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">Política de Privacidad</h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información que Recopilamos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Recopilamos información que nos proporcionas directamente, incluyendo:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Nombre, correo electrónico y número de teléfono</li>
                <li>Dirección de envío y facturación</li>
                <li>Información de pago (procesada de forma segura a través de nuestros proveedores de pago)</li>
                <li>Historial de pedidos y preferencias</li>
                <li>Comunicaciones con nuestro equipo de atención al cliente</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cómo Usamos Tu Información</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">Usamos la información que recopilamos para:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Procesar y cumplir tus pedidos</li>
                <li>Enviar confirmaciones de pedido y actualizaciones de envío</li>
                <li>Responder a tus preguntas y proporcionar atención al cliente</li>
                <li>Enviar correos promocionales (con tu consentimiento)</li>
                <li>Mejorar nuestro sitio web y servicios</li>
                <li>Prevenir fraude y mejorar la seguridad</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compartir Información</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                No vendemos tu información personal. Podemos compartir tu información con:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Transportistas para entregar tus pedidos</li>
                <li>Procesadores de pago para completar transacciones</li>
                <li>Proveedores de servicios que asisten en nuestras operaciones</li>
                <li>Autoridades legales cuando sea requerido por ley</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies y Seguimiento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Usamos cookies y tecnologías de seguimiento similares para analizar el tráfico del sitio web, personalizar contenido y mejorar tu experiencia de navegación. Puedes controlar las preferencias de cookies a través de la configuración de tu navegador. Ten en cuenta que deshabilitar las cookies puede afectar algunas funcionalidades del sitio web.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Seguridad de Datos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Implementamos medidas técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet es 100% seguro, y no podemos garantizar seguridad absoluta.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tus Derechos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">Tienes derecho a:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Acceder y recibir una copia de tus datos personales</li>
                <li>Solicitar corrección de información inexacta</li>
                <li>Solicitar eliminación de tus datos personales</li>
                <li>Optar por no recibir comunicaciones de marketing</li>
                <li>Retirar consentimiento cuando sea aplicable</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacidad de Menores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nuestro sitio web no está dirigido a niños menores de 13 años. No recopilamos conscientemente información personal de niños menores de 13 años. Si crees que hemos recopilado información de un menor de 13 años, por favor contáctanos inmediatamente.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contáctanos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Si tienes alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de datos, por favor contáctanos en privacidad@gamezone.hn o a través de nuestro formulario de contacto en el sitio web.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
