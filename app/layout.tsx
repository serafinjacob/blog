import type { Metadata } from 'next'
import './globals.css'
import NavBarLayout from '@/components/Layout/index.js'

import imagewrapper from "@/styles/Image.module.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Jacob Serafin',
  description: 'Showcasing my work and projects',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
    <html lang="en">
        <body className={'${inter.className} antialiased h-screen'}>
            <div className="flex-grow flex flex-row">
                <div className="w-full flex-grow md:w-64 ">
                    <NavBarLayout />
                </div>

                <main className="flex-col z-50">
                    {children}
                </main>

                <div>
                    <div className={imagewrapper.featuredImageWrapper}></div>

                    <Image
                        src="/images/me.png"
                        alt="Me in Banff, Alberta - Big Beehive Hike, 2022."
                        fill
                        objectFit="cover"
                        priority
                    />
                </div>
            </div>
        </body>
    </html>
  )
}
