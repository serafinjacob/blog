import type { Metadata } from 'next'
import './globals.css'
import NavBarLayout from '@/components/NavBar/Layout/index.js'

export const metadata: Metadata = {
  title: 'Jacob Serafin',
  description: 'Showcase of my experience, projects and skills.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
    <html lang="en">
        <body className="flex">
            <div className={'md:w-64'}>
                <NavBarLayout />
            </div>

            {children}
        </body>
    </html>
  )
}
