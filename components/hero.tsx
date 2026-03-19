"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - you can integrate with your backend here
    const mailtoLink = `mailto:contacto@rockandfellersba.com.ar?subject=Solicitud de reserva - ${formData.empresa}&body=Nombre: ${formData.nombre}%0D%0AEmpresa: ${formData.empresa}%0D%0ACorreo: ${formData.correo}%0D%0AMensaje: ${formData.mensaje}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img src="/beneficios.jpg" alt="Background" className="w-full h-full object-cover" />
        {/* Dark overlay para que el texto sea legible */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-secondary/90" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout: Text left, Form right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Tagline */}
            {/* <div className="inline-block mb-6 px-4 py-2 bg-secondary/80 backdrop-blur-sm border border-primary/20">
              <p className="text-primary font-texto font-semibold text-sm">#Rock&Business</p>
            </div> */}

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-titulos font-bold mb-6 leading-tight text-primary">
              #ROCK&BUSINESS
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl font-texto italic text-muted-foreground mb-4">
              PARA TUS REUNIONES Y EVENTOS CORPORATIVOS
            </p>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg font-texto text-muted-foreground mb-8 leading-relaxed">
              Rock&Feller's es mucho más que un restaurante. Nacido del espíritu emprendedor de sus fundadores hace más
              de 30 años, evolucionó hacia un espacio premium donde gastronomía, arquitectura, tecnología y la mística
              del rock se combinan para ofrecer experiencias corporativas memorables.
            </p>

            {/* CTA Button - Only visible on desktop */}
            {/* <div className="hidden lg:block">
              <Link href="#locations">
                <button className="px-8 py-3 cursor-pointer font-titulos border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all">
                  CONOCER SEDES
                </button>
              </Link>
            </div> */}
          </div>

          {/* Right Column - Form */}
          <div className="w-full">
            <div className="bg-transparent/95 p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-titulos font-bold text-foreground mb-6 text-primary ">SOLICITAR RESERVA</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-texto font-semibold text-foreground mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-border bg-white text-black font-texto focus:outline-none focus:border-primary transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-texto font-semibold text-foreground mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-border bg-white text-black font-texto focus:outline-none focus:border-primary transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="correo" className="block text-sm font-texto font-semibold text-foreground mb-2">
                    Correo *
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    required
                    value={formData.correo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-border bg-white text-black font-texto focus:outline-none focus:border-primary transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-texto font-semibold text-foreground mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-border bg-white text-black font-texto focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu evento..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-titulos font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                >
                  SOLICITAR UNA RESERVA
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
