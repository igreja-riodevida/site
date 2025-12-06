'use client'

import { useEffect, useState } from 'react'

import { ContentContainer } from '../ui/content-container'

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 43,
    seconds: 48,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes--
          } else {
            minutes = 59
            if (hours > 0) {
              hours--
            } else {
              hours = 23
              if (days > 0) {
                days--
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-[#333333] py-8">
      <ContentContainer>
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-white/80 text-xs tracking-widest">
            PRÓXIMO CULTO
          </p>
          <div className="flex justify-center gap-6">
            <TimeUnit value={timeLeft.days} label="DIAS" />
            <TimeUnit value={timeLeft.hours} label="HORAS" />
            <TimeUnit value={timeLeft.minutes} label="MIN" />
            <TimeUnit value={timeLeft.seconds} label="SEG" />
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="font-bold text-3xl text-white md:text-4xl">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="mt-1 text-[10px] text-white/60 tracking-wider">
        {label}
      </div>
    </div>
  )
}
