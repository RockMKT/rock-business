import { MapPin, Users } from "lucide-react"

export default function Locations() {
  const locations = [
    {
      name: "PILAR",
      capacity: "460 pax",
      features: ["Dos salas VIP para hasta 18 pax", "Exclusividad", "Estacionamiento privado"],
      color: "from-amber-600 to-amber-700",
      ubi: 'https://maps.app.goo.gl/7yu3sydP4cvqwxrWA'
    },
    {
      name: "UNICENTER",
      capacity: "540 pax",
      features: ["Sala VIP para hasta 70 pax", "Corazón de zona norte"],
      color: "from-amber-600 to-amber-700",
      ubi: 'https://maps.app.goo.gl/YqQR6msMvtRcMkKA6'
    },
    {
      name: "PALERMO",
      capacity: "520 pax",
      features: ["Urbano y trendy", "Epicentro de networking ejecutivo"],
      color: "from-amber-600 to-amber-700",
      ubi:"https://maps.app.goo.gl/oKdLkSgWKKkBUHyT7"
    },
  ]

  return (
    <section id="locations" className="relative py-20 bg-secondary overflow-hidden">

      <div className="absolute inset-0">
    <img 
      src="/sede.png" 
      alt="Background" 
      className="w-full h-full object-cover"
    />
    {/* Dark overlay para que el texto sea legible */}
    {/* <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-secondary/90" /> */}
  </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-titulos font-bold mb-4">
            TRES SEDES, <span className="text-primary">UNA SOLA VIBRA</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-background p-8 border border-primary/20 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-2xl font-titulos font-bold text-primary mb-2">{location.name}</h3>
              <div className="flex items-center font-texto gap-2 mb-6 text-lg font-semibold">
                <Users size={20} />
                {location.capacity}
              </div>
              <ul className="space-y-3 mb-8">
                {location.features.map((feature, idx) => (
                  <li key={idx} className="flex font-texto gap-2 text-muted-foreground">
                    <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={location.ubi} target="blank">
                   <button className="w-full cursor-pointer font-texto px-6 py-2 border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all">
                CONOCER SEDE
              </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
