export function Footer() {
  return (
    <footer className="lg:pl-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px w-full bg-border" />
        <div className="flex flex-col items-center gap-4 py-8 text-center md:flex-row md:justify-between md:text-left">
          <p className="font-sans text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} Max Hebeling. Todos los derechos reservados.`}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-sans text-xs text-muted-foreground transition-colors duration-300 hover:text-[#C6A85A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Pol\u00edtica de Privacidad
            </a>
            <a
              href="#"
              className="font-sans text-xs text-muted-foreground transition-colors duration-300 hover:text-[#C6A85A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              T\u00e9rminos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
