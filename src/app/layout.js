import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Inter } from 'next/font/google';
import { HeaderGenerator, FooterGenerator } from './utils';
import { AppWrapper } from '@/components'
import { UserProvider } from '@/components/hooks/userContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OnMusic',
  description: 'Music is our culture',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <HeaderGenerator />
          <AppWrapper>
            {children}
          </AppWrapper>
          <FooterGenerator />
        </UserProvider>
      </body>
    </html>
  )
}