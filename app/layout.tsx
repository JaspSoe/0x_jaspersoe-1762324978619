import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SolanaBot - AI-Powered dApp Generator',
  description: 'Create and deploy Solana dApps instantly with AI commands',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}