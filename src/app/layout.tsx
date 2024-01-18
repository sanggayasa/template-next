import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    absolute: "",
    default:"Next.js Tutorial - Codeevolution",
    template: "%s | Codeevolution", 
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <header>
          <p>header</p>
        </header> */}
        {children}
        {/* <footer>
          <p>footer</p>
        </footer> */}
      </body>
    </html>
  )
}
