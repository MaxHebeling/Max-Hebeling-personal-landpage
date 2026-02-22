import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Books } from "@/components/books"
import { Conferences } from "@/components/conferences"
import { Media } from "@/components/media"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

function SectionDivider() {
  return (
    <div className="mx-auto max-w-5xl px-6 lg:pl-16">
      <div className="h-px w-full bg-[#5B0F1C]" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Books />
      <SectionDivider />
      <Conferences />
      <SectionDivider />
      <Media />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  )
}
