'use client'

import {useState} from "react";
import {MdOutlineExpandMore as Icon} from "react-icons/md";
export default function ExpandButton({content}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const icon = "text-6xl text-white/10 justify-center text-center " +
        "hover:text-white " +
        "hover:transform hover:scale-110 " +
        "transition-all ease-in-out duration-500 p-3";

    function toggle() {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <button onClick={toggle}>
                <div className={`${icon}`}>
                    <Icon/>
                </div>
            </button>
                { isExpanded ? <div>
                    {content}
                </div> : <> </> }
        </>
    );
}
