import imagewrapper from "@/styles/Image.module.css";
import Image from "next/image";

export default function Page() {
    return (
        <div className="text-left">
            <h1 className="text-4xl font-bold pt-10">
                Education
            </h1>
            <h2 className="mt-3 text-2xl pt-3 font-bold">
                University of Guelph
            </h2>
            <h3 className="text-l">
                Bachelor of Computing, Honours
            </h3>

            <h2 className="mt-3 text-2xl pt-3 font-bold whitespace-nowrap">
                Toronto Metropolitan University
            </h2>
            <p className="text-s italic">(formerly Ryerson University)</p>

            <h3 className="text-l">
                Certificate in Business Communications
            </h3>
        </div>
    );
}