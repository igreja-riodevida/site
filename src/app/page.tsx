import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative flex min-h-screen justify-between bg-blue-500 text-white">
      <div className="relative h-screen w-full">
        <Image
          src="/images/fire.png"
          alt="fire"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40">
        <div>
          <p className="font-gotu">Conferencia do</p>
          <h1 className="font-sirenik text-[167px]">Espírito Santo</h1>
          <p className="font-gotu">Dias 22 e 23 de março</p>
        </div>
        <div>
          <p>
            Mas receberão poder quando o Espírito Santo descer sobre vocês, e
            serão minhas testemunhas tanto em Jerusalém como e toda a Judeia e
            Samaria e até os confins da terra.
          </p>
          <p>Atos Apostólicos 1:8</p>
        </div>
        <div>
          <p>
            Você está convidado para a Conferência do Espírito Santo, um evento
            de fé, renovação e avivamento! Será um momento único de
            comunhão,louvor e ensinamentos inspiradores.
          </p>
          <p>Venha viver uma experiência transformadora!</p>
        </div>
      </div>
      <div className="relative h-screen w-full">
        <Image
          src="/images/bird.png"
          alt="bird"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
