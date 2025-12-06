import { ChurchButton } from '@/components/ui/church-button'

import { ContentContainer } from '../ui/content-container'

export function JoinUsSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <ContentContainer>
        <div className="mx-auto flex items-center gap-6 max-lg:flex-col md:gap-8">
          <div className="w-full text-center md:w-1/2">
            <h2 className="mb-4 font-bold text-2xl text-gray-900 md:text-3xl">
              Venha nos visitar neste fim de semana!
            </h2>

            <p className="mb-6 text-gray-600 text-sm leading-relaxed">
              A Igreja Rio de Vida é uma igreja tem um espaço físico - ficamos
              na EPTG - e uma comunidade online que alcança o mundo todo. Seja
              você alguém explorando a fé pela primeira vez ou buscando um lugar
              para chamar de lar, adoraríamos recebê-lo em nossa família.
              Junte-se a nós neste domingo—presencialmente ou online!
            </p>

            <div className="flex items-center gap-3 max-md:flex-col">
              <ChurchButton
                href="/locais"
                variant="outline"
                size="sm"
                rounded="full"
              >
                Locais e Horários
              </ChurchButton>
              <ChurchButton
                href="/online"
                variant="outline"
                size="sm"
                rounded="full"
              >
                Participe Online
              </ChurchButton>
            </div>
          </div>

          <div className="order-first w-full max-lg:order-first md:w-1/2">
            <img
              src="/church-worship-service-congregation-with-raised-ha.jpg"
              alt="Congregação da igreja"
              className="h-auto w-full rounded-sm"
            />
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
