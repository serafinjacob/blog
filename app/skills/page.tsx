const programmingExperience
    = "Python, C, Java, HTML, CSS, JavaScript"
const databaseExperience
    = "PostgreSQL, SQLite"
const softwareExperience
    = "Linux, Windows, Git, Visual Paradigm, Visual Studio Code, PyCharm, CLion, Intellij"
const otherExperience
    = "Teamwork, Communication, Problem-Solving, Time Management, Organization"
export default function Page() {
    return (
        <div className="text-left">
            <h1 className="text-4xl font-bold pt-10">
                Programming Experience
            </h1>
            <h2 className="mt-3 text-2xl p-3 font-bold">
                {programmingExperience}
            </h2>

            <h1 className="text-4xl font-bold">
                Database Experience
            </h1>
            <h2 className="mt-3 text-2xl p-3 font-bold">
                {databaseExperience}
            </h2>

            <h1 className="text-4xl font-bold">
                Software Experience
            </h1>
            <h2 className="mt-3 text-2xl p-3 font-bold">
                {softwareExperience}
            </h2>

            <h1 className="text-4xl font-bold">
                Other Skills
            </h1>
            <h2 className="mt-3 text-2xl p-3 font-bold">
                {otherExperience}
            </h2>
        </div>
    );
}