'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Menu, X } from 'lucide-react'

import { cn } from '@/lib/utils'

import { MobileNavItem, NavItem } from '../nav-item'
import { ContentContainer } from '../ui/content-container'

interface MenuItem {
  label: string
  url: string
  subitems?: MenuItem[]
}

const MENU_ITEMS: MenuItem[] = [
  { url: '/', label: 'SOBRE' },
  { url: '/', label: 'MINISTÉRIOS' },
  { url: '/', label: 'EVENTOS' },
  { url: '/', label: 'OFERTAR' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-gray-100 border-b bg-white">
      <ContentContainer>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="space-x-0.5 text-lg tracking-wider md:text-xl">
              <span className="font-light">IGREJA</span>
              <span className="font-bold text-[#0D47A1]">RIO DE VIDA</span>
            </span>
          </Link>
          <button
            type="button"
            className="p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {MENU_ITEMS.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                subitems={item.subitems}
                url={item.url}
              />
            ))}
          </nav>
        </div>
        <nav
          className={cn(
            'overflow-hidden transition-all duration-300 md:hidden',
            mobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0',
          )}
        >
          <div className="flex flex-col gap-4 border-gray-100 border-t pt-4">
            {MENU_ITEMS.map((item) => (
              <MobileNavItem key={item.label} label={item.label} />
            ))}
          </div>
        </nav>
      </ContentContainer>
    </header>
  )
}
