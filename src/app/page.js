import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <ScrollButton />
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
            <Contact />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </ChakraProvider>
    </>
  );
}
