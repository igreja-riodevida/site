interface ContactNotificationProps {
  name: string
  email?: string | null
  phone: string
}

export function ContactNotification({
  name,
  email,
  phone,
}: ContactNotificationProps) {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ color: '#0976F4', fontSize: '24px' }}>
        Nova inscrição recebida
      </h1>
      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        Um novo contato foi registrado através do formulário do site.
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
          Dados do contato:
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

      <p style={{ fontSize: '14px', color: '#695F6E', marginTop: '30px' }}>
        Este é um email automático do sistema de gestão da Igreja Rio de Vida.
      </p>
    </div>
  )
}
