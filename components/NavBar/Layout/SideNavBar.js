import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { BiSolidHome as HomeIcon} from 'react-icons/bi';
import { IoPerson as AboutIcon} from 'react-icons/io5';
import { FaCode as ProjectsIcon} from "react-icons/fa6";
import { FaLightbulb as SkillsIcon} from "react-icons/fa";
import { BsEnvelopeAtFill as ContactIcon} from 'react-icons/bs'


export default function SideNavBar({ show, setter }) {
    const pathname = usePathname()

    // Define our base class
    const className = "bg-gradient-to-r from-black to-transparent/30 w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

    // Clickable menu items
    const MenuItem = ({ icon, name, route }) => {
        // Highlight menu item based on currently displayed route
        const colorClass = pathname === route ? "text-white ease-in-out duration-500" : "text-white/50 hover:text-white ease-in-out duration-500";

        return (
            <Link
                href={route}
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
                className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[20px]">
                    {icon}
                </div>
                <div>
                    {name}
                </div>
            </Link>
        )
    }

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
            onClick={() => {
                setter(oldVal => !oldVal);
            }}
        />
    )

    return (
        <>
            <div className={`${className}${appendClass}`}>
                <div className="flex flex-col">
                    <MenuItem
                        name="Home"
                        route="/"
                        icon={<HomeIcon />}
                    />
                    <MenuItem
                        name="About Me"
                        route="/about"
                        icon={<AboutIcon />}
                    />
                    <MenuItem
                        name="Projects"
                        route="/projects"
                        icon={<ProjectsIcon />}
                    />
                    <MenuItem
                        name="Skills"
                        route="/skills"
                        icon={<SkillsIcon />}
                    />
                    <MenuItem
                        name="Contact"
                        route="/contact"
                        icon={<ContactIcon />}
                    />
                </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}