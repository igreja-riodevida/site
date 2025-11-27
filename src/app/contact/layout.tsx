export default function ContactLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<h1>Contact Layout</h1>
			{children}
		</div>
	)
}
