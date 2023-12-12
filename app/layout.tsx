import type { Metadata } from 'next'
import './globals.css'
import NavBarLayout from '@/components/Layout/index.js'

export const metadata: Metadata = {
  title: 'Jacob Serafin',
  description: 'Showcase of my experience, projects and skills.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
    <html lang="en antialiased h-screen">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title></title>
        </head>

        <body>
            <div className={'navigation md:w-64'}>
                <NavBarLayout />
            </div>

            <div>
                {children}
            </div>
        </body>
    </html>
  )
}
