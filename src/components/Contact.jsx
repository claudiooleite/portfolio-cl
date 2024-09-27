import FeedbackForm from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <div
            id="contact"
            className="p-5 pt-7">
            <div className="flex items-center gap-2  mb-3">
                <h1 className="text-3xl">Contact</h1>
                <div className="w-2/4 h-0.5 bg-gradient-to-r from-coral"></div>
            </div>
            <h2 className="font-medium leading-7 mb-3">Have a project in mind or just want to say hello? I&apos;d love to hear from you. Let&apos;s connect and bring your ideas to life!</h2>
            <div className="flex flex-wrap items-center gap-3 py-2 mb-2">
                <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ color: '#4f5d75ff' }} />

                <h2 className="font-semibold text-xl">claudio.leite@hotmail.com</h2>

            </div>

            <FeedbackForm />
        </div>

    )
}

export default Contact;