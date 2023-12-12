'use client'
import React, { useState } from 'react'
import SideNavBar from './SideNavBar';
import MenuBarMobile from './MenuBarMobile';

// https://medium.com/designly/create-a-responsive-animated-sidebar-using-react-next-js-and-tailwind-css-bd5a0f42f103

export default function NavBarLayout() {
    // Mobile sidebar visibility state
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <div className="min-h-screen">
                <div className="flex">
                    <MenuBarMobile setter={setShowSidebar} />
                    <SideNavBar show={showSidebar} setter={setShowSidebar} />
                    <div className="flex flex-col flex-grow min-h-screen">
                    </div>
                </div>
            </div>
        </>
    )
}