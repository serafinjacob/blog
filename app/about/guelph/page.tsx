import ExpandButton from "@/components/ExpandButton";

const firstYear = [
    'CIS*1250 - Software Design I, ',
    'CIS*1500 - Introduction to Programming, ',
    'PHIL*1000 - Classic Thinkers, ',
    'MATH*1200 - Calculus I, ',
    'MCS*2100 - Personal Financial Management, ',

    'CIS*2500 - Intermediate Programming, ',
    'MATH*1210 - Calculus II, ',
    'CIS*1910 - Discrete Structures in Computing, ',
    'PHIL*2100 - Critical Thinking, ',
    'PSYC*2650 - Cognitive Psychology, ',
    ];

const secondYear = [
    'CIS*2520 - Data Structures, ',
    'Cis*2030 - Structure and Application of Microcomputers, ',
    'CIS*2430 - Object-Oriented Programming, ',
    'CIS*3250 - Software Design III, ',
    'STAT*2040 - Statistics I, ',

    'CIS*2750 - Software Systems Development and Integration, ',
    'CIS*3110 - Operating Systems, ',
    'CIS*3490 - Analysis and Design of Computer Algorithms, ',
    'STAT*2050 - Statistics II, ',
    'MATH*1160 - Linear Algebra I, ',
    ];

const thirdYear = [
    'CIS*3050 - Systems Programming, ',
    'CIS*3530 - Database Systems and Concepts, ',
    'CIS*3750 - Systems Analysis and Design, ',
    'STAT*3100 - Intro Mathematical Statistics, ',
    'STAT*3240 - Applied Regression Analysis, ',

    'CIS*3700 - Intelligent Systems, ',
    'COMP*410 - Software Engineering, ',
    'COMP*347 - Computer Networks, ',
    'COMP*444 - Embedded and Robotic Programming, ',
    'MATH*2130 - Numerical Methods, ',
    ];

const fourthYear = [
    'CIS*3260 - Software Design IV, ',
    'CIS*4150 - Software Reliability and Testing, ',
    'CIS*4300 - Human Computer Interaction, ',

    'CIS*3120 - Digital Systems I, ',
    'CIS*4010 - Cloud Computing, ',
    'CIS*4250 - Software Design V ',
];

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
                    work in a team environment. I practiced these skills in my courses and my personal projects.
                </p>

                <ExpandButton {...{
                    content: [firstYear, secondYear, thirdYear, fourthYear],
                }}
                />

            </div>
        </div>
    );
}