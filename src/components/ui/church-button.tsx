import Link from 'next/link'
import type React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const churchButtonVariants = cva(
  'inline-flex items-center justify-center font-medium tracking-wider transition-colors text-sm',
  {
    variants: {
      variant: {
        primary: 'bg-[#0D47A1] hover:bg-[#0a3d8a] text-white',
        secondary: 'bg-[#333333] hover:bg-[#444444] text-white',
        outline:
          'border-2 border-[#0D47A1] text-[#0D47A1] hover:bg-[#0D47A1] hover:text-white',
        white: 'bg-white hover:bg-gray-100 text-gray-900',
      },
      size: {
        default: 'px-8 py-3',
        sm: 'px-6 py-2',
        lg: 'px-10 py-4',
      },
      rounded: {
        none: '',
        default: 'rounded',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      rounded: 'none',
    },
  },
)

export interface ChurchButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof churchButtonVariants> {
  href: string
}

export function ChurchButton({
  className,
  variant,
  size,
  rounded,
  href,
  children,
  ...props
}: ChurchButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        churchButtonVariants({ variant, size, rounded, className }),
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
