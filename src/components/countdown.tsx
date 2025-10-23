'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
	days: number
	hours: number
	minutes: number
	seconds: number
}

export function Countdown() {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	useEffect(() => {
		const targetDate = new Date('2025-12-01T00:00:00').getTime()

		const timer = setInterval(() => {
			const now = new Date().getTime()
			const difference = targetDate - now

			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor(
						(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
					),
					minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
					seconds: Math.floor((difference % (1000 * 60)) / 1000),
				})
			} else {
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
			}
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return (
		<div className="flex gap-4 text-center text-primary">
			<div className="flex flex-col">
				<span className="font-bold text-4xl lg:text-6xl">{timeLeft.days}</span>
				<span className="text-sm uppercase tracking-wider">Dias</span>
			</div>
			<div className="flex flex-col">
				<span className="font-bold text-4xl lg:text-6xl">{timeLeft.hours}</span>
				<span className="text-sm uppercase tracking-wider">Horas</span>
			</div>
			<div className="flex flex-col">
				<span className="font-bold text-4xl lg:text-6xl">
					{timeLeft.minutes}
				</span>
				<span className="text-sm uppercase tracking-wider">Min</span>
			</div>
			<div className="flex flex-col">
				<span className="font-bold text-4xl lg:text-6xl">
					{timeLeft.seconds}
				</span>
				<span className="text-sm uppercase tracking-wider">Seg</span>
			</div>
		</div>
	)
}
