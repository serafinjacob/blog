'use client'
import imagewrapper from "@/styles/Image.module.css";
import Image from "next/image";
import React, { useState, useEffect } from 'react';

const FadingImage = () => {
    const [shouldHide, setShouldHide] = useState(false);

    useEffect(() => {
        // Add your logic here to determine when to hide the image
        // For example, you could use a timer to hide it after a certain duration
        const timer = setTimeout(() => {
            setShouldHide(true);
        }, 3000); // Hide the image after 3 seconds (adjust as needed)

        // Clear the timer on component unmount or when the logic changes
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className={`md:overflow-hidden ${shouldHide ? 'hidden' : ''}`}>
            <div className={imagewrapper.featuredImageWrapper}></div>

            <Image
                src="/images/me.png"
                alt="Me in Banff, Alberta - Big Beehive Hike, 2022."
                fill
                objectFit="cover"
                priority
                className="hidden md:block"
            />
        </div>
    );
};

export default FadingImage;