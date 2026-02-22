"use client"

import { useState } from "react"
import { contactSubjects, socialLinks } from "@/lib/site-config"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

type FormState = "idle" | "success" | "error"

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(form: FormData): Record<string, string> {
    const e: Record<string, string> = {}
    const name = form.get("name") as string
    const email = form.get("email") as string
    const subject = form.get("subject") as string
    const message = form.get("message") as string

    if (!name || name.trim().length < 2) e.name = "Por favor ingresa tu nombre."
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Ingresa un email v\u00e1lido."
    if (!subject) e.subject = "Selecciona un asunto."
    if (!message || message.trim().length < 10) e.message = "El mensaje debe tener al menos 10 car\u00e1cteres."
    return e
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const validationErrors = validate(data)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setFormState("error")
      return
    }

    setErrors({})
    setFormState("success")
  }

  const inputClasses =
    "w-full border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors duration-300 focus:border-[#C6A85A] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"

  return (
    <section id="contacto" className="lg:pl-16">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        {/* Section title */}
        <div className="mb-16">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.4em] text-[#C6A85A]">
            05
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            Contacto
          </h2>
          <div className="mt-6 h-px w-16 bg-border" />
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Form */}
          <div>
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center border border-[#C6A85A]/30 bg-secondary/30 p-12 text-center">
                <CheckCircle className="mb-4 h-10 w-10 text-[#C6A85A]" />
                <h3 className="font-serif text-xl text-foreground">
                  Mensaje enviado
                </h3>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  Gracias por escribir. Te responder\u00e9mos a la brevedad.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-6 font-sans text-xs uppercase tracking-[0.2em] text-[#C6A85A] transition-colors duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre completo"
                    className={inputClasses}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1 font-sans text-xs text-destructive">
                      <AlertCircle className="h-3 w-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    className={inputClasses}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1 flex items-center gap-1 font-sans text-xs text-destructive">
                      <AlertCircle className="h-3 w-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className={`${inputClasses} appearance-none`}
                    defaultValue=""
                    aria-invalid={!!errors.subject}
                  >
                    <option value="" disabled>
                      Selecciona un asunto
                    </option>
                    {contactSubjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="mt-1 flex items-center gap-1 font-sans text-xs text-destructive">
                      <AlertCircle className="h-3 w-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Escribe tu mensaje aqu\u00ed..."
                    className={`${inputClasses} resize-none`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 font-sans text-xs text-destructive">
                      <AlertCircle className="h-3 w-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-2 border border-[#C6A85A] bg-transparent px-8 py-3 font-sans text-xs uppercase tracking-[0.3em] text-foreground transition-all duration-500 hover:bg-[#C6A85A]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Send className="h-3.5 w-3.5" />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center">
            <p className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
              {"Si deseas invitar a Max a una conferencia, evento, entrevista o colaboraci\u00f3n editorial, no dudes en escribir."}
            </p>

            <div className="my-8 h-px w-12 bg-border" />

            <div className="flex flex-col gap-4 font-sans text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Email: </span>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="transition-colors duration-300 hover:text-[#C6A85A]"
                >
                  {socialLinks.email}
                </a>
              </p>
              <div className="flex gap-6">
                <a
                  href={socialLinks.instagram}
                  className="text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#C6A85A]"
                >
                  Instagram
                </a>
                <a
                  href={socialLinks.facebook}
                  className="text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#C6A85A]"
                >
                  Facebook
                </a>
                <a
                  href={socialLinks.youtube}
                  className="text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#C6A85A]"
                >
                  YouTube
                </a>
              </div>
            </div>

            <p className="mt-8 font-sans text-xs italic text-muted-foreground">
              Tiempo estimado de respuesta: 2-3 d\u00edas h\u00e1biles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
