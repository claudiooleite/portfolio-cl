import { personalInfo } from "@/assets/data/personal-info";

function Skills() {
    const { resume } = personalInfo

    return (
        <div className="p-5 pt-7">
            <div className="flex items-center gap-2  mb-3">
                <h1 className="text-3xl">Skills</h1>
                <div className="w-2/4 h-0.5 bg-gradient-to-r from-coral"></div>
            </div>
            <div className="flex flex-wrap gap-x-4 ">
                {Object.keys(resume.skills).map((category, index) => (
                    <div key={index} className="flex flex-col w-5/12">
                        <h2 className="text-xl">{category}</h2>
                        <ul >
                            {resume.skills[category].map((skill, i) => (
                                <li key={i} className="bg-silver/20 font-semibold text-sm my-2 rounded-md p-2 w-fit ">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;