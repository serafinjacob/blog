import { lusitana} from "@/app/ui/fonts";
import Image from 'next/image'
import imagewrapper from '@/styles/Image.module.css'

const introductionArray = [
    "Hi, I'm Jacob.",
    "I'm an aspiring software developer with a passion for learning and creating.",
    "Welcome to my website. This is a brief introduction to who I am, some of my skills and a place to showcase some of the cool stuff I've worked on."
]

export default function Home() {
  return (
        <div className="flex flex-col justify-center text-center">
            <h1 className="text-6xl font-bold pt-10">
                {introductionArray[0]}
            </h1>
            <h2 className="mt-3 text-2xl p-5">
                {introductionArray[1]}
            </h2>
            <p className="p-5 text-lg">
                {introductionArray[2]}
            </p>
        </div>
  );
}
