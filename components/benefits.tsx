export default function Benefits() {
  const benefits = [
    { title: "MENÚS CORPORATIVOS", desc: "Con platos icónicos" },
    { title: "PANTALLAS UHD", desc: "Para presentaciones y sonido profesional Bose" },
    { title: "ESTACIONAMIENTO", desc: "Cómodo y privado" },
    { title: "STAFF ESPECIALIZADO", desc: "Atención de primera clase" },
    { title: "PERSONALIZACIÓN", desc: "De espacios y branding" },
  ]

  return (
    <section className="relative py-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0">
    <img 
      src="/banner.jpg" 
      alt="Background" 
      className="w-full h-full object-cover"
    />
    {/* Dark overlay para que el texto sea legible */}
    <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-secondary/90" />
  </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-titulos text-4xl md:text-5xl font-bold mb-4">
            BENEFICIOS QUE <span className="text-primary">MARCAN EL RITMO</span>
          </h2>
          <p className="text-xl font-text text-muted-foreground">UN ESCENARIO PREMIUM</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-background border border-primary/20 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-titulos font-bold text-primary mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground font-texto">{benefit.desc}</p>
            </div>
          ))}
        </div>

<a href="mailto:contacto@rockandfellersba.com.ar?subject=Consulta%20Rock%20Business&body=Hola!%20Estoy%20interesado%20en%20saber%20sobre%20Rock%20Business.">
     <button className="mt-12 font-titulos cursor-pointer px-8 py-3 bg-primary text-white hover:bg-opacity-90 transition-all">
          QUIERO SABER MÁS
        </button>
</a>
      </div>
    </section>
  )
}
