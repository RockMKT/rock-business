import { Music } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
  {/* Background Image with overlay */}
  <div className="absolute inset-0">
    <img 
      src="/beneficios.jpg" 
      alt="Background" 
      className="w-full h-full object-cover"
    />
    {/* Dark overlay para que el texto sea legible */}
    <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-secondary/90" />
  </div>

  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Tagline */}
    <div className="inline-block mb-6 px-4 py-2 bg-secondary/80 backdrop-blur-sm border border-primary/20">
      <p className="text-primary font-texto font-semibold text-sm">#Rock&Business</p>
    </div>

    {/* Main Headline */}
    <h1 className="text-4xl md:text-7xl font-titulos font-bold mb-6 leading-tight">ROCK&BUSINESS</h1>

    {/* Subtitle */}
    <p className="text-lg md:text-2xl font-texto italic text-muted-foreground mb-4">PARA TUS REUNIONES Y EVENTOS CORPORATIVOS</p>

    {/* Description */}
    <p className="text-sm md:text-lg font-texto text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
      Rock&Feller's es mucho más que un restaurante. Nacido del espíritu
emprendedor de sus fundadores hace más de 30 años, evolucionó hacia un
espacio premium donde gastronomía, arquitectura, tecnología y la mística
del rock se combinan para ofrecer experiencias corporativas memorables.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="mailto:contacto@rockandfellersba.com.ar?subject=Consulta%20Rock%20Business&body=Hola!%20Estoy%20interesado%20en%20saber%20sobre%20Rock%20Business.">
        <button className="px-8 font-titulos cursor-pointer py-3 bg-primary text-white font-bold hover:bg-opacity-90 transition-all">
          SOLICITAR PRESUPUESTO
        </button>
      </a>
      <Link href='#locations'>
        <button className="px-8 py-3 cursor-pointer font-titulos border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all">
          VER SEDES
        </button>
      </Link>
    </div>
  </div>

  {/* Decorative element */}
  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
</section>
  )
}