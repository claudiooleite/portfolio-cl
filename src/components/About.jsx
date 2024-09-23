import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { personalInfo } from "@/assets/data/personal-info";
import Avatar from "@/components/Avatar";
import DownloadButton from "./DownloadBtn";

function AboutMeCard({ title, description, icon }) {
    return (
        <div className="bg-silver/20 my-4 rounded-md p-2" >
            <h3 className="text-xl" >
                <span className="pr-2">
                    <FontAwesomeIcon icon={icon} style={{ color: '#4f5d75ff' }} />
                </span>
                {title}
            </h3>
            <p>{description}</p>
        </div>
    );
}

function About() {
    const { aboutMe } = personalInfo;


    return (
        <section
            id="about"
            className="p-5 pt-7"
        >
            <div>
                <div className="flex items-center gap-2  mb-3">
                    <h1 className="text-3xl">About Me</h1>
                    <div className="w-2/4 h-0.5 bg-gradient-to-r from-coral"></div>
                </div>
                <Avatar />
                <p className="leading-7">{aboutMe.bio}</p>

            </div>

            <div className="my-3">
                <h2 className="text-2xl mb-3">What I do!</h2>
                {Object.keys(aboutMe.whatIDo).map((key) => (
                    <AboutMeCard
                        key={key}
                        title={aboutMe.whatIDo[key].name}
                        description={aboutMe.whatIDo[key].description}
                        icon={aboutMe.whatIDo[key].icon}
                    />
                ))}
            </div>
            <DownloadButton />
        </section>
    );
}

export default About;
