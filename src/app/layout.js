import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Melvyn's Portfolio",
  description: 'My portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-gray-900' lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
