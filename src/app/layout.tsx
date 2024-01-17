import type { Metadata } from 'next'
import './globals.css'
import WalletProvider from '@/providers/WalletProvider'
import Header from '@/components/common/Header'

export const metadata: Metadata = {
  title: 'Jayden Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#EDDFD7] m-4 p-4 border-[1px] border-gray-900">
        <WalletProvider>
          <Header/>
          {children}
        </WalletProvider>
      </body>
    </html>
  )
}
