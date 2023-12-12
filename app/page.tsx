import Image from 'next/image'
import imagewrapper from '@/styles/Image.module.css'

const introductionArray = [
    "Hi, I'm Jacob.",
    "I'm an aspiring software developer with a passion for learning and creating.",
    "Welcome to my website. This is a brief introduction to who I am, some of my skills and a place to showcase some of the cool stuff I've worked on."
]

export default function Home() {
  return (
        <main>
            <div className="flex flex-col justify-center text-center ">
                <p className="text-6xl font-bold pt-10 z-10">
                    {introductionArray[0]}
                </p>
                <p className="mt-3 text-2xl p-5 z-10">
                    {introductionArray[1]}
                </p>
                <p className="p-5 text-lg z-10">
                    {introductionArray[2]}
                </p>
            </div>
            <div className="z-0">
                <div className={'imagewrapper.featuredImageWrapper overflow-hidden'}></div>

                <Image
                    src="/images/me.png"
                    alt="Me in Banff, Alberta - Big Beehive Hike, 2022."
                    fill
                    objectFit="cover"
                    priority
                />
            </div>
        </main>
  );
}
