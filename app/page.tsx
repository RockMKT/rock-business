import Image from "next/image";
import Header from "@/components/header"
import Hero from "@/components/hero"
import WhyChoose from "@/components/why-choose"
import Locations from "@/components/locations"
import EventTypes from "@/components/event-types"
import Benefits from "@/components/benefits"
import Packages from "@/components/packages"
import CTA from "@/components/cta"
import Footer from "@/components/footer"


export default function Home() {
  return (
     <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <WhyChoose />
      <Locations />
      <EventTypes />
      <Benefits />
      <Packages />
      <CTA />
      <Footer />
    </main>
  );
}
