'use client'

import Image from 'next/image'
import type React from 'react'
import { useState } from 'react'

import { ArrowRight, Calendar, CheckCircle, Clock, MapPin } from 'lucide-react'
import { v4 } from 'uuid'

import { createConferenceContact } from '@/actions/create-conference-contact'
import { Footer } from '@/components/footer'

export default function LandingPage() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    dias: [] as string[],
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (dia: string) => {
    setFormData((prev) => {
      const diasAtuais = prev.dias.includes(dia)
        ? prev.dias.filter((d) => d !== dia)
        : [...prev.dias, dia]
      return { ...prev, dias: diasAtuais }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      await createConferenceContact({
        id: v4(),
        name: formData.nome,
        phone: formData.telefone,
        email: formData.email,
        days: `${formData.dias.join(', ')}`,
      })
      setIsSubmitted(true)
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Erro ao processar sua inscrição. Tente novamente.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    // Alterado bg-white para um gradiente sutil e texto base para azul escuro
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

      {/* Hero Section Principal */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Coluna da Esquerda: Copywriting e Benefícios */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Headline de Impacto */}
              <div>
                <h2 className="text-2xl text-blue-950 leading-none md:text-4xl lg:text-3xl 2xl:text-2xl">
                  CONFERÊNCIA DO
                </h2>
                <h1 className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text font-kingred text-[min(10vw)] text-transparent leading-none lg:text-[min(5vw)] xl:text-[min(4vw)] 2xl:text-[min(2vw)]">
                  ESPÍRITO SANTO
                </h1>
              </div>
              {/* Subheadline */}
              <p className="max-w-lg font-medium text-blue-800/80 text-lg leading-relaxed md:text-xl">
                Um fim de semana para ser renovado pelo fogo e pelas águas vivas
                de Deus. O seu novo tempo começa aqui.
              </p>
              {/* DESTAQUE PARA AS DATAS (Alteração solicitada) */}
              <div className="group relative overflow-hidden rounded-2xl border-orange-500 border-l-8 bg-[#00357A] p-6 text-white shadow-[#00357A]/20 shadow-lg">
                {/* Efeito de fundo */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-white/5 blur-2xl"></div>

                <h3 className="mb-3 flex items-center justify-center gap-2 font-bold text-orange-400 text-sm uppercase tracking-wider">
                  <Calendar size={16} /> Reserve a Data
                </h3>
                <div className="flex justify-center gap-6">
                  <div>
                    <span className="block font-bold text-3xl">28 FEV</span>
                    <span className="text-blue-200 text-sm">
                      Sábado às 17h e 19h
                    </span>
                  </div>
                  <div className="hidden h-12 w-px bg-blue-700 sm:block"></div>
                  <div>
                    <span className="block font-bold text-3xl">01 MAR</span>
                    <span className="text-blue-200 text-sm">
                      Domingo às 18h30
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemento Visual (Mobile only) */}
            <div className="block rotate-1 overflow-hidden rounded-2xl border-4 border-white shadow-2xl lg:hidden" />

            {/* Benefícios (Bullet Points) */}
            <ul className="space-y-4 pt-2">
              {[
                'Renovação espiritual profunda.',
                'Palavra profética para 2026.',
                'Ativação de dons e chamado.',
                'Ambiente de intensa adoração.',
              ].map((item, index) => (
                <li key={`${index}-${item}`} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-orange-100 p-1">
                    <CheckCircle className="h-4 w-4 shrink-0 text-orange-600" />
                  </div>
                  <span className="font-medium text-[#00357A] text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna da Direita: Visual Desktop + Formulário de Captura */}
          <div className="relative">
            {/* Background Decorativo com as cores da logo */}
            <div className="absolute -inset-4 hidden rotate-2 rounded-[2.5rem] bg-linear-to-bl from-blue-600 to-[#00357A] opacity-10 lg:block"></div>

            <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-2xl">
              {/* Imagem de Topo do Card */}
              <div className="group relative h-40 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-[#00357A]/30 transition-colors group-hover:bg-[#00357A]/20"></div>
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
                  alt="Mãos levantadas em adoração"
                  className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute right-0 bottom-0 left-0 z-20 h-16 bg-linear-to-t from-white to-transparent"></div>
              </div>

              {/* Formulário */}
              <div className="px-8 pt-2 pb-8">
                {!isSubmitted ? (
                  <>
                    <div className="mb-6 text-center">
                      <h3 className="font-bold text-2xl text-blue-950">
                        Confirme sua Presença
                      </h3>
                      <p className="mt-1 text-blue-600/70 text-sm">
                        Entrada gratuita. Vagas limitadas.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {error && (
                        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-center text-red-600 text-sm">
                          {error}
                        </div>
                      )}

                      <div>
                        <label
                          htmlFor="nome"
                          className="mb-1 block font-bold text-[#00357A] text-sm"
                        >
                          Seu Nome Completo
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          placeholder="Digite seu nome"
                          className="w-full rounded-lg border border-blue-100 bg-slate-50 px-4 py-3 text-[#00357A] outline-none transition-all placeholder:text-blue-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                          value={formData.nome}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="telefone"
                          className="mb-1 block font-bold text-[#00357A] text-sm"
                        >
                          WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          required
                          placeholder="00 00000-0000"
                          className="w-full rounded-lg border border-blue-100 bg-slate-50 px-4 py-3 text-[#00357A] outline-none transition-all placeholder:text-blue-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                          value={formData.telefone}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1 block font-bold text-[#00357A] text-sm"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="Digite seu e-mail"
                          className="w-full rounded-lg border border-blue-100 bg-slate-50 px-4 py-3 text-[#00357A] outline-none transition-all placeholder:text-blue-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      {/* CHECKBOXES DE DATA (Novo Recurso) */}
                      <div className="rounded-lg border border-blue-100 bg-blue-50/50 p-4">
                        <div className="mb-3 flex items-center gap-2 font-bold text-[#00357A] text-sm">
                          <Clock size={16} className="text-orange-500" />
                          Quais dias você participará?
                        </div>
                        <div className="space-y-3">
                          <label className="group flex cursor-pointer items-center gap-3">
                            <div
                              className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${formData.dias.includes('Sabado') ? 'border-blue-600 bg-blue-600' : 'border-blue-300 bg-white group-hover:border-blue-500'}`}
                            >
                              {formData.dias.includes('Sabado') && (
                                <CheckCircle size={14} className="text-white" />
                              )}
                            </div>
                            <input
                              type="checkbox"
                              className="hidden"
                              onChange={() => handleCheckboxChange('Sabado')}
                              checked={formData.dias.includes('Sabado')}
                            />
                            <div className="text-sm">
                              <span className="block font-semibold text-[#00357A]">
                                Sábado, 28/02
                              </span>
                              <span className="text-blue-500 text-xs">
                                Sessões às 17h e 19h
                              </span>
                            </div>
                          </label>

                          <label className="group flex cursor-pointer items-center gap-3">
                            <div
                              className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${formData.dias.includes('Domingo') ? 'border-blue-600 bg-blue-600' : 'border-blue-300 bg-white group-hover:border-blue-500'}`}
                            >
                              {formData.dias.includes('Domingo') && (
                                <CheckCircle size={14} className="text-white" />
                              )}
                            </div>
                            <input
                              type="checkbox"
                              className="hidden"
                              onChange={() => handleCheckboxChange('Domingo')}
                              checked={formData.dias.includes('Domingo')}
                            />
                            <div className="text-sm">
                              <span className="block font-semibold text-[#00357A]">
                                Domingo, 01/03
                              </span>
                              <span className="text-blue-500 text-xs">
                                Encerramento às 18h30
                              </span>
                            </div>
                          </label>
                        </div>
                        {/* Validação simples visual se nenhum dia for selecionado */}
                        {formData.dias.length === 0 && (
                          <p className="mt-2 ml-1 text-orange-500 text-xs opacity-80">
                            * Selecione pelo menos um dia
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={formData.dias.length === 0 || isSubmitting}
                        className="flex w-full transform items-center justify-center gap-2 rounded-lg bg-linear-to-r from-orange-500 to-orange-600 px-6 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:from-orange-600 hover:to-orange-700 hover:shadow-orange-500/30 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSubmitting ? 'Enviando...' : 'Garantir Meu Lugar'}
                        <ArrowRight size={20} />
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="fade-in zoom-in animate-in py-12 text-center duration-500">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-inner">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="mb-2 font-bold text-2xl text-[#00357A]">
                      Presença Confirmada!
                    </h3>
                    <p className="mb-6 px-4 text-blue-600/80">
                      Nos vemos na Conferência Rio de Vida. <br />
                      <span className="font-semibold text-blue-800">
                        Prepare seu coração!
                      </span>
                    </p>
                    <div className="mx-4 rounded-lg border border-blue-100 bg-blue-50 p-4 text-blue-800 text-sm">
                      Um comprovante foi enviado para seu email.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Social Proof ou Localização rápida */}
            <div className="mt-8 flex items-center justify-center gap-2 font-medium text-blue-800/60 text-sm">
              <MapPin size={16} />
              <span>Igreja Rio de Vida - Sede</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer className="border-blue-100 border-t bg-blue-50/50 py-8 text-center text-[#00357A]/40" />
    </div>
  )
}
