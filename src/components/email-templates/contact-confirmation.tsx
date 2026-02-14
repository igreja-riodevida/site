interface ContactConfirmationProps {
  name: string
  email?: string | null
  phone: string
}

export function ContactConfirmation({
  name,
  email,
  phone,
}: ContactConfirmationProps) {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ color: '#0976F4', fontSize: '24px' }}>
        Obrigado por se inscrever!
      </h1>
      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        Olá <strong>{name}</strong>,
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        Recebemos sua inscrição com sucesso! Estamos muito felizes em ter você
        conosco.
      </p>

      <div
        style={{
          backgroundColor: '#F1EEED',
          padding: '20px',
          borderRadius: '8px',
          margin: '20px 0',
        }}
      >
        <h2 style={{ color: '#211C26', fontSize: '20px', marginTop: '0' }}>
          Seus dados:
        </h2>
        <p style={{ margin: '8px 0' }}>
          <strong>Nome:</strong> {name}
        </p>
        {email && (
          <p style={{ margin: '8px 0' }}>
            <strong>Email:</strong> {email}
          </p>
        )}
        <p style={{ margin: '8px 0' }}>
          <strong>Telefone:</strong> {phone}
        </p>
      </div>

      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        Em breve entraremos em contato com mais informações.
      </p>

      <p style={{ fontSize: '14px', color: '#695F6E', marginTop: '30px' }}>
        Deus abençoe,
        <br />
        <strong>Igreja Rio de Vida</strong>
      </p>
    </div>
  )
}
