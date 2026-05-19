import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

import type { Metadata } from 'next'

import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

const kingredSerif = localFont({
  variable: '--font-kingred-serif',
  src: '../../public/fonts/kingred_serif.woff2',
})

export const viewport = {
  themeColor: '#01357a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Igreja Rio de Vida | Lugar de Novos Começos',
  description:
    'Somos uma igreja que expressa o amor de Deus pelas pessoas, cada membro é um ministro para servir no Reino com seus dons e talentos. Aqui é um lugar para descobrir e viver seu propósito de vida.',
  manifest: '/site.webmanifest',
  keywords: [
    'Igreja',
    'Rio de Vida',
    'Brasília',
    'Distrito Federal',
    'Evangélica',
    'Cristã',
    'Religião',
    'Comunidade',
    'Cultos',
    'Palavra de Deus',
  ],
  authors: [{ name: 'Igreja Rio de Vida' }],
  creator: 'Igreja Rio de Vida',
  publisher: 'Igreja Rio de Vida',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Base de metadados assumindo o domínio 'igrejariodevida.ac'
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 'https://igrejariodevida.com.br',
  ),
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    title: 'Igreja Rio de Vida',
    description: 'Lugar de Novos Começos',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/images/logo_irv_nova.svg',
        width: 990,
        height: 360,
        alt: 'Igreja Rio de Vida | Lugar de Novos Começos',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${kingredSerif.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {/* header */}
        <main>{children}</main>
        {/* footer */}
      </body>
    </html>
  )
}
