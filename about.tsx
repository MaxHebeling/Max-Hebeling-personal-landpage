"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = section.querySelectorAll<HTMLElement>(".bio-reveal")
            els.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1"
                el.style.transform = "translateY(0)"
              }, i * 120)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="biografia" className="lg:pl-16">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        {/* Two column layout: 60% text / 40% image */}
        <div className="grid items-start gap-12 md:grid-cols-[1fr_0.7fr] md:gap-20">
          {/* LEFT COLUMN - Text */}
          <div className="order-2 md:order-1">
            {/* Title */}
            <h2
              className="bio-reveal font-serif text-4xl uppercase tracking-[0.25em] text-[#222222] md:text-5xl"
              style={{
                opacity: 0,
                transform: "translateY(16px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              Biografia
            </h2>

            {/* Impact phrase */}
            <p
              className="bio-reveal mt-8 text-justify font-serif text-base leading-relaxed text-[#222222] md:text-lg"
              style={{
                opacity: 0,
                transform: "translateY(16px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
                maxWidth: "650px",
              }}
            >
              <em>{"P\u00eddeme, y te dar\u00e9 por herencia las naciones, Y como posesi\u00f3n tuya los confines de la tierra."}</em>{" "}
              <span className="font-sans text-sm font-normal not-italic text-[#999999]">{"(Salmos 2:8 RV1960)"}</span>
            </p>

            <div
              className="bio-reveal my-10 h-px w-16 bg-[#C6A85A]"
              style={{
                opacity: 0,
                transform: "translateY(16px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            />

            {/* Bio text - 3 paragraphs */}
            <div className="flex flex-col gap-6" style={{ maxWidth: "650px" }}>
              <p
                className="bio-reveal text-justify font-sans text-sm leading-[1.85] text-[#555555]"
                style={{
                  opacity: 0,
                  transform: "translateY(16px)",
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                }}
              >
                {"El Lic. Max Hebeling es ap\u00f3stol, autor y conferencista internacional enfocado en la formaci\u00f3n de l\u00edderes con una visi\u00f3n estrat\u00e9gica del Reino de Dios. Su pensamiento integra estructura, profundidad espiritual y proyecci\u00f3n global."}
              </p>
              <p
                className="bio-reveal text-justify font-sans text-sm leading-[1.85] text-[#555555]"
                style={{
                  opacity: 0,
                  transform: "translateY(16px)",
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                }}
              >
                {"A trav\u00e9s de sus libros y conferencias, ha desarrollado un enfoque que conecta revelaci\u00f3n con liderazgo pr\u00e1ctico, formando generaciones con claridad, gobierno y prop\u00f3sito."}
              </p>
              <p
                className="bio-reveal text-justify font-sans text-sm leading-[1.85] text-[#555555]"
                style={{
                  opacity: 0,
                  transform: "translateY(16px)",
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                }}
              >
                {"Su trabajo se centra en manifestar principios de Reino en contextos contempor\u00e1neos, combinando la Palabra, impartici\u00f3n, profesi\u00f3n y visi\u00f3n estrat\u00e9gica."}
              </p>
            </div>

            {/* Badge editorial block */}
            <div
              className="bio-reveal mt-12 border-l-2 border-[#C6A85A] pl-6"
              style={{
                opacity: 0,
                transform: "translateY(16px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              <div className="flex flex-col gap-2">
                {["AP\u00d3STOL", "AUTOR", "CONFERENCISTA", "FORMADOR DE L\u00cdDERES"].map((role) => (
                  <p
                    key={role}
                    className="font-sans text-xs uppercase tracking-[0.3em] text-[#222222]"
                  >
                    {role}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Image */}
          <div className="order-1 md:order-2">
            <div
              className="bio-reveal relative aspect-[3/4] w-full overflow-hidden border-2 border-transparent bg-[#E8E6E1] transition-[border-color] duration-500 ease-in-out hover:border-[#C6A85A]"
              style={{
                opacity: 0,
                transform: "translateY(16px)",
                transition: "opacity 0.8s ease, transform 0.8s ease, border-color 0.5s ease-in-out",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/max-hebeling-portrait.png"
                alt="Max Hebeling - Autor y conferencista internacional"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Subtle line + legend below photo */}
            <div
              className="bio-reveal mt-4"
              style={{
                opacity: 0,
                transform: "translateY(16px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              <div className="h-px w-full bg-[#E0DDD8]" />
              <p className="mt-3 text-center font-sans text-[10px] uppercase tracking-[0.3em] text-[#999999]">
                {"ARGENTINO \u00b7 CONFERENCISTA INTERNACIONAL"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
