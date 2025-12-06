import { pretty, render } from '@react-email/render'

import { ConferenceConfirmation } from '@/components/email-templates/conference-confirmation'

const props = {
  name: 'João Silva',
  phone: '(61) 99999-9999',
  days: 'Sábado e Domingo',
}
const html = await pretty(await render(<ConferenceConfirmation {...props} />))

export default function EmailPreview() {
  return (
    <div
      // biome-ignore lint/security/noDangerouslySetInnerHtml: needed
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )
}
