import Image from "next/image";
import ImageWrapper from '/styles/Image.module.css'

export default function Page() {
    return (
        <div>
            <div className="m-[50px] justify-center text-center">
                <h1 className="text-5xl font-bold pb-3">
                    University of Guelph
                </h1>
                <h2 className="text-2xl">
                    Bachelor of Computing, Honours
                </h2>
                <h2 className="text-xl">
                    Area of Focus in Statistics
                </h2>

                <p className="italic pt-10">
                    Throughout my time at the University of Guelph I have gained a wide variety of knowledge in the field of computing.
                    In addition to learning the technical computer science concepts I had various opportunities to practice applying the concepts I learned in various environments.
                    I have learned about the software development life cycle, the importance of testing and documentation, and how to
                    work in a team environment. I took special interest in courses dealing with data. Data is incredibly important to use to make informed decisions.
                    I practiced these skills in my courses and my personal projects.
                </p>

                <div>
                    <p className={"pt-10"}>Courses</p>
                </div>
            </div>
        </div>
    );
}