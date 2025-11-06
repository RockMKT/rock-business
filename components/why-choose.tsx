"use client"

import { Check } from "lucide-react"
import { useState, useEffect } from "react"

export default function WhyChoose() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const reasonsDesktop = [
    "Espacios con identidad, distintos a hoteles impersonales",
    "Ubicación estratégica: sedes Pilar, Unicenter y Palermo",
    "Gastronomía premium a medida con menús ad hoc",
    "Tecnología de última generación para presentaciones",
    "Salas VIP de uso exclusivo con capacidad para 100pax",
    "Hospitalidad diferencial con estilo rockstar",
  ]

  const reasonsMobile = [
    "Espacios con identidad, distintos a hoteles impersonales en ubicaciónes estratégicas: sedes Pilar, Unicenter y Palermo",
    "Gastronomía premium a medida con menús ad hoc y la mejor tecnología para presentaciones",
    "Salas VIP exclusivas con capacidad para 100pax y hospitalidad diferencial",
  ]

  const reasons = isMobile ? reasonsMobile : reasonsDesktop

  return (
    <section id="why" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-titulos font-bold mb-4">
            ¿POR QUÉ <span className="text-primary">ELEGIRNOS</span>?
          </h2>
          <p className="text-xl font-texto text-muted-foreground">Mucho más que un Meeting Room</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-secondary border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0">
                <Check className="w-6 h-6 text-primary mt-1" />
              </div>
              <p className="text-lg font-texto font-medium">{reason}</p>
            </div>
          ))}
        </div>

        <a href="mailto:contacto@rockandfellersba.com.ar?subject=Consulta%20Rock%20Business&body=Hola!%20Estoy%20interesado%20en%20saber%20sobre%20Rock%20Business.">
          <button className="mt-12 px-8 py-3 bg-primary cursor-pointer font-titulos text-white hover:bg-opacity-90 transition-all">
            MIRA LO QUE PREPARAMOS PARA VOS
          </button>
        </a>
      </div>
    </section>
  )
}