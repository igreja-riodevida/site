import { ContentContainer } from '../ui/content-container'

export function MissionSection() {
  return (
    <section className="bg-white py-16">
      <ContentContainer>
        <div className="mx-auto flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="/happy-couple-man-woman-smiling-church-members.jpg"
              alt="Membros da igreja"
              className="h-auto w-full rounded-sm"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="mb-4 font-bold text-2xl text-gray-900 md:text-3xl">
              Ajudar pessoas a seguir Jesus para que possam experimentar uma
              Vida Melhor
            </h2>

            <p className="mb-4 text-gray-600 text-sm leading-relaxed">
              "O ladrão vem apenas para roubar, matar e destruir; eu vim para
              que tenham vida, e a tenham plenamente."
            </p>

            <p className="font-medium text-[#0D47A1] text-sm">
              - João 10:10 NVI
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
