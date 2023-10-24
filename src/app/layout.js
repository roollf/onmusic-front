import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Inter } from 'next/font/google';
import { HeaderGenerator, FooterGenerator } from './utils';
import { AppWrapper } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderGenerator />
          <AppWrapper>
            {children}
          </AppWrapper>
        <FooterGenerator />
      </body>
    </html>
  )
}