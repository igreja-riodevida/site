import Image from 'next/image'

import {
  BookOpen,
  CheckCircle2,
  Droplets,
  Flame,
  LayoutTemplate,
  MessageSquare,
  Palette,
  Smartphone,
  Target,
  Type,
  Users,
} from 'lucide-react'

import { Footer } from '@/components/footer'

export default function BrandBookPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-irv-black selection:bg-irv-active selection:text-white">
      {/* Navegação Fixa */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-gray-100 border-b bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#hero" className="relative h-full w-25">
            <Image
              src="/images/logo-irv-bg-white.png"
              alt="Logo Igreja Rio de Vida"
              fill
              className="object-contain"
            />
          </a>
          <div className="hidden gap-8 font-medium font-sans text-gray-600 text-sm md:flex">
            <a
              href="#logotipo"
              className="transition-colors hover:text-irv-active"
            >
              Logotipo
            </a>
            <a href="#dna" className="transition-colors hover:text-irv-active">
              DNA
            </a>
            <a
              href="#cores"
              className="transition-colors hover:text-irv-active"
            >
              Cores
            </a>
            <a
              href="#tipografia"
              className="transition-colors hover:text-irv-active"
            >
              Tipografia
            </a>
            <a
              href="#aplicacoes"
              className="transition-colors hover:text-irv-active"
            >
              Aplicações
            </a>
            <a
              href="#implementacao"
              className="transition-colors hover:text-irv-active"
            >
              Implementação
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden bg-irv-dark px-6 pt-32 pb-20 text-white md:pt-40 md:pb-32"
      >
        {/* Background Graphic */}
        <div className="pointer-events-none absolute top-0 right-0 h-200 w-200 translate-x-1/4 -translate-y-1/4 rounded-full bg-irv-active/10 mix-blend-screen blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-150 w-150 -translate-x-1/4 translate-y-1/4 rounded-full bg-irv-fire-from/10 mix-blend-screen blur-3xl"></div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-irv-fire-to"></span>
              <span className="font-bold text-white/90 text-xs uppercase tracking-widest">
                Brand Guidelines 2026
              </span>
            </div>
            <h1 className="mb-6 font-bold text-5xl leading-tight md:text-7xl">
              Igreja <br />
              <span className="font-kingred text-gradient-fire">
                Rio de Vida
              </span>
            </h1>
            <p className="mb-8 max-w-lg font-light font-sans text-blue-100 text-lg leading-relaxed md:text-xl">
              Documento de Posicionamento Estratégico e Diretrizes de Marca. O
              equilíbrio perfeito entre a fluidez da excelência e o fogo do
              mover profético.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#dna"
                className="inline-flex transform items-center justify-center rounded-lg bg-irv-active px-8 py-4 font-bold text-white shadow-irv-active/30 shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-600"
              >
                Explorar Manual
              </a>
              <a
                href="#aplicacoes"
                className="inline-flex transform items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/20"
              >
                Ver Aplicações
              </a>
            </div>
            <p className="mt-8 max-w-lg text-blue-200/70 text-sm leading-relaxed">
              A identidade da Igreja Rio de Vida foi construída para comunicar
              movimento, profundidade espiritual, liderança e transformação
              social. O conceito central une o fluxo contínuo do rio com a
              ativação sobrenatural da chama, formando uma expressão visual e
              institucional coerente com sua visão, missão e valores.
            </p>
          </div>

          <div className="relative hidden justify-center md:flex">
            <Image
              src="/images/logo_irv.png"
              alt="Logo Igreja Rio de Vida"
              width={340}
              height={340}
              className="drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Logotipo Section */}
      <section id="logotipo" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center gap-4">
            <Droplets className="h-8 w-8 text-irv-active" />
            <h2 className="font-kingred text-4xl text-irv-dark">Logotipo</h2>
          </div>

          <p className="mb-12 max-w-3xl text-gray-600 leading-relaxed">
            O logotipo da Igreja Rio de Vida é formado pelo símbolo e pela
            assinatura tipográfica, combinando três arcos em movimento com uma
            chama central. Essa composição representa a união entre águas e
            fogo: fluidez, purificação, ativação, poder e mover profético.
          </p>

          {/* Variações */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-10 shadow-sm">
              <Image
                src="/images/logo-irv-bg-white.png"
                alt="Logo principal"
                width={200}
                height={200}
              />
              <p className="mt-4 text-center font-bold font-sans text-irv-dark text-sm">
                Versão Principal
              </p>
              <p className="mt-1 text-center font-sans text-gray-500 text-sm">
                Aplicação prioritária em fundos claros, mantendo tipografia e
                ondas em Azul Escuro para máxima legibilidade institucional.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-irv-dark p-10 shadow-sm">
              <Image
                src="/images/logo-irv.png"
                alt="Logo fundo escuro"
                width={200}
                height={200}
              />
              <p className="mt-4 text-center font-bold font-sans text-sm text-white">
                Versão Invertida
              </p>
              <p className="mt-1 text-center font-sans text-sm text-white">
                Aplicação recomendada em fundos escuros, preservando o contraste
                em Branco Neutro e a vibração do gradiente da chama.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 p-10 shadow-sm">
              <Image
                src="/images/logo_irv_icon_1.svg"
                alt="Símbolo isolado"
                width={120}
                height={120}
              />
              <p className="mt-4 text-center font-bold font-sans text-irv-dark text-sm">
                Símbolo Isolado
              </p>
              <p className="mt-1 text-center font-sans text-gray-500 text-sm">
                Uso indicado para favicon, avatar, assinaturas compactas e
                aplicações em escala reduzida.
              </p>
            </div>
          </div>

          {/* Regras de uso */}
          <div className="space-y-6">
            <div className="p-8">
              <h3 className="mb-4 font-bold text-irv-dark text-lg">
                Área de Respiro
              </h3>
              <p>
                Nosso logotipo funciona melhor quando tem espaço suficiente para
                respirar.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <div className="relative h-80 w-full">
                    <Image
                      src="/images/site/logo_breathe.png"
                      fill
                      alt="logo breathe"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Mantenha sempre um espaço livre em forma de{' '}
                    <strong>"X"</strong> ao redor do nosso logotipo para
                    preservar seu impacto visual em todas as composições.{' '}
                    <strong>X = a altura-x</strong> da marca denominativa.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative h-80 w-full">
                    <Image
                      src="/images/site/logo_icon_breathe.png"
                      fill
                      alt="logo breathe"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Mantenha sempre um espaço livre de <strong>½ chama</strong>{' '}
                    ao redor da ícone para preservar seu impacto visual em todas
                    as composições
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="mb-4 font-bold text-irv-dark text-lg">
                Redução Mínima
              </h3>
              <p className="mb-4 text-gray-600 text-sm leading-relaxed">
                No impresso, a largura mínima da assinatura completa é de{' '}
                <strong>28 mm</strong>. No digital, o uso completo deve
                respeitar largura mínima de <strong>100 px</strong>; abaixo
                disso, recomenda-se apenas o símbolo.
              </p>
              <div className="grid justify-items-center gap-3 text-sm md:grid-cols-2">
                <div className="flex w-fit flex-col items-center gap-4 p-3">
                  <div className="relative h-40 w-50">
                    <Image
                      src="/images/site/logo_size_print.png"
                      alt="print logo"
                      fill
                      className="bg-gray-50 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-irv-dark">Impressos</p>
                    <p className="text-gray-500">Mín. 28mm</p>
                  </div>
                </div>
                <div className="flex w-fit flex-col items-center gap-4 p-3">
                  <div className="relative h-40 w-50">
                    <Image
                      src="/images/site/logo_size_web.png"
                      alt="web logo"
                      fill
                      className="bg-gray-50 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-irv-dark">Digital</p>
                    <p className="text-gray-500">Mín. 100px</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DNA Section */}
      <section id="dna" className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-kingred text-4xl text-irv-dark">
              A Nossa Identidade
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-fire"></div>
            <p className="mx-auto mt-6 max-w-2xl text-gray-600 text-lg">
              O nome "Rio de Vida" não representa um fluxo contemplativo. Ele
              comunica um movimento dinâmico, progressivo e transformador, capaz
              de influenciar pessoas, famílias, ministérios e a sociedade.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-irv-active/10 text-irv-active">
                <Droplets className="h-7 w-7" />
              </div>
              <h3 className="mb-4 font-bold font-sans text-irv-dark text-xl">
                Movimento Constante
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Um rio que não para. Representa o treinamento contínuo, o envio
                constante e o fluxo de pessoas sendo preparadas para influenciar
                a sociedade.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-gradient-fire opacity-5"></div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-irv-fire-from/10 text-irv-fire-from">
                <Flame className="h-7 w-7" />
              </div>
              <h3 className="mb-4 font-bold font-sans text-irv-dark text-xl">
                Mover Profético
              </h3>
              <p className="text-gray-600 leading-relaxed">
                À medida que avança, o rio se torna mais profundo e largo.
                Representa o crescimento através do discipulado, do ganho de
                vidas e da expansão espiritual da igreja.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-irv-dark/10 text-irv-dark">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mb-4 font-bold font-sans text-irv-dark text-xl">
                Transformação Ambiental
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Por onde o rio passa, a vida floresce. Essa visão traduz a
                atuação prática dos membros nas esferas da sociedade, gerando
                transformação socioeconômica e espiritual fundamentada nos
                valores do Reino.
              </p>
            </div>
          </div>

          {/* Arquétipos */}
          <div className="mt-20 grid items-center gap-12 rounded-3xl bg-irv-dark p-10 text-white md:grid-cols-2 md:p-16">
            <div>
              <h3 className="mb-6 font-kingred text-3xl">
                Arquétipos da Marca
              </h3>
              <p className="mb-8 text-blue-100 leading-relaxed">
                A dinâmica arquetípica da Igreja Rio de Vida foi definida para
                equilibrar ativação com acolhimento, estrutura com discipulado e
                influência com paternidade espiritual.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="h-6 w-6 text-irv-active" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-lg">
                      O Criador / Inovador (Principal)
                    </h4>
                    <p className="text-blue-200 text-sm">
                      Sustenta a percepção de uma igreja que treina líderes,
                      estrutura ministérios fortes, incentiva o empreendedorismo
                      e equipa pessoas para influenciar todas as esferas da
                      sociedade.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="h-6 w-6 text-irv-fire-to" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-lg">
                      O Cuidador (Secundário)
                    </h4>
                    <p className="text-blue-200 text-sm">
                      Reforça a dimensão pastoral da marca por meio de
                      paternidade, discipulado, mentoria, acolhimento e
                      investimento real nas famílias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex h-full min-h-75 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <Users className="mb-6 h-16 w-16 text-irv-soft" />
              <h4 className="mb-2 font-kingred text-2xl">Tom de Voz</h4>
              <p className="max-w-sm font-light text-blue-100">
                Ativadora, excelente, profética e acolhedora. A marca deve
                comunicar com clareza institucional, inspiração espiritual e
                proximidade relacional.
              </p>
            </div>
          </div>
          {/* Tom de Voz - Tabela */}
          <div className="mt-12 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-12">
            <div className="mb-4 flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-irv-active" />
              <h3 className="font-kingred text-2xl text-irv-dark">
                Diretrizes de Comunicação
              </h3>
            </div>
            <p className="mb-8 text-gray-500 text-sm leading-relaxed">
              A linguagem verbal da Rio de Vida deve refletir o equilíbrio entre
              sobrenatural e pragmatismo, excelência e acolhimento, visão de
              futuro e paternidade espiritual.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-gray-100 border-b">
                    <th className="pr-6 pb-4 text-left font-bold text-red-500">
                      ❌ Evitar
                    </th>
                    <th className="pb-4 text-left font-bold text-green-600">
                      ✅ Recomendar
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="py-4 pr-6 text-gray-500 leading-relaxed">
                      "Venha apenas assistir ao nosso culto hoje à noite."
                    </td>
                    <td className="py-4 text-gray-700 leading-relaxed">
                      "Hoje é dia de sermos ativados em comunidade para vivermos
                      nosso propósito semanal."
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-gray-500 leading-relaxed">
                      "Pedimos sua ajuda financeira para pagar as contas."
                    </td>
                    <td className="py-4 text-gray-700 leading-relaxed">
                      "Seu investimento viabiliza a expansão do Reino e o envio
                      de líderes para transformar nossa cidade."
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-gray-500 leading-relaxed">
                      "Abaixo você confere as regras da nossa igreja."
                    </td>
                    <td className="py-4 text-gray-700 leading-relaxed">
                      "Estes são os nossos princípios de honra, unidade e
                      aliança que regem nossa comunidade."
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cromatografia */}
      <section id="cores" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center gap-4">
            <Palette className="h-8 w-8 text-irv-active" />
            <h2 className="font-kingred text-4xl text-irv-dark">
              Cromatografia
            </h2>
          </div>

          <p className="mb-12 max-w-3xl text-gray-600 leading-relaxed">
            A paleta cromática da marca foi definida para equilibrar autoridade
            institucional, dinamismo, acolhimento e dimensão profética. Os azuis
            constroem a base da confiança e da fluidez; o gradiente quente
            concentra paixão, honra e sobrenatural.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Color Swatch 1 */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="h-48 w-full bg-irv-dark"></div>
              <div className="bg-white p-6">
                <h3 className="mb-1 font-bold text-irv-black text-xl">
                  Azul Escuro
                </h3>
                <p className="mb-4 font-mono text-gray-500 text-sm">#00357A</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cor institucional de base para logotipo, títulos principais,
                  fundos nobres e comunicação oficial.
                </p>
              </div>
            </div>

            {/* Color Swatch 2 */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="h-48 w-full bg-irv-active"></div>
              <div className="bg-white p-6">
                <h3 className="mb-1 font-bold text-irv-black text-xl">
                  Azul Ativo
                </h3>
                <p className="mb-4 font-mono text-gray-500 text-sm">#1F80FF</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cor de movimento, propósito e dinamismo; ideal para destaques,
                  botões e sinalizações visuais.
                </p>
              </div>
            </div>

            {/* Color Swatch 3 */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="h-48 w-full bg-irv-soft"></div>
              <div className="bg-white p-6">
                <h3 className="mb-1 font-bold text-irv-black text-xl">
                  Azul Suave
                </h3>
                <p className="mb-4 font-mono text-gray-500 text-sm">#99C5FF</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cor de acolhimento, paz e equilíbrio; indicada para fundos
                  secundários e áreas de respiro.
                </p>
              </div>
            </div>

            {/* Color Swatch 4 (Gradient) */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="h-48 w-full bg-gradient-fire"></div>
              <div className="bg-white p-6">
                <h3 className="mb-1 font-bold text-irv-black text-xl">
                  Fogo Gradiente
                </h3>
                <p className="mb-4 font-mono text-gray-500 text-sm">
                  #FF7A00 → #FFD600
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Aplicação exclusiva na chama e em ativações visuais de
                  destaque espiritual.
                </p>
              </div>
            </div>

            {/* Color Swatch 5 */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="h-48 w-full border border-gray-200 bg-irv-white"></div>
              <div className="bg-white p-6">
                <h3 className="mb-1 font-bold text-irv-black text-xl">
                  Branco Neutro
                </h3>
                <p className="mb-4 font-mono text-gray-500 text-sm">#FFFFFF</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Contraste, pureza visual e composição editorial limpa.
                </p>
              </div>
            </div>

            {/* Color Swatch 6 */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="h-48 w-full bg-irv-black"></div>
              <div className="bg-white p-6">
                <h3 className="mb-1 font-bold text-irv-black text-xl">
                  Preto Suave
                </h3>
                <p className="mb-4 font-mono text-gray-500 text-sm">#121214</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Corpo de texto, profundidade contemporânea e apoio visual
                  discreto.
                </p>
              </div>
            </div>
          </div>
          {/* Specs técnicas */}
          <div className="mt-12 overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="border-gray-100 border-b">
                  <th className="px-6 py-4 text-left font-bold text-irv-dark">
                    Cor
                  </th>
                  <th className="px-6 py-4 text-left font-bold font-mono text-irv-dark">
                    HEX
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-irv-dark">
                    RGB
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-irv-dark">
                    CMYK
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-irv-dark">
                    Pantone
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 bg-white">
                {[
                  {
                    name: 'Azul Escuro',
                    hex: '#00357A',
                    swatch: 'bg-irv-dark',
                    rgb: '0, 53, 122',
                    cmyk: '100, 80, 15, 3',
                    pantone: '293 C',
                  },
                  {
                    name: 'Azul Ativo',
                    hex: '#1F80FF',
                    swatch: 'bg-irv-active',
                    rgb: '31, 128, 255',
                    cmyk: '75, 45, 0, 0',
                    pantone: '2728 C',
                  },
                  {
                    name: 'Azul Suave',
                    hex: '#99C5FF',
                    swatch: 'bg-irv-soft',
                    rgb: '153, 197, 255',
                    cmyk: '38, 15, 0, 0',
                    pantone: '291 C',
                  },
                  {
                    name: 'Branco Neutro',
                    hex: '#FFFFFF',
                    swatch: 'bg-white border border-gray-200',
                    rgb: '255, 255, 255',
                    cmyk: '0, 0, 0, 0',
                    pantone: '—',
                  },
                  {
                    name: 'Preto Suave',
                    hex: '#121214',
                    swatch: 'bg-irv-black',
                    rgb: '18, 18, 20',
                    cmyk: '80, 70, 60, 85',
                    pantone: 'Black 6 C',
                  },
                ].map((c) => (
                  <tr key={c.hex}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-6 w-6 rounded-full ${c.swatch}`} />
                        <span className="font-medium text-irv-black">
                          {c.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono text-gray-600">
                      {c.hex}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{c.rgb}</td>
                    <td className="px-6 py-4 text-gray-600">{c.cmyk}</td>
                    <td className="px-6 py-4 text-gray-600">{c.pantone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tipografia */}
      <section
        id="tipografia"
        className="border-gray-100 border-y bg-gray-50 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center gap-4">
            <Type className="h-8 w-8 text-irv-active" />
            <h2 className="font-kingred text-4xl text-irv-dark">
              Tipografia Estratégica
            </h2>
          </div>

          <p className="mb-12 max-w-3xl text-gray-600 leading-relaxed">
            O sistema tipográfico oficial equilibra herança, excelência
            institucional e clareza digital. A tipografia de identidade comunica
            nobreza e realeza; a tipografia de suporte garante leitura funcional
            e versatilidade em diferentes canais.
          </p>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Font 1 */}
            <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
              <div className="mb-8 flex items-start justify-between border-gray-100 border-b pb-8">
                <div>
                  <p className="mb-2 font-bold text-irv-active text-sm uppercase tracking-widest">
                    Identidade
                  </p>
                  <h3 className="font-kingred text-4xl text-irv-dark">
                    Kingred Modern
                  </h3>
                </div>
                <span className="font-kingred text-5xl text-gray-200">Aa</span>
              </div>
              <p className="mb-6 overflow-hidden font-kingred text-6xl text-irv-black md:text-8xl">
                Aa Bb Cc
              </p>
              <div className="wrap-break-word mb-8 font-kingred text-gray-800 text-lg leading-relaxed opacity-80">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br />a b c
                d e f g h i j k l m n o p q r s t u v w x y z <br />0 1 2 3 4 5
                6 7 8 9 ! ? @ & %
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <p className="font-sans text-gray-600 text-sm">
                  <strong>Uso:</strong> Logotipo, títulos nobres, capas
                  institucionais, certificados, painéis e peças de maior
                  solenidade visual.
                </p>
              </div>
            </div>

            {/* Font 2 */}
            <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
              <div className="mb-8 flex items-start justify-between border-gray-100 border-b pb-8">
                <div>
                  <p className="mb-2 font-bold text-irv-fire-from text-sm uppercase tracking-widest">
                    Suporte, Leitura e Digital
                  </p>
                  <h3 className="font-bold font-sans text-4xl text-irv-dark">
                    Montserrat
                  </h3>
                </div>
                <span className="font-bold font-sans text-5xl text-gray-200">
                  Aa
                </span>
              </div>
              <p className="mb-6 overflow-hidden font-bold font-sans text-6xl text-irv-black tracking-tighter md:text-8xl">
                Aa Bb Cc
              </p>
              <div className="wrap-break-word mb-8 font-medium font-sans text-gray-800 text-lg leading-relaxed opacity-80">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br />a b c
                d e f g h i j k l m n o p q r s t u v w x y z <br />0 1 2 3 4 5
                6 7 8 9 ! ? @ & %
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <p className="font-sans text-gray-600 text-sm">
                  <strong>Uso:</strong> Apostilas, slides, e-mails, posts,
                  relatórios e peças com necessidade de clareza, escala e
                  leitura contínua.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-irv-active/20 bg-irv-active/5 p-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-irv-dark">Observação:</strong> Para
              materiais digitais e educacionais, os pesos recomendados da
              Montserrat são <strong>ExtraBold</strong> e <strong>Bold</strong>{' '}
              para títulos secundários, e <strong>Regular</strong> ou{' '}
              <strong>Light</strong> para corpo de texto.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="aplicacoes" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center gap-4">
            <LayoutTemplate className="h-8 w-8 text-irv-active" />
            <h2 className="font-kingred text-4xl text-irv-dark">
              Aplicações & Ministérios
            </h2>
          </div>

          <p className="mb-12 max-w-3xl text-gray-600 leading-relaxed">
            O design da marca deve servir à operação prática da igreja,
            garantindo unidade visual nos materiais de ensino, nas subdivisões
            ministeriais, nas plataformas digitais e nos ambientes físicos.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-colors duration-300 hover:bg-irv-dark">
              <BookOpen className="mb-6 h-10 w-10 text-irv-dark transition-colors group-hover:text-white" />
              <h3 className="mb-3 font-bold text-irv-black text-xl transition-colors group-hover:text-white">
                Ensino & Liderança
              </h3>
              <p className="text-gray-600 text-sm transition-colors group-hover:text-blue-100">
                Ambiente visual para apostilas, apresentações e certificados da
                Escola de Líderes, com linguagem editorial nobre, limpa e
                organizada.
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-colors duration-300 hover:bg-irv-soft">
              <Users className="mb-6 h-10 w-10 text-irv-active transition-colors group-hover:text-irv-dark" />
              <h3 className="mb-3 font-bold text-irv-black text-xl transition-colors group-hover:text-irv-dark">
                Famílias
              </h3>
              <p className="text-gray-600 text-sm transition-colors group-hover:text-irv-dark/80">
                Submarca acolhedora com Azul Escuro e Azul Suave, direcionada
                para comunhão, paternidade, unidade e investimento nas casas.
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-colors duration-300 hover:bg-linear-to-r hover:from-irv-fire-from hover:to-irv-fire-to">
              <Flame className="mb-6 h-10 w-10 text-irv-fire-from transition-colors group-hover:text-irv-white" />
              <h3 className="mb-3 font-bold text-irv-black text-xl transition-colors group-hover:text-irv-white">
                Mover Profético
              </h3>
              <p className="text-gray-600 text-sm transition-colors group-hover:text-irv-white/90">
                Aplicação com fundos escuros e destaque para o gradiente da
                chama, comunicando oração, sensibilidade espiritual e ativação
                sobrenatural.
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-colors duration-300 hover:bg-irv-active">
              <Target className="mb-6 h-10 w-10 text-irv-active transition-colors group-hover:text-white" />
              <h3 className="mb-3 font-bold text-irv-black text-xl transition-colors group-hover:text-white">
                Reino & Negócios
              </h3>
              <p className="text-gray-600 text-sm transition-colors group-hover:text-blue-50">
                Desdobramento com linguagem mais executiva, Azul Ativo como cor
                de ênfase e estética voltada a liderança, gestão e influência
                nas esferas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultura Digital */}
      <section className="border-gray-100 border-t bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center gap-4">
            <Smartphone className="h-8 w-8 text-irv-active" />
            <h2 className="font-kingred text-4xl text-irv-dark">
              Cultura Digital
            </h2>
          </div>

          <p className="mb-12 max-w-3xl text-gray-600 leading-relaxed">
            A presença digital da Rio de Vida deve converter navegação casual em
            engajamento, conexão comunitária e clareza institucional. O conteúdo
            precisa equilibrar profundidade espiritual, vida em comunidade e
            comunicação objetiva.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="mb-2 font-bold text-irv-dark text-lg">
                1/3 Teologia & Quotes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Passagens bíblicas, frases de mentoria e peças de reflexão
                visualmente nobres, com forte presença tipográfica e uso da
                paleta institucional.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="mb-2 font-bold text-irv-dark text-lg">
                1/3 Vida de Comunidade
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fotografias reais da igreja, mostrando pessoas orando,
                celebrando, sendo discipuladas e vivendo comunhão.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="mb-2 font-bold text-irv-dark text-lg">
                1/3 Ativação & Agenda
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Convites, agendas, anúncios de cultos, células e treinamentos
                com leitura rápida, contraste forte e senso de movimento.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-irv-dark p-8 text-white">
              <h3 className="mb-3 font-bold text-lg">YouTube — Thumbnails</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Miniaturas com títulos curtos, alto contraste e presença sutil
                do símbolo da marca como assinatura visual do canal.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="mb-3 font-bold text-irv-dark text-lg">
                Assinatura de E-mail
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Estrutura minimalista em HTML, com nome do líder em Azul Escuro,
                cargo em Azul Ativo e logotipo no rodapé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <Footer className="border-blue-100 border-t bg-irv-black py-8 text-center text-white">
        <div className="relative hidden justify-center md:flex">
          <Image
            src="/images/logo_irv.png"
            alt="Logo Igreja Rio de Vida"
            width={120}
            height={120}
            className="drop-shadow-2xl"
            priority
          />
        </div>
        <p className="mb-6">
          Manual de Identidade Visual e Brand Kit desenvolvido para consolidar
          uma presença espiritual, contemporânea, acolhedora e formadora de
          líderes.
        </p>
      </Footer>
    </div>
  )
}
