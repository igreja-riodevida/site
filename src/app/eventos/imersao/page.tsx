import Image from 'next/image'

import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react'

import { Footer } from '@/components/footer'
import { getWhatsAppLink } from '@/lib/get-whatsapp-link'

const WHATSAPP_NUMBER_2 = process.env.WHATSAPP_NUMBER_2 || '5561992868024'

export default function ImersaoPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-blue-950 selection:bg-blue-200 selection:text-[hsl(214,100%,24%)]">
      {/* Header */}
      <header className="flex w-full items-center justify-center border-blue-100 border-b bg-[#00357A] p-4 shadow-sm md:px-12">
        <Image
          height={200}
          width={300}
          src="/images/logo_irv.png"
          alt="logo igreja rio de vida"
        />
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Coluna Esquerda */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text font-kingred text-[min(10vw)] text-transparent leading-none lg:text-[min(5vw)] xl:text-[min(4vw)] 2xl:text-[min(2vw)]">
                IMERSÃO 2026
              </h1>

              <p className="max-w-lg font-medium text-blue-800/80 text-lg leading-relaxed md:text-xl">
                Há encontros que marcam uma fase — e há encontros que
                transformam uma vida. Serão 3 dias de entrega, cura, renovo e um
                encontro real com a presença de Deus.
              </p>

              {/* Datas */}
              <div className="relative overflow-hidden rounded-2xl border-orange-500 border-l-8 bg-[#00357A] p-6 text-white shadow-[#00357A]/20 shadow-lg">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
                <h3 className="mb-3 flex items-center justify-center gap-2 font-bold text-orange-400 text-sm uppercase tracking-wider">
                  <Calendar size={16} /> Reserve a Data
                </h3>
                <div className="flex justify-center gap-6">
                  <div className="text-center">
                    <span className="block font-bold text-3xl">15 a 17</span>
                    <span className="text-blue-200 text-sm">de Maio</span>
                  </div>
                  <div className="hidden h-12 w-px bg-blue-700 sm:block" />
                  <div className="text-center">
                    <span className="block font-bold text-3xl">3 dias</span>
                    <span className="text-blue-200 text-sm">de imersão</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefícios */}
            <ul className="space-y-4 pt-2">
              {[
                'Palavra, adoração e restauração.',
                'Cura e renovo espiritual.',
                'Direção para um novo tempo.',
                'Encontro real com a presença de Deus.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-orange-100 p-1">
                    <Sparkles className="h-4 w-4 shrink-0 text-orange-600" />
                  </div>
                  <span className="font-medium text-[#00357A] text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna Direita: Card de Inscrição */}
          <div className="relative">
            <div className="absolute -inset-4 hidden rotate-2 rounded-[2.5rem] bg-linear-to-bl from-blue-600 to-[#00357A] opacity-10 lg:block" />

            <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-2xl">
              {/* Imagem */}
              <div className="group relative h-48 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-[#00357A]/30 transition-colors group-hover:bg-[#00357A]/20" />
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
                  alt="Pessoas em adoração"
                  className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute right-0 bottom-0 left-0 z-20 h-16 bg-linear-to-t from-white to-transparent" />
              </div>

              {/* Conteúdo do Card */}
              <div className="px-8 pt-4 pb-8 text-center">
                <h3 className="font-bold text-2xl text-blue-950">
                  Garanta sua vaga
                </h3>
                <p className="mt-2 mb-6 text-blue-600/70 text-sm leading-relaxed">
                  Se você sente que precisa de um recomeço, de respostas ou
                  simplesmente quer se aproximar mais do Senhor — esse tempo é
                  para você.
                </p>

                <a
                  href={getWhatsAppLink(
                    'Olá! Quero participar do Imersão Rio de Vida 2026',
                    WHATSAPP_NUMBER_2,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full transform items-center justify-center gap-2 rounded-lg bg-linear-to-r from-orange-500 to-orange-600 px-6 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:from-orange-600 hover:to-orange-700 hover:shadow-orange-500/30"
                >
                  Fazer Inscrição pelo WhatsApp
                  <ArrowRight size={20} />
                </a>

                <p className="mt-4 font-semibold text-orange-600 text-sm">
                  ⚠️ Vagas limitadas. Não deixe para depois.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 font-medium text-blue-800/60 text-sm">
              <MapPin size={16} />
              <span>Igreja Rio de Vida — 15 a 17 de Maio</span>
            </div>
          </div>
        </div>
      </main>

      {/* Seção de Chamada Final */}
      <section className="border-blue-100 border-t bg-[#00357A] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-extrabold text-3xl md:text-4xl">
            Venha viver dias que podem mudar a sua história.
          </h2>
          <p className="mb-8 text-blue-200 text-lg leading-relaxed">
            Permita que Deus faça algo novo em você. As vagas são limitadas —
            não deixe para depois aquilo que Ele já preparou para agora.
          </p>
          <a
            href={getWhatsAppLink(
              'Olá! Quero participar do Imersão Rio de Vida 2026',
              WHATSAPP_NUMBER_2,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transform items-center justify-center gap-3 rounded-full bg-linear-to-r from-orange-500 to-orange-600 px-10 py-4 font-bold text-lg text-white shadow-xl transition-all hover:-translate-y-1 hover:from-orange-600 hover:to-orange-700 hover:shadow-orange-500/40"
          >
            Quero me Inscrever
            <ArrowRight size={22} />
          </a>
        </div>
      </section>

      <Footer className="border-blue-100 border-t bg-blue-50/50 py-8 text-center text-[#00357A]/40" />
    </div>
  )
}
