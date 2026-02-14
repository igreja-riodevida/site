interface ConferenceNotificationProps {
  name: string
  phone: string
  days: string
}

export function ConferenceNotification({
  name,
  phone,
  days,
}: ConferenceNotificationProps) {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          backgroundColor: '#00357A',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: '#ffffff', fontSize: '24px', margin: '0' }}>
          Nova Inscrição - Conferência do Espírito Santo
        </h1>
      </div>

      <div style={{ padding: '30px', backgroundColor: '#ffffff' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#1e293b' }}>
          Uma nova pessoa confirmou presença na Conferência do Espírito Santo
          através do site.
        </p>

        <div
          style={{
            backgroundColor: '#f1f5f9',
            padding: '20px',
            borderRadius: '12px',
            margin: '20px 0',
            borderLeft: '4px solid #f97316',
          }}
        >
          <h2 style={{ color: '#00357A', fontSize: '18px', marginTop: '0' }}>
            Dados do participante:
          </h2>
          <p style={{ margin: '10px 0', color: '#1e293b' }}>
            <strong>Nome:</strong> {name}
          </p>
          <p style={{ margin: '10px 0', color: '#1e293b' }}>
            <strong>Telefone:</strong> {phone}
          </p>
          <p style={{ margin: '10px 0', color: '#1e293b' }}>
            <strong>Dias confirmados:</strong> {days}
          </p>
        </div>

        <div
          style={{
            backgroundColor: '#dbeafe',
            padding: '15px',
            borderRadius: '8px',
            margin: '20px 0',
          }}
        >
          <p style={{ margin: '0', fontSize: '14px', color: '#1e40af' }}>
            <strong>💡 Ação sugerida:</strong> Entre em contato via WhatsApp
            para confirmar e enviar mais informações sobre a conferência.
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#f8fafc',
          padding: '20px',
          textAlign: 'center',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <p style={{ fontSize: '12px', color: '#64748b', margin: '0' }}>
          Este é um email automático do sistema de gestão da Igreja Rio de Vida.
        </p>
      </div>
    </div>
  )
}
