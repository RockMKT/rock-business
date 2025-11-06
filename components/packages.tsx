"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Packages() {


  const [currentSlide, setCurrentSlide] = useState(0)
  
    const carouselImages = ["/Pilar.jpg", "/preparacion.jpg", "/preparacion-copas.jpg"]
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
    }
  

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left side - Visual showcase */}
                 <div className="space-y-4">
            <div className="relative h-[60vh] md:h-[70vh] rounded-xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
              {/* Carousel images */}
              {carouselImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Event venue ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? "bg-primary w-8" : "bg-primary/50 hover:bg-primary/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Package details */}
          <div className="space-y-8">
            <div>
              <p className="text-primary text-sm font-bold mb-2 uppercase tracking-wide">Nuestros Paquetes</p>
              <h3 className="text-4xl font-titulos md:text-5xl font-bold mb-3 text-white">PAQUETES QUE HACEN <span className="text-primary">MATCH</span> CON TU EMPRESA</h3>
              <p className="text-xl text-muted-foreground mb-6">Elegí tu propuesta</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground">Meeting Pack (media o jornada completa): desayunos, brunch, 
      almuerzo, cocktails, cena</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground">Celebraciones fin de año, días especiales, agasajos para equipos</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground">After Office Session - Ambiente rockstar</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground">Premium Event Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground">Espacio para shootings para marcas que vibran Rock</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground">Add-ons: DJs, artistas, producción audiovisual</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="mailto:contacto@rockandfellersba.com.ar?subject=Consulta%20Rock%20Business&body=Hola!%20Estoy%20interesado%20en%20saber%20sobre%20Rock%20Business.">
                                <button className="flex cursor-pointer items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-bold hover:bg-opacity-90 transition-all">
                SOLICITA TU PROPUESTA PERSONALIZADA
                <ChevronRight className="w-5 h-5" />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}