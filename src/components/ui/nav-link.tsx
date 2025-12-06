import Link from 'next/link'
import type React from 'react'

import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'footer' | 'footer-heading'
}

export function NavLink({
  href,
  children,
  className,
  variant = 'default',
}: NavLinkProps) {
  const variants = {
    default: 'text-sm text-[#90CAF9] hover:text-white transition-colors',
    footer: 'text-sm text-[#90CAF9] hover:text-white transition-colors',
    'footer-heading': 'text-sm font-bold text-gray-400',
  }

  return (
    <Link href={href} className={cn(variants[variant], className)}>
      {children}
    </Link>
  )
}
