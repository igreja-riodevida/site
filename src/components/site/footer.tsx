import Link from 'next/link'

import { Facebook, Instagram, Youtube } from 'lucide-react'

import { NavLink } from '@/components/ui/nav-link'

import { ContentContainer } from '../ui/content-container'

const footerLinks = {
  about: [
    { label: 'Sobre Nós', href: '/sobre' },
    { label: 'Locais', href: '/locais' },
    { label: 'Equipe', href: '/equipe' },
  ],
  nextSteps: [
    { label: 'Salvação', href: '/salvacao' },
    { label: 'Batismo', href: '/batismo' },
    { label: 'Grupos', href: '/grupos' },
    { label: 'Servir', href: '/servir' },
    { label: 'Trilha de Vida', href: '/trilha-de-vida' },
    { label: 'Oração', href: '/oracao' },
  ],
  ministries: [
    { label: 'Crianças', href: '/criancas' },
    { label: 'Jovens', href: '/jovens' },
    { label: 'Mulheres', href: '/mulhere' },
  ],
  more: [
    { label: 'Eventos', href: '/eventos' },
    { label: 'Assistir', href: '/assistir' },
    { label: 'Ofertar', href: '/ofertar' },
    { label: 'Contato', href: '/contato' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#2d2d2d] py-12 text-white">
      <ContentContainer>
        <div className="flex flex-col items-center gap-8 text-center md:grid md:grid-cols-6 md:text-left">
          {/* Logo and Locations */}
          <div className="md:col-span-2">
            <div className="mb-6 flex justify-center gap-1 md:justify-start">
              <div className="h-8 w-3 bg-[#0D47A1]" />
              <div className="h-8 w-3 bg-[#2196F3]" />
              <div className="h-8 w-3 bg-white" />
            </div>

            <div className="mb-6">
              <h4 className="mb-2 font-bold text-gray-400 text-sm">Brasília</h4>
              <p className="text-gray-400 text-sm">
                Transplantas Imóveis EPTG - Setor Habitacional Vicente Pires,
                Ch. 54
              </p>
              <p className="text-[#2196F3] text-sm">Brasília, DF 72005-305</p>
              <p className="text-[#2196F3] text-sm">(61) 9917-1211</p>
            </div>

            <div className="flex justify-center gap-4 md:justify-start">
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-gray-400 text-sm">Sobre</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} variant="footer">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-[#2196F3] text-sm">
              Próximos Passos
            </h4>
            <ul className="space-y-2">
              {footerLinks.nextSteps.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} variant="footer">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-[#2196F3] text-sm">
              Ministérios
            </h4>
            <ul className="space-y-2">
              {footerLinks.ministries.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} variant="footer">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-gray-400 text-sm">Eventos</h4>
            <ul className="space-y-2">
              {footerLinks.more.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} variant="footer">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentContainer>
    </footer>
  )
}
