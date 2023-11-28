import type { Metadata } from 'next'
import './styles/globals.css'

export const metadata: Metadata = {
  title: 'FLL 2023',
  description: "App creata per l'Innovation Project della FLL 2023.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
