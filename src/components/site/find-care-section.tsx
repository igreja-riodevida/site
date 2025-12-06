import { ChurchButton } from '@/components/ui/church-button'

import { ContentContainer } from '../ui/content-container'

export function FindCareSection() {
  return (
    <section className="relative flex items-center justify-center py-20 md:py-32">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url('/people-walking-together-outdoor-blurred-background.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <ContentContainer>
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center text-white">
          <h2 className="mb-4 font-bold text-2xl md:text-4xl">
            Encontre Apoio
          </h2>
          <p className="mb-6 text-sm text-white/90 leading-relaxed">
            A igreja local existe para atender às necessidades físicas,
            emocionais e espirituais da sua comunidade. Sabemos que a vida
            acontece todos os dias da semana e queremos ser um recurso para
            você.
          </p>
          <ChurchButton href="/apoio" variant="secondary">
            SAIBA MAIS
          </ChurchButton>
        </div>
      </ContentContainer>
    </section>
  )
}
