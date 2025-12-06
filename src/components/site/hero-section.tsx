import { ChurchButton } from '@/components/ui/church-button'

import { ContentContainer } from '../ui/content-container'

export function HeroSection() {
  return (
    <section className="relative flex h-[400px] items-center justify-center md:h-[500px]">
      <div
        className="absolute inset-0 bg-center bg-cover grayscale"
        style={{
          backgroundImage: `url('/worship-service-crowd-with-raised-hands-silhouette.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <ContentContainer>
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-6 text-balance font-bold text-3xl tracking-wide md:mb-8 md:text-5xl">
            LUGAR DE
            <br />
            NOVOS COMEÇOS.
          </h1>
          <div className="flex flex-col justify-center gap-3 sm:flex-row md:gap-4">
            <ChurchButton href="/igreja-online" variant="primary">
              Igreja Online
            </ChurchButton>
            <ChurchButton href="/ultima-mensagem" variant="primary">
              Última Mensagem
            </ChurchButton>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
