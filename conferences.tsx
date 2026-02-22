"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Calendar, ChevronRight, X, ArrowUpRight } from "lucide-react"
import { conferencesData } from "@/lib/site-config"

export function Conferences() {
  const [selected, setSelected] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  /* Reveal on scroll */
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("conf-visible")
          }
        })
      },
      { threshold: 0.15 }
    )
    const items = section.querySelectorAll(".conf-reveal")
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const selectedConf = selected !== null ? conferencesData[selected] : null

  return (
    <section id="conferencias" ref={sectionRef} className="relative lg:pl-16">

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <p
            className="conf-reveal mb-3 font-sans text-[9px] uppercase tracking-[0.5em] text-[#C6A85A]"
            style={{ opacity: 0, transform: "translateY(12px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          >
            Agenda Internacional
          </p>
          <h2
            className="conf-reveal font-serif text-4xl font-light uppercase tracking-[0.25em] text-[#222222] md:text-5xl"
            style={{
              fontFamily: "var(--font-playfair), var(--font-cormorant), Georgia, serif",
              opacity: 0, transform: "translateY(12px)", transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            Conferencias
          </h2>
          <div
            className="conf-reveal mt-6 h-px w-12 bg-[#C6A85A]"
            style={{ opacity: 0, transform: "translateY(12px)", transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s" }}
          />
          <p
            className="conf-reveal mt-5 max-w-lg font-sans text-xs leading-relaxed tracking-[0.1em] text-[#888888]"
            style={{ opacity: 0, transform: "translateY(12px)", transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s" }}
          >
            Eventos presenciales en distintas naciones. Cada conferencia es una experiencia de inmersion, revelacion y estrategia.
          </p>
        </div>

        {/* Event cards grid */}
        <div ref={cardsRef} className="mx-auto grid max-w-md gap-6">
          {conferencesData.map((conf, i) => {
            const isSelected = selected === i
            return (
              <article
                key={conf.title}
                onClick={() => setSelected(isSelected ? null : i)}
                className={`conf-reveal group relative cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ${
                  isSelected
                    ? "ring-2 ring-[#C6A85A]/50"
                    : "hover:shadow-lg"
                }`}
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: `opacity 0.7s ease ${0.1 + i * 0.08}s, transform 0.7s ease ${0.1 + i * 0.08}s, box-shadow 0.5s ease, ring-color 0.3s ease`,
                  background: "#FAFAF8",
                  border: isSelected ? "1px solid rgba(198,168,90,0.4)" : "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {/* Event image area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8E6E1]">
                  {/* Placeholder pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-[#C6A85A]/20">
                        <MapPin className="h-5 w-5 text-[#C6A85A]/50" />
                      </div>
                      <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#999999]">
                        {conf.location}
                      </p>
                    </div>
                  </div>
                  {/* Real event image (when available) */}
                  {conf.image && conf.image !== "/events/evento-placeholder.jpg" && (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={conf.image}
                        alt={conf.title}
                        className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/40 to-transparent" />
                    </>
                  )}

                  {/* Status badge */}
                  <div className="absolute right-3 top-3 z-30">
                    <span
                      className="inline-block rounded-sm px-2.5 py-1 font-sans text-[8px] font-bold uppercase tracking-[0.35em]"
                      style={{
                        background: conf.status === "proximo" ? "rgba(198,168,90,0.9)" : "rgba(91,15,28,0.85)",
                        color: "#fff",
                      }}
                    >
                      {conf.status === "proximo" ? "Proximo" : "Pasado"}
                    </span>
                  </div>

                  {/* Date overlay */}
                  <div className="absolute bottom-3 left-3 z-30">
                    <div className="flex items-center gap-1.5 rounded-sm bg-white/90 px-2.5 py-1 backdrop-blur-sm">
                      <Calendar className="h-3 w-3 text-[#222222]" />
                      <span className="font-sans text-[9px] font-medium uppercase tracking-wider text-[#222222]">
                        {conf.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5">
                  {/* Location */}
                  <div className="mb-2 flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-[#C6A85A]" />
                    <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#888888]">
                      {conf.venue} &middot; {conf.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-serif text-lg font-light text-[#222222] transition-colors duration-300 group-hover:text-[#C6A85A]"
                    style={{ fontFamily: "var(--font-playfair), var(--font-cormorant), Georgia, serif" }}
                  >
                    {conf.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 font-sans text-xs leading-relaxed text-[#777777]">
                    {conf.description}
                  </p>

                  {/* Expand hint */}
                  <div className="mt-4 flex items-center gap-1">
                    <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#C6A85A]">
                      {isSelected ? "Cerrar detalle" : "Ver detalle"}
                    </span>
                    <ChevronRight className={`h-3 w-3 text-[#C6A85A] transition-transform duration-300 ${isSelected ? "rotate-90" : ""}`} />
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Expanded detail panel */}
        {selectedConf && (
          <div
            className="mt-8 overflow-hidden rounded-xl"
            style={{
              background: "#FAFAF8",
              border: "1px solid rgba(198,168,90,0.25)",
              animation: "detailExpand 0.5s ease-out forwards",
            }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left: Info */}
              <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  className="mb-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#E0DDD8] text-[#888888] transition-colors hover:border-[#C6A85A] hover:text-[#C6A85A]"
                  aria-label="Cerrar detalle"
                >
                  <X className="h-3.5 w-3.5" />
                </button>

                {/* Badge */}
                <span
                  className="mb-4 inline-block w-fit rounded-sm px-3 py-1 font-sans text-[8px] font-bold uppercase tracking-[0.4em] text-[#C6A85A]"
                  style={{
                    background: "rgba(198,168,90,0.08)",
                    border: "1px solid rgba(198,168,90,0.2)",
                  }}
                >
                  {selectedConf.status === "proximo" ? "Proximo evento" : "Evento pasado"}
                </span>

                {/* Title */}
                <h3
                  className="font-serif text-2xl font-light uppercase tracking-[0.12em] text-[#222222] md:text-3xl"
                  style={{ fontFamily: "var(--font-playfair), var(--font-cormorant), Georgia, serif" }}
                >
                  {selectedConf.title}
                </h3>

                {/* Meta */}
                <div className="mt-5 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-[#C6A85A]" />
                    <span className="font-sans text-sm text-[#555555]">{selectedConf.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-[#C6A85A]" />
                    <span className="font-sans text-sm text-[#555555]">{selectedConf.venue} &middot; {selectedConf.location}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-[#E0DDD8]" />

                {/* Description */}
                <p className="max-w-md text-justify font-sans text-sm leading-[1.85] text-[#555555]">
                  {selectedConf.description}
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 border border-[#C6A85A] bg-[#C6A85A]/5 px-7 py-3 font-sans text-[10px] uppercase tracking-[0.25em] text-[#C6A85A] transition-all duration-500 hover:bg-[#C6A85A]/15"
                  >
                    Inscribirse
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 border border-[#222222] px-7 py-3 font-sans text-[10px] uppercase tracking-[0.25em] text-[#222222] transition-all duration-500 hover:bg-[#222222]/5"
                  >
                    Invitar a Max
                  </a>
                </div>
              </div>

              {/* Right: Map */}
              <div className="relative h-64 w-full lg:h-auto lg:w-[45%]">
                {selectedConf.mapUrl ? (
                  <iframe
                    src={selectedConf.mapUrl}
                    className="h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${selectedConf.location}`}
                    style={{ filter: "grayscale(0.6) contrast(1.1)" }}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[#E8E6E1]">
                    <MapPin className="h-8 w-8 text-[#999999]" />
                  </div>
                )}
                {/* Map overlay top gradient */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#FAFAF8] to-transparent lg:hidden" />
                <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-[#FAFAF8] to-transparent lg:block" />
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className="conf-reveal mt-16 text-center"
          style={{ opacity: 0, transform: "translateY(12px)", transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s" }}
        >
          <div className="mx-auto mb-6 h-px w-12 bg-[#C6A85A]/30" />
          <p className="mb-6 font-sans text-xs leading-relaxed tracking-[0.1em] text-[#888888]">
            Agenda a Max para tu iglesia, organizacion o evento.
          </p>
          <a
            href="#contacto"
            className="inline-block border border-[#C6A85A] bg-transparent px-8 py-3 font-sans text-xs uppercase tracking-[0.3em] text-[#222222] transition-all duration-500 hover:bg-[#C6A85A]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Invitar a Max
          </a>
        </div>
      </div>
    </section>
  )
}
