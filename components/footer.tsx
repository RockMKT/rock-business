import { Instagram, Facebook, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-titulos text-lg font-bold mb-4">ROCK&FELLER'S</h3>
            <p className="font-texto text-muted-foreground text-sm">El escenario perfecto para que tu empresa brille</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-titulos font-bold mb-4 text-primary">Nosotros</h4>
            <p>Rock&Feller's es mucho más que un restaurante. Nacido del espíritu emprendedor de sus fundadores hace más de 30 años, evolucionó hacia un espacio premium donde gastronomía, arquitectura, tecnología y la mística del rock se combinan para ofrecer experiencias corporativas memorables.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-titulos font-bold mb-4 text-primary">Encontranos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="https://maps.app.goo.gl/oKdLkSgWKKkBUHyT7" target="blank" className="hover:text-primary transition-colors">
                  Palermo - Av. Dorrego 3570
                </Link>
              </li>
              <li>
                <Link href="https://maps.app.goo.gl/YqQR6msMvtRcMkKA6" target="blank" className="hover:text-primary transition-colors">
                  Unicenter - Párana 3745
                </Link>
              </li>
              <li>
                <Link href="https://maps.app.goo.gl/7yu3sydP4cvqwxrWA" target="blank" className="hover:text-primary transition-colors">
                  Pilar - Las Magnolias 533
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-titulos font-bold mb-4 text-primary">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contacto@rockandfellersba.com.ar</li>
              <li>www.rockandfellers.com.ar</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <Link
              href="https://www.instagram.com/rockandfellersba/"
              target="blank"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.facebook.com/rockandfellersba/"
              target="blank"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/rockandfellers/"
              target="blank"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Rock&Feller's. Desarrollado por Marketing R&F.</p>
        </div>
      </div>
    </footer>
  )
}
