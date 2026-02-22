import { mediaData } from "@/lib/site-config"
import { Play, Headphones, FileText, ExternalLink } from "lucide-react"

function MediaColumn({
  title,
  icon,
  items,
}: {
  title: string
  icon: React.ReactNode
  items: { title: string; link: string; platform: string }[]
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        {icon}
        <h3 className="font-serif text-lg text-foreground">{title}</h3>
      </div>
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li key={item.title}>
            <a
              href={item.link}
              className="group flex items-start justify-between gap-3 border-b border-border pb-4 transition-colors duration-300 hover:border-[#C6A85A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div>
                <p className="font-sans text-sm text-foreground transition-colors duration-300 group-hover:text-[#C6A85A]">
                  {item.title}
                </p>
                <p className="mt-1 font-sans text-xs text-muted-foreground">
                  {item.platform}
                </p>
              </div>
              <ExternalLink className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-[#C6A85A]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Media() {
  return (
    <section id="medios" className="lg:pl-16">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            Medios
          </h2>
          <div className="mt-6 h-px w-16 bg-border" />
        </div>

        {/* Three column grid */}
        <div className="grid gap-12 md:grid-cols-3">
          <MediaColumn
            title="Entrevistas"
            icon={<Play className="h-4 w-4 text-[#C6A85A]" />}
            items={mediaData.interviews}
          />
          <MediaColumn
            title="Podcast"
            icon={<Headphones className="h-4 w-4 text-[#C6A85A]" />}
            items={mediaData.podcasts}
          />
          <MediaColumn
            title="Art\u00edculos"
            icon={<FileText className="h-4 w-4 text-[#C6A85A]" />}
            items={mediaData.articles}
          />
        </div>

        {/* Media logos placeholder */}
        {mediaData.logos.length > 0 && (
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            {mediaData.logos.map((logo) => (
              <div key={logo} className="h-8 w-24 bg-secondary" />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
