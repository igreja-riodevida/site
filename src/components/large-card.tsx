import { cn } from '@/lib/utils'

type LargeCardPropsBase = React.ComponentProps<'div'>

function LargeCard({ className, ...props }: LargeCardPropsBase) {
  return (
    <div
      className={cn(
        'mx-auto flex flex-col items-center gap-2 lg:flex-row lg:gap-8',
        className,
      )}
      {...props}
    />
  )
}

interface LargeCardImageProps extends Omit<LargeCardPropsBase, 'children'> {
  children: React.ReactElement
}

function LargeCardImage({ className, ...props }: LargeCardImageProps) {
  return (
    <div
      className={cn(
        'relative h-[350] w-full overflow-hidden rounded-2xl md:h-[500] lg:h-[400]',
        className,
      )}
      {...props}
    />
  )
}

function LargeCardContent({ className, ...props }: LargeCardPropsBase) {
  return <div className={cn('w-full', className)} {...props} />
}

function LargeCardTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'mb-4 font-bold text-2xl text-gray-900 md:text-3xl',
        className,
      )}
      {...props}
    />
  )
}

function LargeCardParagraph({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn('mb-4 text-gray-600 text-sm leading-relaxed', className)}
      {...props}
    />
  )
}
function LargeCardFootNote({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn('font-medium text-primary text-sm', className)}
      {...props}
    />
  )
}

export {
  LargeCard,
  LargeCardImage,
  LargeCardContent,
  LargeCardTitle,
  LargeCardParagraph,
  LargeCardFootNote,
}
