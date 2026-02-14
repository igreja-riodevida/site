# Igreja Rio de Vida - Sistema de Gestão

Sistema web completo para gestão da Igreja Rio de Vida (www.igrejariodevida.com.br), desenvolvido com Next.js 16, React 19 e TypeScript.

## 🚀 Funcionalidades Futuras

### Gestão de Membros
- Cadastro completo de membros e visitantes
- Histórico de participação em cultos e eventos
- Controle de batismos e apresentações
- Sistema de grupos e ministérios

### Controle Financeiro
- Gestão de dízimos e ofertas
- Relatórios financeiros detalhados
- Controle de despesas da igreja
- Dashboard financeiro em tempo real

### Agenda Completa
- Calendário de eventos e cultos
- Agendamento de salas e recursos
- Notificações automáticas
- Integração com Google Calendar

### Comunicação
- Sistema de avisos e comunicados
- Envio de emails em massa
- Notificações push
- Chat interno para liderança

### Relatórios e Analytics
- Dashboards interativos
- Relatórios de crescimento
- Métricas de engajamento
- Análises estatísticas

## 🛠️ Tecnologias

- **Framework:** Next.js 16 (App Router)
- **Frontend:** React 19, TypeScript
- **Styling:** TailwindCSS 4, Shadcn/ui
- **Database:** PostgreSQL com Drizzle ORM
- **Email:** Resend
- **Code Quality:** Biome (linting + formatting)
- **Git Hooks:** Lefthook

## 📋 Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm
- PostgreSQL 14+

## 🚀 Desenvolvimento Local

### 1. Clone o repositório
```bash
git clone [repository-url]
cd irv-site
```

### 2. Instale as dependências
```bash
pnpm install
```

### 3. Configure as variáveis de ambiente
```bash
cp .env.example .env
```

Configure as seguintes variáveis no arquivo `.env`:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/irv_db"

# Email (Resend)
RESEND_API_KEY="your_resend_api_key"
SMTP_FROM_EMAIL="site@igrejariodevida.com.br"
SMTP_TO_EMAIL="contato@igrejariodevida.com.br"

# Next.js
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Configure o banco de dados
```bash
# Gerar migrações
pnpm db:generate

# Aplicar migrações
pnpm db:push
```

### 5. Execute o servidor de desenvolvimento
```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor de desenvolvimento
pnpm build            # Build para produção
pnpm start            # Inicia servidor de produção
pnpm lint             # Executa linting

# Code Quality
pnpm biome:check      # Verifica e corrige código
pnpm biome:format     # Formata código
pnpm biome:lint       # Executa linting com Biome

# Database
pnpm db:generate      # Gera migrações
pnpm db:push          # Aplica mudanças no banco
pnpm db:migrate       # Executa migrações
```

## 🚀 Deploy em Produção

### Vercel (Recomendado)
1. Conecte o repositório no Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push na main

### Docker
```bash
# Build da imagem
docker build -t irv-site .

# Execute o container
docker run -p 3000:3000 irv-site
```

### Servidor VPS
```bash
# Build da aplicação
pnpm build

# Inicie com PM2
pm2 start ecosystem.config.js
```

## 🗄️ Estrutura do Projeto

```
src/
├── app/                 # App Router (Next.js 16)
│   ├── (auth)/         # Rotas de autenticação
│   ├── dashboard/      # Dashboard administrativo
│   └── api/            # API Routes
├── components/         # Componentes reutilizáveis
│   ├── ui/            # Componentes base (Shadcn)
│   └── forms/         # Formulários específicos
├── database/          # Schema e configuração do DB
├── lib/               # Utilitários e configurações
└── services/          # Serviços externos (email, etc)
```

## 🔒 Variáveis de Ambiente

### Desenvolvimento
- `DATABASE_URL`: URL de conexão PostgreSQL
- `RESEND_API_KEY`: Chave da API Resend para emails
- `NEXTAUTH_SECRET`: Secret para autenticação
- `NEXTAUTH_URL`: URL base da aplicação

### Produção
Adicione também:
- `NODE_ENV=production`
- URLs de produção para serviços externos

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat(web-membros): adiciona cadastro de membros'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Padrões de Commit

Utilizamos Conventional Commits:
- `feat(web-membros): nova funcionalidade`
- `fix(api-dizimos): correção de bug`
- `docs: atualização de documentação`
- `style: formatação de código`

## 📞 Suporte

Para dúvidas ou suporte, entre em contato com a equipe de desenvolvimento da Igreja Rio de Vida.

---

**Igreja Rio de Vida** - Transformando vidas através da tecnologia 🙏