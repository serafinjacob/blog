'use client'
import React, { useState } from 'react'
import Head from 'next/head'
import SideNavBar from './SideNavBar';
import MenuBarMobile from './MenuBarMobile';

// https://medium.com/designly/create-a-responsive-animated-sidebar-using-react-next-js-and-tailwind-css-bd5a0f42f103

export default function NavBarLayout({ pageTitle, children }) {
    // Concatenate page title (if exists) to site title
    let titleConcat = "Jacob Serafin";
    if (pageTitle) titleConcat = pageTitle + " | " + titleConcat;

    // Mobile sidebar visibility state
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <Head>
                <title>{titleConcat}</title>
            </Head>
            <div className="min-h-screen">
                <div className="flex">
                    <MenuBarMobile setter={setShowSidebar} />
                    <SideNavBar show={showSidebar} setter={setShowSidebar} />
                    <div className="flex flex-col flex-grow min-h-screen">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}