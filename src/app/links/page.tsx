'use client'

import Image from 'next/image'
import { useState } from 'react'

import {
  ArrowLeft,
  Calendar,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from 'lucide-react'

import { Footer } from '@/components/footer'

// get from .env
const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5561999171211'

export default function LinksPage() {
  const [currentView, setCurrentView] = useState<
    'home' | 'programacao' | 'gcs' | 'pastores'
  >('home')

  // Função auxiliar para gerar links do WhatsApp
  const getWhatsappLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  // --- COMPONENTES DE VISTA ---
  const renderHome = () => (
    <div className="fade-in slide-in-from-bottom-4 mx-auto w-full max-w-md animate-in space-y-4 duration-500">
      <button
        type="button"
        onClick={() => setCurrentView('programacao')}
        className="group flex w-full transform cursor-pointer items-center justify-between rounded-xl border border-white/20 bg-white/90 p-4 font-semibold text-blue-950 shadow-lg backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            <Calendar size={20} />
          </div>
          <span>Programação da Igreja</span>
        </div>
      </button>

      <button
        type="button"
        onClick={() => setCurrentView('gcs')}
        className="group flex w-full transform cursor-pointer items-center justify-between rounded-xl border border-white/20 bg-white/90 p-4 font-semibold text-blue-950 shadow-lg backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            <Users size={20} />
          </div>
          <span>GCs (Grupos de Crescimento)</span>
        </div>
      </button>

      <button
        type="button"
        onClick={() => setCurrentView('pastores')}
        className="group flex w-full transform cursor-pointer items-center justify-between rounded-xl border border-white/20 bg-white/90 p-4 font-semibold text-blue-950 shadow-lg backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            <MessageCircle size={20} />
          </div>
          <span>Falar com pastor</span>
        </div>
      </button>

      {/* Botão de Pedir Oração com destaque (Laranja da Logo) */}
      <a
        href={getWhatsappLink('Olá! Quero fazer um pedido de oração.')}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex w-full transform items-center justify-center gap-2 rounded-xl border border-orange-400/50 bg-linear-to-r from-orange-500 to-orange-600 p-4 font-bold text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all hover:scale-[1.02] hover:from-orange-600 hover:to-orange-700"
      >
        <Heart size={20} className="animate-pulse" />
        <span>Pedir Oração</span>
      </a>
    </div>
  )

  const renderProgramacao = () => (
    <div className="fade-in slide-in-from-right-8 mx-auto w-full max-w-md animate-in space-y-6 duration-300">
      <div className="mb-8 text-center">
        <h2 className="mb-2 font-kingred text-2xl text-white">
          Programação da Igreja
        </h2>
        <p className="text-blue-100 text-sm">
          Fique por dentro da nossa programação
        </p>
      </div>

      <div className="space-y-3">
        {[
          { nome: 'Culto da Família', desc: 'Domingo às 18:30' },
          { nome: 'Quinta Profética', desc: 'Quinta-feira às 20:00' },
          {
            nome: 'Vigílias',
            desc: 'Última sexta-feira do mês a partir das 20:30',
          },
          { nome: 'Culto com Café', desc: 'Primeiro domingo de cada mês' },
        ].map((item, i) => (
          <a
            key={`${i}-${item.nome}`}
            href={getWhatsappLink(
              `Olá! Gostaria de mais informações sobre: ${item.nome}`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md transition-all hover:bg-white/20"
          >
            <div className="mt-1 rounded-lg bg-blue-500/30 p-2 transition-colors group-hover:bg-blue-500/50">
              <Clock size={18} className="text-blue-200" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{item.nome}</h3>
              <p className="text-blue-100/80 text-sm">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )

  const renderGCs = () => (
    <div className="fade-in slide-in-from-right-8 mx-auto w-full max-w-md animate-in space-y-6 duration-300">
      <div className="mb-8 text-center">
        <h2 className="mb-2 font-kingred text-2xl text-white">Nossos GCs</h2>
        <p className="text-blue-100 text-sm">
          Escolha aqui o Grupo de Crescimento mais próximo de você
        </p>
      </div>

      <div className="space-y-3">
        {[
          {
            nome: 'Vicente Pires - Sede da Igreja',
            desc: 'quarta-feira às 20:00',
          },
          { nome: 'Vicente Pires - Rua 8', desc: 'quarta-feira às 20:00' },
          {
            nome: 'Vicente Pires - Colônia Agrícola Samambaia',
            desc: 'quarta-feira às 20:00',
          },
          { nome: 'Águas Claras', desc: 'quarta-feira às 20:00' },
        ].map((item, i) => (
          <a
            key={`${i}-${item.nome}`}
            href={getWhatsappLink(
              `Olá! Gostaria de mais informações sobre o GC: ${item.nome}`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md transition-all hover:bg-white/20"
          >
            <div className="mt-1 rounded-lg bg-orange-500/20 p-2 transition-colors group-hover:bg-orange-500/40">
              <MapPin size={18} className="shrink-0 text-orange-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{item.nome}</h3>
              <p className="text-blue-100/80 text-sm capitalize">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )

  const renderPastores = () => (
    <div className="fade-in slide-in-from-right-8 mx-auto w-full max-w-md animate-in space-y-6 duration-300">
      <div className="mb-8 text-center">
        <h2 className="mb-2 font-kingred text-2xl text-white">
          Falar com Pastor
        </h2>
        <p className="text-blue-100 text-sm">
          Com qual de nossos pastores deseja conversar?
        </p>
      </div>

      <div className="space-y-4">
        {['Nildo', 'Gláucio', 'Gilson'].map((pastor, i) => (
          <a
            key={`${i}-${pastor}`}
            href={getWhatsappLink(
              `Olá! Gostaria de falar com o pastor ${pastor}`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-between rounded-xl border border-white/30 bg-white/10 p-4 font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-900/50 p-2 text-blue-200">
                <Phone size={18} />
              </div>
              <span className="text-lg tracking-wide">Pastor {pastor}</span>
            </div>
            <div className="rounded-full bg-orange-500 px-3 py-1 font-bold text-white text-xs uppercase tracking-wider opacity-0 transition-opacity group-hover:opacity-100">
              Contactar
            </div>
          </a>
        ))}
      </div>
    </div>
  )

  return (
    // Fundo escuro com imagem de adoração desfocada para dar um aspeto premium e focar nos botões
    <div className="relative flex min-h-screen flex-col items-center bg-primary font-sans selection:bg-orange-500/30">
      {/* Imagem de Fundo com Overlay */}

      <div className="absolute inset-0 bg-linear-to-b from-blue-950/80 via-blue-950/95 to-blue-950"></div>

      <div className="z-10 w-full bg-white">
        {/* Navegação de Retorno (Voltar) */}
        <div
          data-view={currentView === 'home' ? 'home' : 'sub'}
          className="group relative mx-auto flex w-full max-w-md flex-col items-center gap-4 overflow-hidden px-4 pt-4 pb-16"
        >
          <button
            type="button"
            onClick={() => setCurrentView('home')}
            className="group-data-[view=sub]:fade-in flex cursor-pointer items-center gap-2 self-start rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-primary transition-all hover:text-primary/80 group-data-[view=home]:-translate-x-30"
          >
            <ArrowLeft size={18} />
            <span className="font-medium text-sm">Voltar</span>
          </button>

          {/* Logo da Igreja */}
          <div className="flex w-full flex-col items-center">
            <Image
              height={200}
              width={300}
              src="/images/logo_irv_2.png"
              alt="logo igreja rio de vida"
            />
          </div>
        </div>
      </div>
      {/* Conteúdo Principal */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-4 py-10">
        {/* Renderização Condicional das Vistas */}
        <div className="w-full flex-1">
          {currentView === 'home' && renderHome()}
          {currentView === 'programacao' && renderProgramacao()}
          {currentView === 'gcs' && renderGCs()}
          {currentView === 'pastores' && renderPastores()}
        </div>

        {/* Rodapé Opcional */}
        <Footer className="mt-16 text-blue-400/50" />
      </div>
    </div>
  )
}
