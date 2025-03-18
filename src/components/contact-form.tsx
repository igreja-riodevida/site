'use client'

import { createContact } from '@/app/actions/create-contact'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from './ui/button'
import { Input } from './ui/input'

const formSchema = z.object({
  id: z.string(),
  name: z
    .string({ message: 'Campo obrigatório' })
    .min(3, { message: 'Nome deve ter pelo menos 3 letras' }),
  email: z
    .string()
    .nullable()
    .or(z.string().email({ message: 'E-mail inválido' })),
  phone: z.string({ message: 'Campo obrigatório' }),
})

export type FormSchemaType = z.infer<typeof formSchema>

export function ContactForm() {
  const [error, setError] = useState('')
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(data: FormSchemaType) {
    try {
      createContact(data)
      router.push('/thank-you')
    } catch (error) {
      setError('Algo errado no servidor. Tente novamente mais tarde')
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative z-10 w-full space-y-2 bg-black/20 p-4 text-foreground lg:w-lg lg:p-6"
    >
      <p className="font-gotu text-2xl text-background">
        Venha viver uma experiência transformadora!
      </p>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Input type="text" className="sr-only" {...register('id')} />
      <Input
        className="h-10 rounded-none bg-background"
        placeholder="Seu nome"
        {...register('name')}
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}
      <Input
        className="h-10 rounded-none bg-background"
        type="email"
        placeholder="Digite seu melhor email"
        {...register('email')}
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <Input
        className="h-10 rounded-none bg-background"
        type="tel"
        placeholder="Digite seu telefone"
        {...register('phone')}
      />
      {errors.phone && (
        <p className="text-red-500 text-sm">{errors.phone.message}</p>
      )}

      <Button
        type="submit"
        className="mt-4 flex h-11 w-full cursor-pointer rounded-none bg-blue-500 uppercase hover:bg-blue-500/90"
      >
        Garantir vaga
      </Button>
    </form>
  )
}
