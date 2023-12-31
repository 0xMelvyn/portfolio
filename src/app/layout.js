import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "CV de Melvyn Hoarau",
  description: 'Vous cherchez un site internet pour votre entreprises ? Vous êtes au bon endroit !',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-gray-900' lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
