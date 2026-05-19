import { cn } from '@/lib/utils'

export function Footer({
  children,
  className,
}: React.ComponentProps<'footer'>) {
  return (
    <footer className={cn('mt-auto py-8 text-center text-sm', className)}>
      {children}
      <p>
        &copy;{' '}
        {`${new Date().getFullYear()} Igreja Rio de Vida - Todos os direitos reservados.`}
        <br />
        <span className="text-xs">
          Desenvolvido pelo Ministério de Comunicação Rio de Vida.
        </span>
      </p>
    </footer>
  )
}
