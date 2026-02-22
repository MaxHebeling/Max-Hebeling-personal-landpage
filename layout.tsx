import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Max Hebeling | Autor, Conferencista, Formador de L\u00edderes',
  description: 'Max Hebeling - Autor, conferencista internacional y formador de l\u00edderes. Formando l\u00edderes. Edificando legado.',
}

export const viewport: Viewport = {
  themeColor: '#F3F2EF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cormorant.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
