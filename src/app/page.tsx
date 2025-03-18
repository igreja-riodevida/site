import { ContactForm } from '@/components/contact-form'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="@container flex min-h-screen flex-col bg-blue-500 text-white">
      <div className="relative flex h-full justify-between">
        <div className="relative h-[450px] w-full lg:h-[600px]">
          <Image
            src="/images/fire.png"
            alt="fire"
            fill
            className="object-cover object-right opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 bg-black/30 px-4">
          <div className="flex flex-col items-center">
            <p className="-mb-[1rem] font-binggo text-3xl uppercase tracking-[.5rem]">
              Conferencia do
            </p>
            <h1 className="flex flex-col font-medium font-sirenik text-9xl lg:text-[167px]">
              <span>Espírito</span>
              <span className="ml-auto">Santo</span>
            </h1>
            <p className="-mt-[1rem] ml-auto font-binggo text-xl uppercase tracking-[.5rem] md:text-3xl">
              Dias 22 e 23 de marco
            </p>
          </div>
        </div>
        <div className="relative h-[450px] w-full lg:h-[600px]">
          <Image
            src="/images/bird.png"
            alt="bird"
            fill
            className="object-contain opacity-60"
          />
        </div>
      </div>
      <div className="relative flex w-full flex-1 flex-col items-center gap-8 bg-blue-500 text-xl lg:flex-row lg:justify-evenly">
        <div className="absolute h-full w-full bg-black/30" />
        <div className="relative z-10 hidden">
          <p className="text-wrap">
            Mas receberão poder quando o Espírito Santo descer sobre vocês, e
            serão minhas testemunhas tanto em Jerusalém como e toda a Judeia e
            Samaria e até os confins da terra.
          </p>
          <p>Atos Apostólicos 1:8</p>
        </div>
        <div className="max-sm:-mt-[50px] relative z-10 w-full space-y-4 px-4 font-gotu text-xl lg:w-xl lg:text-2xl">
          <p>
            Você está convidado para a Conferência do Espírito Santo, um evento
            de fé, renovação e avivamento! Será um momento único de
            comunhão,louvor e ensinamentos inspiradores.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
