import { Countdown } from '@/components/countdown'
import Image from 'next/image'

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center">
			<div className="flex flex-col items-center space-y-8 px-4 text-center">
				{/* Logo */}
				<div className="mb-8">
					<Image
						src="/images/logo-irv.png"
						alt="Igreja Rio de Vida"
						width={400}
						height={80}
						className="h-auto w-full max-w-md"
					/>
				</div>

				{/* Título */}
				<h1 className="font-bold text-4xl lg:text-6xl">Novo Site em Breve</h1>

				{/* Subtítulo */}
				<p className="max-w-2xl text-lg opacity-90 lg:text-xl">
					Estamos preparando algo especial para você. Nosso novo site estará
					disponível em:
				</p>

				{/* Countdown */}
				<div className="mt-8">
					<Countdown />
				</div>

				{/* Data */}
				<p className="mt-4 font-semibold text-xl lg:text-2xl">
					1º de Dezembro de 2024
				</p>

				{/* Mensagem adicional */}
				<div className="mt-8 max-w-lg text-center">
					<p className="text-base opacity-80">
						Enquanto isso, continue nos acompanhando em nossas redes sociais e
						cultos presenciais.
					</p>
				</div>
			</div>
		</div>
	)
}
