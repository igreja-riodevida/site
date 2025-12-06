'use client'

import Link from 'next/link'

import { ChevronDown } from 'lucide-react'

interface ItemBase {
  label: string
}

export interface NavItemProps extends ItemBase {
  label: string
  url: string
  subitems?: NavItemProps[]
}

export function NavItem({ label, subitems }: NavItemProps) {
  return (
    <button
      type="button"
      className="flex cursor-pointer items-center gap-1 text-gray-700 text-xs tracking-wider transition-colors hover:text-[#0D47A1]"
    >
      {label}
      {subitems?.length && <ChevronDown className="h-3 w-3" />}
    </button>
  )
}

export function MobileNavItem({ label }: ItemBase) {
  return (
    <Link
      href={`/${label.toLowerCase().replace(/\s+/g, '-')}`}
      className="text-gray-700 text-sm transition-colors hover:text-[#0D47A1]"
    >
      {label}
    </Link>
  )
}
