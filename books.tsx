"use client"

import { useEffect, useRef, useState } from "react"
import { booksData } from "@/lib/site-config"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

export function Books() {
  const rowRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedBook, setSelectedBook] = useState<number | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Check scroll position for arrow visibility
  function updateArrows() {
    const row = rowRef.current
    if (!row) return
    setCanScrollLeft(row.scrollLeft > 10)
    setCanScrollRight(row.scrollLeft < row.scrollWidth - row.clientWidth - 10)
  }

  useEffect(() => {
    const row = rowRef.current
    if (!row) return
    row.addEventListener("scroll", updateArrows, { passive: true })
    updateArrows()
    return () => row.removeEventListener("scroll", updateArrows)
  }, [])

  // Fade in on scroll
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("books-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  function scrollRow(direction: "left" | "right") {
    const row = rowRef.current
    if (!row) return
    const scrollAmount = row.clientWidth * 0.7
    row.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  const selected = selectedBook !== null ? booksData[selectedBook] : null

  return (
    <section id="libros" className="lg:pl-16" style={{ background: "#F3F2EF" }}>
      <div
        ref={sectionRef}
        className="books-section relative py-20 md:py-28"
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Section header */}
        <div className="mb-12 flex flex-col items-center px-6 md:mb-16">
          <h2
            className="font-serif text-4xl font-light uppercase tracking-[0.25em] text-[#222222] md:text-5xl"
            style={{ fontFamily: "var(--font-playfair), var(--font-cormorant), Georgia, serif" }}
          >
            Libros
          </h2>
          <p className="mt-4 max-w-md text-center font-sans text-xs leading-relaxed tracking-[0.15em] text-[#888888]">
            Obras que estructuran pensamiento y forman generaciones.
          </p>
          <div className="mt-6 h-px w-12 bg-[#C6A85A]" />
        </div>

        {/* Netflix Featured Banner - Newest book */}
        {(() => {
          const newest = booksData[booksData.length - 1]
          return (
            <div className="relative mx-6 mb-14 overflow-hidden rounded-xl md:mx-12 lg:mx-16" style={{ minHeight: "380px" }}>
              {/* Background cover image - blurred */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={newest.coverImage}
                alt=""
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-md"
                aria-hidden="true"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/30" />

              {/* Content */}
              <div className="relative flex h-full min-h-[380px] flex-col items-center gap-8 px-6 py-10 md:flex-row md:items-center md:gap-12 md:px-12">
                {/* Cover */}
                <div className="w-40 flex-shrink-0 md:w-48 lg:w-52">
                  <div
                    className="relative overflow-hidden rounded-sm"
                    style={{
                      aspectRatio: "2/3",
                      boxShadow: "8px 10px 40px rgba(0,0,0,0.5), 0 0 60px rgba(198,168,90,0.08)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={newest.coverImage}
                      alt={`Portada de ${newest.titulo}`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
                  {/* Badge */}
                  <span
                    className="mb-4 inline-block rounded-sm px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.4em] text-[#C6A85A]"
                    style={{
                      background: "rgba(198,168,90,0.12)",
                      border: "1px solid rgba(198,168,90,0.25)",
                    }}
                  >
                    Nuevo Libro
                  </span>

                  {/* Title */}
                  <h3
                    className="font-serif text-3xl font-light uppercase tracking-[0.15em] text-white md:text-4xl lg:text-5xl"
                    style={{
                      fontFamily: "var(--font-playfair), var(--font-cormorant), Georgia, serif",
                      lineHeight: 1.15,
                      textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                    }}
                  >
                    {newest.titulo}
                  </h3>

                  {/* Author */}
                  <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.35em] text-white/50">
                    Max Hebeling
                  </p>

                  {/* Description */}
                  <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-white/70">
                    {newest.descripcion}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px w-20 bg-[#C6A85A]/30" />

                  {/* CTA */}
                  <a
                    href={newest.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#C6A85A] bg-[#C6A85A]/10 px-8 py-3 font-sans text-[10px] uppercase tracking-[0.25em] text-[#C6A85A] transition-all duration-500 hover:bg-[#C6A85A]/20"
                  >
                    Adquirir
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Netflix-style horizontal row */}
        <div className="relative">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scrollRow("left")}
              className="absolute -left-1 top-0 z-20 hidden h-full w-14 items-center justify-center transition-opacity duration-300 md:flex"
              style={{
                background: "linear-gradient(to right, rgba(243,242,239,0.95) 0%, transparent 100%)",
              }}
              aria-label="Desplazar a la izquierda"
            >
              <ChevronLeft className="h-7 w-7 text-[#222222]/60" />
            </button>
          )}

          {/* Right arrow */}
          {canScrollRight && (
            <button
              onClick={() => scrollRow("right")}
              className="absolute -right-1 top-0 z-20 hidden h-full w-14 items-center justify-center transition-opacity duration-300 md:flex"
              style={{
                background: "linear-gradient(to left, rgba(243,242,239,0.95) 0%, transparent 100%)",
              }}
              aria-label="Desplazar a la derecha"
            >
              <ChevronRight className="h-7 w-7 text-[#222222]/60" />
            </button>
          )}

          {/* Scrollable row */}
          <div
            ref={rowRef}
            className="no-scrollbar flex gap-5 overflow-x-auto px-6 pb-4 md:gap-6 md:px-12 lg:px-16"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {booksData.map((book, i) => (
              <button
                key={book.id}
                onClick={() => setSelectedBook(selectedBook === i ? null : i)}
                className="group relative flex-shrink-0 cursor-pointer border-0 bg-transparent p-0 text-left outline-none"
                style={{
                  scrollSnapAlign: "start",
                  width: "clamp(180px, 22vw, 260px)",
                  animationName: "bookSlideIn",
                  animationDuration: "0.6s",
                  animationTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                  animationFillMode: "both",
                  animationDelay: `${0.1 + i * 0.08}s`,
                }}
              >
                {/* Cover */}
                <div
                  className="relative overflow-hidden transition-all duration-500 ease-out"
                  style={{
                    aspectRatio: "2/3",
                    borderRadius: "4px",
                    boxShadow: selectedBook === i
                      ? "0 8px 32px rgba(198,168,90,0.2), 0 0 0 2px rgba(198,168,90,0.5)"
                      : "0 4px 16px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Placeholder when no image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#E8E6E1]">
                    <span
                      className="px-4 text-center font-serif text-sm font-light uppercase leading-tight tracking-widest text-[#999999]"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {book.titulo}
                    </span>
                  </div>

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={book.coverImage}
                    alt={`Portada de ${book.titulo}`}
                    className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />

                  {/* Hover overlay with title */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="p-4">
                      <p className="font-sans text-[8px] font-medium uppercase tracking-[0.3em] text-[#C6A85A]">
                        {book.categoria}
                      </p>
                      <h3
                        className="mt-1 font-serif text-sm font-light uppercase tracking-wider text-white"
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                      >
                        {book.titulo}
                      </h3>
                    </div>
                  </div>

                  {/* Selected ring */}
                  {selectedBook === i && (
                    <div
                      className="pointer-events-none absolute inset-0 rounded"
                      style={{ border: "2px solid rgba(198,168,90,0.6)" }}
                    />
                  )}
                </div>

                {/* Title below cover */}
                <p
                  className="mt-3 truncate font-sans text-[10px] uppercase tracking-[0.2em] text-[#666666] transition-colors duration-300 group-hover:text-[#222222]"
                >
                  {book.titulo}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Expanded detail panel - Netflix style */}
        {selected && selectedBook !== null && (
          <div
            className="mx-6 mt-10 overflow-hidden md:mx-12 lg:mx-16"
            style={{
              background: "#ECEAE5",
              border: "1px solid rgba(198,168,90,0.2)",
              borderRadius: "8px",
              animation: "detailExpand 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
            }}
          >
            {/* Close indicator - gold top line */}
            <div className="h-[2px] w-full bg-[#C6A85A]" />

            <div className="flex flex-col gap-8 p-6 md:flex-row md:items-center md:gap-12 md:p-10">
              {/* Cover - small */}
              <div className="mx-auto w-32 flex-shrink-0 md:mx-0 md:w-40">
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: "2/3",
                    borderRadius: "4px",
                    boxShadow: "4px 6px 20px rgba(0,0,0,0.15)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-[#E8E6E1]">
                    <span className="px-3 text-center font-serif text-xs font-light uppercase tracking-wider text-[#999999]">
                      {selected.titulo}
                    </span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selected.coverImage}
                    alt={`Portada de ${selected.titulo}`}
                    className="absolute inset-0 z-10 h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col text-center md:text-left">
                <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-[#C6A85A]">
                  {selected.categoria}
                </span>

                <h3
                  className="mt-3 font-serif text-2xl font-light uppercase tracking-[0.1em] text-[#222222] md:text-3xl"
                  style={{ fontFamily: "var(--font-playfair), var(--font-cormorant), Georgia, serif", lineHeight: 1.2 }}
                >
                  {selected.titulo}
                </h3>

                <p className="mt-4 max-w-lg text-justify font-sans text-sm leading-[1.8] text-[#555555]">
                  {selected.descripcion}
                </p>

                <div className="mx-auto my-5 h-px w-full max-w-xs bg-[#D5D3CE] md:mx-0 md:max-w-sm" />

                <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
                  <a
                    href={selected.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#222222] bg-transparent px-8 py-3 font-sans text-[10px] uppercase tracking-[0.25em] text-[#222222] transition-all duration-500 hover:border-[#C6A85A] hover:bg-[#C6A85A]/8 hover:text-[#C6A85A]"
                  >
                    Adquirir
                    <ExternalLink className="h-3 w-3" />
                  </a>

                  <button
                    onClick={() => setSelectedBook(null)}
                    className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#999999] transition-colors duration-300 hover:text-[#222222]"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
