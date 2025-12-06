# Serviço de Email - Documentação de Implementação

## Visão Geral
Sistema de envio de emails implementado usando Resend para captura de dados de formulários. O serviço é genérico e reutilizável para diferentes tipos de formulários.

## Arquitetura

### Service Layer
- **`/src/services/resend.service.ts`**: Serviço base genérico
  - Função `sendEmail(to, subject, react)` 
  - Validação de variáveis de ambiente
  - Tratamento de erros do Resend

### Helper Layer
- **`/src/services/email-helpers.ts`**: Funções específicas
  - `sendContactConfirmation()`: Email para usuário
  - `sendContactNotification()`: Email para igreja
  - Validação de email opcional do usuário

### Template Layer
- **`/src/components/email-templates/contact-confirmation.tsx`**: Template para usuário
  - Design responsivo com inline styles
  - Confirmação de inscrição
  - Dados do contato

- **`/src/components/email-templates/contact-notification.tsx`**: Template para igreja
  - Notificação de novo contato
  - Dados completos do formulário

### Integration Layer
- **`/src/actions/create-contact.ts`**: Server Action atualizado
  - Salva no banco de dados
  - Envia emails em paralelo (Promise.all)
  - Tratamento de erros completo

- **`/src/components/contact-form.tsx`**: Formulário atualizado
  - Estado de loading (isSubmitting)
  - Tratamento de erros específicos
  - Feedback visual para usuário

## Variáveis de Ambiente

```env
RESEND_API_KEY="your_resend_api_key"
SMTP_FROM_EMAIL="site@igrejariodevida.com.br"
SMTP_TO_EMAIL="contato@igrejariodevida.com.br"
```

## Fluxo de Execução

1. **Usuário preenche formulário** → Validação Zod
2. **Submit do formulário** → Server Action `createContact()`
3. **Salvar no banco** → Drizzle ORM insere dados
4. **Enviar emails** → Promise.all executa em paralelo:
   - Email de confirmação para usuário (se email fornecido)
   - Email de notificação para igreja
5. **Sucesso** → Redireciona para `/thank-you`
6. **Erro** → Exibe mensagem de erro específica

## Tratamento de Erros

### Validações
- ✅ RESEND_API_KEY configurada
- ✅ SMTP_FROM_EMAIL configurada
- ✅ SMTP_TO_EMAIL configurada
- ✅ Email do usuário opcional (não bloqueia se não fornecido)

### Erros Capturados
- Erro de configuração (variáveis faltando)
- Erro de API do Resend
- Erro de banco de dados
- Erro genérico de servidor

### Feedback ao Usuário
- Mensagem de erro específica exibida no formulário
- Botão desabilitado durante envio
- Texto do botão muda para "Enviando..."
- Não redireciona se houver erro

## Reutilização

### Para criar novo tipo de email:

1. **Criar template** em `/src/components/email-templates/`:
```tsx
interface MyTemplateProps {
  // suas props
}

export function MyTemplate({ ...props }: MyTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* seu conteúdo */}
    </div>
  )
}
```

2. **Criar helper** em `/src/services/email-helpers.ts`:
```ts
export async function sendMyEmail(data: MyData) {
  return await sendEmail({
    to: data.email,
    subject: 'Meu assunto',
    react: MyTemplate(data),
  })
}
```

3. **Usar no Server Action**:
```ts
await sendMyEmail(formData)
```

## Testes Realizados

- ✅ TypeScript compilation (sem erros)
- ✅ Biome linting e formatting (16 arquivos formatados)
- ✅ Next.js build (sucesso)
- ✅ Validação de variáveis de ambiente
- ✅ Estrutura de arquivos criada

## Próximos Passos

1. **Testar envio real de emails** com credenciais válidas do Resend
2. **Adicionar logs** para monitoramento em produção
3. **Criar testes unitários** para funções de email
4. **Adicionar retry logic** para falhas temporárias (opcional)
5. **Implementar fila de emails** para alto volume (futuro)

## Dependências

- `resend@6.5.2` - Cliente oficial do Resend
- `react@19.2.1` - Para templates React
- `zod@4.1.13` - Validação de dados

## Segurança

- ✅ API keys em variáveis de ambiente
- ✅ Validação de entrada com Zod
- ✅ Sanitização de dados no template
- ✅ Tratamento de erros sem expor detalhes internos
