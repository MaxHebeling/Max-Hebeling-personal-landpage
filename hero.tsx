"use client"

import { SplitDepthHeadline } from "./split-depth-headline"

function generateWavePath(
  yOffset: number,
  amplitude: number,
  phase: number
): string {
  const points: string[] = ["M0,100"]
  for (let x = 0; x <= 1200; x += 10) {
    const norm = x / 1200
    const envelope =
      Math.pow(Math.sin(norm * Math.PI), 2.5) * amplitude
    const y =
      100 +
      yOffset +
      Math.sin((x / 60) * Math.PI + phase) * envelope
    points.push(`L${x},${y.toFixed(1)}`)
  }
  return points.join(" ")
}

export function Hero() {

  // Generate layered wave paths
  const layerCount = 18
  const layers = Array.from({ length: layerCount }, (_, i) => {
    const t = i / (layerCount - 1)
    const yOffset = (t - 0.5) * 50
    const amplitude = 55 - Math.abs(t - 0.5) * 40
    const phase = t * 1.2
    const opacity = 0.08 + (1 - Math.abs(t - 0.5) * 2) * 0.25
    return { path: generateWavePath(yOffset, amplitude, phase), opacity }
  })

  const envelopeTop = generateWavePath(-30, 70, 0.3)
  const envelopeBottom = generateWavePath(30, 70, 0.3)
  const goldPath = generateWavePath(0, 58, 0.6)

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F3F2EF 0%, #ECECEC 100%)",
      }}
    >
      <div className="relative flex w-full flex-col items-center justify-center gap-8 px-6 md:px-12">
        <div className="relative w-[75%] max-w-5xl">
          <svg
            viewBox="0 0 1200 200"
            className="w-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Horizontal baseline */}
            <line
              x1="0" y1="100" x2="1200" y2="100"
              stroke="#BFBDB8"
              strokeWidth="0.5"
            />

            {/* Dotted envelope curves */}
            <path
              d={envelopeTop}
              stroke="#BFBDB8"
              strokeWidth="0.7"
              strokeDasharray="3 5"
              opacity="0.4"
            />
            <path
              d={envelopeBottom}
              stroke="#BFBDB8"
              strokeWidth="0.7"
              strokeDasharray="3 5"
              opacity="0.4"
            />

            {/* Wave layers with shadows */}
            {layers.map((layer, i) => (
              <g key={`layer-${i}`}>
                <path
                  d={layer.path}
                  stroke="#5B0F1C"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                  opacity={layer.opacity * 0.3}
                  style={{ transform: "translateY(2px)" }}
                />
                <path
                  className="wave-line"
                  d={layer.path}
                  stroke="#222222"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                  opacity={layer.opacity}
                />
              </g>
            ))}

            {/* Gold accent */}
            <path
              className="wave-line"
              d={goldPath}
              stroke="#C6A85A"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Text with Split Depth Animation */}
        <div>
          <SplitDepthHeadline
            text="Manifestando Reino · Escribiendo Revelación"
            className="text-center uppercase"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(0.55rem, 1.6vw, 1.6rem)",
              letterSpacing: "0.28em",
              lineHeight: 1.4,
            }}
          />
        </div>
      </div>
    </section>
  )
}
