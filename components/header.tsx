"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-border backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="https://rockandfellers.com.ar" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Rock&Feller's logo" 
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#why" className="text-sm font-texto hover:text-primary transition-colors">
              POR QUÉ ELEGIRNOS
            </Link>
            <Link href="#locations" className="text-sm font-texto hover:text-primary transition-colors">
              SEDES
            </Link>
            <Link href="#events" className="text-sm font-texto hover:text-primary transition-colors">
              EVENTOS
            </Link>
            <Link href="#packages" className="text-sm font-texto hover:text-primary transition-colors">
              PAQUETES
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="mailto:contacto@rockandfellersba.com.ar?subject=Consulta%20Rock%20Business&body=Hola!%20Estoy%20interesado%20en%20saber%20sobre%20Rock%20Business.">
                         <button className="px-6 cursor-pointer py-2 bg-primary text-white font-semibold hover:bg-opacity-90 transition-all">
              CONTACTAR
            </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4 border-t border-border pt-4">
            <Link href="#why" className="text-sm cursor-pointer hover:text-primary transition-colors">
              Por Qué Elegirnos
            </Link>
            <Link href="#locations" className="text-sm cursor-pointer hover:text-primary transition-colors">
              Sedes
            </Link>
            <Link href="#events" className="text-sm cursor-pointer hover:text-primary transition-colors">
              Eventos
            </Link>
            <Link href="#packages" className="text-sm cursor-pointer hover:text-primary transition-colors">
              Paquetes
            </Link>
            <a href="mailto:contacto@rockandfellersba.com.ar?subject=Consulta%20Rock%20Business&body=Hola!%20Estoy%20interesado%20en%20saber%20sobre%20Rock%20Business." target="blank">
                            <button className="px-6 py-2 bg-primary cursor-pointer text-primary-foreground font-semibold hover:bg-opacity-90 transition-all rounded-lg w-full">
              Contactar
            </button>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}