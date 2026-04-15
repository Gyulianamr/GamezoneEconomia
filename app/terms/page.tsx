import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Lee los términos y condiciones de uso del sitio web y servicios de GameZone Honduras.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-8 lg:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">Términos y Condiciones</h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Aceptación de Términos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Al acceder y usar el sitio web de GameZone, aceptas y te comprometes a cumplir con estos Términos y Condiciones. Si no estás de acuerdo con estos términos, por favor no uses nuestro sitio web ni servicios.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Uso del Sitio Web</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Aceptas usar este sitio web solo para propósitos legales. No debes:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Usar el sitio de manera que viole las leyes o regulaciones aplicables</li>
                <li>Intentar obtener acceso no autorizado a cualquier parte del sitio web</li>
                <li>Usar sistemas automatizados para acceder al sitio sin permiso</li>
                <li>Transmitir cualquier código dañino o malicioso</li>
                <li>Interferir con el funcionamiento adecuado del sitio web</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información de Productos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nos esforzamos por proporcionar información precisa de los productos, pero no garantizamos que las descripciones, precios u otro contenido sean precisos, completos o libres de errores. Nos reservamos el derecho de corregir cualquier error y cambiar o actualizar información en cualquier momento sin previo aviso.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Precios y Pagos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Todos los precios están listados en Lempiras Hondureños (HNL) y están sujetos a cambios sin previo aviso. Nos reservamos el derecho de rechazar o cancelar cualquier pedido si el precio fue listado incorrectamente. El pago debe realizarse al momento de la compra usando un método de pago aceptado.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Propiedad Intelectual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Todo el contenido de este sitio web, incluyendo texto, gráficos, logos, imágenes y software, es propiedad de GameZone o sus proveedores de contenido y está protegido por leyes de derechos de autor y otras leyes de propiedad intelectual. No puedes reproducir, distribuir o crear obras derivadas sin nuestro permiso escrito expreso.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitación de Responsabilidad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                GameZone no será responsable por daños indirectos, incidentales, especiales o consecuentes derivados de tu uso del sitio web o productos comprados a través del sitio web. Nuestra responsabilidad está limitada al precio de compra de los productos que ordenaste.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cambios a los Términos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán efectivos inmediatamente al publicarse en el sitio web. Tu uso continuado del sitio web después de cualquier cambio constituye la aceptación de los nuevos términos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Si tienes alguna pregunta sobre estos Términos y Condiciones, por favor contáctanos en soporte@gamezone.hn o a través de nuestro formulario de contacto en el sitio web.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
