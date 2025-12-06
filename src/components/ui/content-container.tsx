import { cn } from '@/lib/utils'

function ContentContainer({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('container mx-auto w-full max-w-[1200] px-4', className)}
      {...props}
    />
  )
}

export { ContentContainer }
