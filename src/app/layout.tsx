import type { Metadata } from 'next'
import { Geist, Geist_Mono, Gotu } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const gotu = Gotu({
	variable: '--font-gotu',
	weight: '400',
	subsets: ['latin'],
})

const binggoWood = localFont({
	variable: '--font-binggo-wood',
	src: '../../public/fonts/binggo-wood.woff2',
	display: 'swap',
})

const sirenikRegular = localFont({
	variable: '--font-sirenik-regular',
	src: '../../public/fonts/sirenik-regular.woff2',
	display: 'swap',
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
	openGraph: {
		title: 'Igreja Rio de Vida',
		description: 'Lugar de Novos Começos',
		type: 'website',
		locale: 'pt_BR',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</head>
			<body
				className={`${binggoWood.variable} ${gotu.variable} ${geistMono.variable} ${geistSans.variable} ${sirenikRegular.variable} font-sans antialiased`}
			>
				{/* header */}
				<main>{children}</main>
				{/* footer */}
			</body>
		</html>
	)
}
