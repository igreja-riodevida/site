import { ChurchButton } from '@/components/ui/church-button'

import { ContentContainer } from '../ui/content-container'

export function PrayerSection() {
  return (
    <section className="bg-[#0D47A1] py-12 md:py-16">
      <ContentContainer>
        <div className="mx-auto flex flex-col items-center gap-6 text-center md:flex-row md:gap-8 md:text-left">
          <div className="w-full md:w-1/3">
            <h2 className="font-bold text-white text-xl leading-tight md:text-2xl">
              Precisa de Oração? Não importa o que você esteja enfrentando,
              gostaríamos de orar com você!
            </h2>
          </div>

          <div className="w-full md:w-2/3">
            <p className="mb-6 text-sm text-white/90 leading-relaxed">
              Há momentos em que a vida é avassaladora, quando tudo o que temos
              são perguntas. Nesses momentos, a esperança pode parecer distante.
              O maravilhoso sobre a oração é que ela muda nossa perspectiva para
              Aquele que está pronto para ouvir.
            </p>

            <ChurchButton href="/oracao" variant="white">
              PEÇA ORAÇÃO
            </ChurchButton>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
