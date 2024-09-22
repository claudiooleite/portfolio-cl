import NavBar from "@/components/NavBar";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import FeedbackForm from "@/components/Form";

export default function Home() {
  return (
    <div className="">
      <header className="flex justify-end">
        <NavBar />
      </header>
      <main className="">
        <section>
          <Landing />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <FeedbackForm />
        </section>
      </main>
    </div>
  );
}
