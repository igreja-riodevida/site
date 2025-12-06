import Link from 'next/link'

import { ContentContainer } from '../ui/content-container'

const ministries = [
  {
    title: 'CRIANÇAS',
    image: '/children-ministry-colorful-kids-program-church.jpg',
    href: '/criancas',
  },
  {
    title: 'JOVENS',
    image: '/youth-group-teens-worship-church-praise.jpg',
    href: '/jovens',
  },
  {
    title: 'GRUPOS',
    image: '/small-group-adults-talking-fellowship-church.jpg',
    href: '/grupos',
  },
]

export function MinistriesSection() {
  return (
    <section className="bg-white py-6 md:py-8">
      <ContentContainer>
        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {ministries.map((ministry) => (
            <Link
              key={ministry.title}
              href={ministry.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <img
                src={ministry.image || '/placeholder.svg'}
                alt={ministry.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                {ministry.title === 'CRIANÇAS' && (
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      <div className="h-6 w-2 bg-[#0D47A1]" />
                      <div className="h-6 w-2 bg-white" />
                      <div className="h-6 w-2 bg-[#2196F3]" />
                    </div>
                    <span className="ml-2 font-bold text-white text-xl tracking-wider md:text-2xl">
                      CRIANÇAS
                    </span>
                  </div>
                )}
                {ministry.title === 'JOVENS' && (
                  <div className="font-bold text-2xl text-white md:text-3xl">
                    <span className="font-serif italic">JV</span>
                  </div>
                )}
                {ministry.title === 'GRUPOS' && (
                  <span className="font-bold text-white text-xl tracking-widest md:text-2xl">
                    GRUPOS
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </ContentContainer>
    </section>
  )
}
