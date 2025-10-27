'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
	{ href: '/blog', label: 'Blog' },
]

export function SiteHeader() {
	const pathName = usePathname()

	return (
		<header className="flex items-center justify-between px-4 py-2">
			<h1 className="font-bold text-xl ">Logo</h1>
			<nav>
				<ul className="flex gap-4">
					{links.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className={cn(
									'transition-colors hover:text-primary',
									pathName === link.href && 'text-primary underline',
								)}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
