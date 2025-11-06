export default function CTA() {
  return (
    <section className="relative py-20 bg-secondary overflow-hidden">
      <div className="absolute inset-0">
    <img 
      src="/copas.jpg" 
      alt="Background" 
      className="w-full h-full object-cover"
    />
    {/* Dark overlay para que el texto sea legible */}
    <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-secondary/90" />
  </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-1xl font-titulos md:text-5xl font-bold mb-6">
          En Rock&Feller's tu negocio <br /> <span className="text-primary font-titulos"> suena mejor</span>
        </h2>

        <p className="text-xl font-texto text-muted-foreground mb-8 max-w-2xl mx-auto">
          Reservá tu espacio en Pilar, Palermo o Unicenter
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 font-titulos py-4 bg-primary text-white font-bold text-lg hover:bg-opacity-90 transition-all">
            CONTACTAR AHORA
          </button>
          <button className="px-8 font-titulos py-4 border-2 border-primary text-primary font-bold text-lg hover:bg-primary/10 transition-all">
            VER GALERÍA
          </button>
        </div>

            <div className="inline-block mt-7  mb-6 px-4 py-2 bg-secondary/80 backdrop-blur-sm border border-primary/20">
      <p className="text-primary font-texto font-semibold text-sm">#Rock&Business</p>
    </div>
      </div>
    </section>
  )
}
