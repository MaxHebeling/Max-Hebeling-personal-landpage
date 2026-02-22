"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { menuItems } from "@/lib/site-config"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop: Vertical editorial sidebar nav */}
      <nav
        className={`fixed left-0 top-0 z-50 hidden h-screen w-16 flex-col items-center justify-between border-r py-8 transition-colors duration-500 lg:flex ${
          scrolled
            ? "border-border bg-background/95 backdrop-blur-sm"
            : "border-transparent bg-transparent"
        }`}
        aria-label="Navegaci\u00f3n principal"
      >
        <span
          className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-foreground"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          MH
        </span>

        <ul className="flex flex-col items-center gap-0">
          {menuItems.map((item, i) => (
            <li key={item.label} className="relative">
              {i > 0 && (
                <div className="mx-auto h-px w-4 bg-border" />
              )}
              <a
                href={item.href}
                className="nav-brush-vertical block px-2 py-3 text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-[#C6A85A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="h-8 w-px bg-border" />
      </nav>

      {/* Mobile: Hamburger top bar */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-500 lg:hidden ${
          scrolled
            ? "border-b border-border bg-background/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <span className="text-sm font-sans font-medium uppercase tracking-[0.3em] text-foreground">
          Max Hebeling
        </span>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center text-foreground transition-colors hover:text-[#C6A85A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={open ? "Cerrar men\u00fa" : "Abrir men\u00fa"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <span className="text-sm font-sans font-medium uppercase tracking-[0.3em] text-foreground">
              Max Hebeling
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-foreground transition-colors hover:text-[#C6A85A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Cerrar men\u00fa"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-1" aria-label="Navegaci\u00f3n m\u00f3vil">
            {menuItems.map((item, i) => (
              <div key={item.label} className="flex flex-col items-center">
                {i > 0 && <div className="h-px w-12 bg-border my-2" />}
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="nav-brush block px-4 py-3 font-serif text-2xl text-foreground transition-colors duration-300 hover:text-[#C6A85A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
