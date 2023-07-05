import Player from '@/components/Player'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Casa De Oración Radio Online',
  description: 'Escucha música cristiana y todos nuestros mensajes',
  manifest: '/manifest.json'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {Player}
        {children}
      </body>
    </html>
  )
}
