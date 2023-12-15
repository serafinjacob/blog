import React from "react";
import Link from "next/link";
import ContentContainerUI from "../ui/ContentContainer.module.css";

export default function SkillContainer({title, route, icon}) {
    const className = "max-w-[350px] border-[2px] border-white/10 rounded-2xl " +
        "text-white/50 hover:text-white hover:border-white " +
        "hover:transform hover:scale-95 transition-all ease-in-out duration-1000 " +
        "z-10";

    const Item = ({ title, icon, route }) => {
        return (
            <Link
                href={route}
            >
                <div className={ContentContainerUI.info}>
                    <div>
                        <p className={ContentContainerUI.title}>
                            {title}
                        </p>
                    </div>
                    <div className={ContentContainerUI.icon}>
                        {icon}
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <>
            <div className={`${className}`}>
                <Item
                    title={title}
                    icon={icon}
                    route={route}
                />
            </div>
        </>
    );
}