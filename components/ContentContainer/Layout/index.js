'use client'

import React, { useState } from 'react'
import Link from "next/link";
import {BiSolidHome as HomeIcon} from "react-icons/bi";

import {usePathname} from "next/navigation";
import Image from "next/image";
import ImageWrapper from '/styles/Image.module.css'
import ContentContainerUI from '/components/ContentContainer/UI/ContentContainer.module.css'

export default function ContentContainerLayout({title, description, image, route, icon}) {

    const pathname = usePathname()

    // Define our base class
    const className = "border-[2px] border-white/10 rounded-2xl " +
        "text-white/50 hover:text-white hover:border-white " +
        "hover:transform hover:scale-95 transition-all ease-in-out duration-1000 " +
        "z-40";
    const Item = ({ title, description, image, icon, route }) => {
        return (
            <Link
                href={route}
                className={""}
            >
                <div className={ImageWrapper.wrap}>
                    <Image className={"rounded-t-2xl border-b-[2px] border-white/10"}
                           src={image}
                           alt={title}
                           fill
                           objectFit="cover"
                    />
                </div>

                <p className={ContentContainerUI.title}>
                    {title}
                </p>

                <p className={ContentContainerUI.description}>
                    {description}
                </p>

                <p className="">
                    {icon}
                </p>
            </Link>
        )
    }

    return (
        <>
            <div className={`${className}`}>
                <Item
                    title={title}
                    description={description}
                    image={image}
                    icon={icon}
                    route={route}
                />
            </div>
        </>
    );
}