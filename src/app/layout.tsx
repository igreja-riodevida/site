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

export const metadata: Metadata = {
	title: 'Igreja Rio de Vida',
	description: 'Lugar de Novos Começos',
	manifest: '/site.webmanifest',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body
				className={`${binggoWood.variable} ${gotu.variable} ${geistMono.variable} ${geistSans.variable} ${sirenikRegular.variable} antialiased`}
			>
				{/* header */}
				<main>{children}</main>
				{/* footer */}
			</body>
		</html>
	)
}
