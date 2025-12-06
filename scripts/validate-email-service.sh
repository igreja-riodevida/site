#!/bin/bash

# Script de validação do serviço de email

echo "🔍 Validando implementação do serviço de email..."
echo ""

# Verificar variáveis de ambiente
echo "✓ Verificando variáveis de ambiente..."
if grep -q "SMTP_FROM_EMAIL" .env && grep -q "SMTP_TO_EMAIL" .env; then
  echo "  ✅ Variáveis de ambiente configuradas"
else
  echo "  ❌ Variáveis de ambiente faltando"
  exit 1
fi

# Verificar arquivos criados
echo ""
echo "✓ Verificando arquivos criados..."

files=(
  "src/services/resend.service.ts"
  "src/services/email-helpers.ts"
  "src/components/email-templates/contact-confirmation.tsx"
  "src/components/email-templates/contact-notification.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✅ $file"
  else
    echo "  ❌ $file não encontrado"
    exit 1
  fi
done

# Verificar TypeScript
echo ""
echo "✓ Verificando TypeScript..."
if npx tsc --noEmit > /dev/null 2>&1; then
  echo "  ✅ Sem erros de TypeScript"
else
  echo "  ❌ Erros de TypeScript encontrados"
  exit 1
fi

# Verificar Biome
echo ""
echo "✓ Verificando formatação..."
if pnpm biome:check > /dev/null 2>&1; then
  echo "  ✅ Código formatado corretamente"
else
  echo "  ❌ Problemas de formatação"
  exit 1
fi

echo ""
echo "🎉 Todas as validações passaram!"
echo ""
echo "📝 Próximos passos:"
echo "  1. Configure as variáveis de ambiente no .env"
echo "  2. Teste o formulário em desenvolvimento: pnpm dev"
echo "  3. Verifique os emails enviados no dashboard do Resend"
