import Image from 'next/image'
import ImageWrapper from '@/styles/Image.module.css'

const introductionArray = [
    "Hi, I'm Jacob.",
    "I'm an aspiring software developer with a passion for learning and creating.",
    "Welcome to my website. This is a brief introduction to who I am, some of my skills and a place to showcase some of the cool stuff I've worked on."
]

export default function Home() {
  return (
        <main>
            <div className="flex flex-col justify-center text-center ">
                <p className="text-6xl font-bold pt-20 z-10">
                    {introductionArray[0]}
                </p>
                <p className="mt-3 text-2xl pt-5 pl-10 pr-10 pb-5 z-10">
                    {introductionArray[1]}
                </p>
                <p className="text-lg pt-5 pl-10 pr-10 pb-5 z-10">
                    {introductionArray[2]}
                </p>
            </div>
            <div className={'ImageWrapper.wrap'}>
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
