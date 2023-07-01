import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Casa De Oración Radio Online',
  description: 'Escucha música cristiana y todos nuestros mensajes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
