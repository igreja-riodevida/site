import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  pixelBasedPreset,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'

interface ConferenceConfirmationProps {
  name: string
  phone: string
  days: string
}

export function ConferenceConfirmation({
  name,
  phone,
  days,
}: ConferenceConfirmationProps) {
  return (
    <Html lang="pt-BR">
      <Head />
      <Tailwind config={{ presets: [pixelBasedPreset] }}>
        <Preview>
          Presença Confirmada na Conferência do Espírito Santo! 🔥
        </Preview>
        <Body className="mx-auto bg-white font-sans">
          <Container className="mx-auto my-8 max-w-lg">
            <Heading className="m-0 rounded-t-xl bg-[#00357A] p-8 text-center font-bold text-3xl text-white">
              Presença Confirmada! 🔥
            </Heading>

            <Text className="px-4 text-[#00357A] text-lg leading-7">
              Olá <strong>{name}</strong>,
            </Text>
            <Text className="px-4 text-base text-gray-800 leading-7">
              Sua presença na <strong>Conferência do Espírito Santo</strong> foi
              confirmada com sucesso! Estamos muito felizes em ter você conosco
              neste momento especial.
            </Text>

            <Section className="mx-auto my-4 rounded-xl bg-gray-100">
              <Heading as="h2" className="p-4 font-bold text-[#00357A] text-xl">
                📋 Seus dados de inscrição:
              </Heading>
              <Text className="my-0 px-4 text-gray-800">
                <strong>Nome:</strong> {name}
              </Text>
              <Text className="my-0 px-4 text-gray-800">
                <strong>Telefone:</strong> {phone}
              </Text>
              <Text className="mt-0 px-4 text-gray-800">
                <strong>Dias confirmados:</strong> {days}
              </Text>
            </Section>

            <Section className="rounded-xl bg-blue-50">
              <Heading as="h3" className="p-4 font-bold text-[#00357A] text-lg">
                📅 Programação:
              </Heading>
              <Text className="my-0 px-4 font-bold text-[#00357A]">
                Sábado, 28 de Fevereiro
              </Text>
              <Text className="my-0 px-4 text-gray-800">
                • Sessão 1: 17h00
                <br />• Sessão 2: 19h00
              </Text>

              <Text className="mb-0 px-4 font-bold text-[#00357A]">
                Domingo, 01 de Março
              </Text>
              <Text className="mt-0 px-4 text-gray-800">
                • Encerramento: 18h30
              </Text>
            </Section>

            <Section className="mt-4 rounded-lg bg-amber-50">
              <Text className="m-0 p-4 text-amber-900 text-sm">
                <strong>💡 Dica:</strong> Chegue com antecedência para garantir
                um bom lugar. Traga sua Bíblia e prepare seu coração para um
                encontro transformador!
              </Text>
            </Section>

            <Text className="px-4 text-base text-gray-800 leading-7">
              Nos vemos na Conferência! Prepare-se para ser renovado pelo fogo e
              pelas águas vivas de Deus.
            </Text>

            <Section className="text-center">
              <Link
                href="https://wa.me/5561991712111"
                className="box-border inline-flex items-center rounded-full bg-green-600 px-12 py-3 font-semibold text-white no-underline"
              >
                💬 Mais informações
              </Link>
            </Section>

            <Section className="mt-8 text-center">
              <Hr className="border-gray-200" />
              <Text className="text-gray-500 text-sm">
                📍 <strong>Local:</strong> Transplantas Imóveis EPTG - Setor
                Habitacional Vicente Pires, Ch. 54 - Brasília
              </Text>
            </Section>

            <Section className="border-t border-t-gray-200 border-t-solid border-none bg-gray-50 text-center">
              <Text className="my-4 text-gray-500 text-sm">
                <strong className="text-[#00357A]">Igreja Rio de Vida</strong>
                <br />
                Um Lugar de Novos Começos
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

ConferenceConfirmation.PreviewProps = {
  name: 'João Silva',
  phone: '(61) 99999-9999',
  days: 'Sábado e Domingo',
} satisfies ConferenceConfirmationProps
