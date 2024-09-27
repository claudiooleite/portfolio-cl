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
        {/* The Landing section full-width background image */}
        <section>
          <Landing />
        </section>

        {/* Apply max-width to center content */}
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <header>
            <NavBar />
          </header>

          <main>
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
        </div>
        <footer>
          <Footer />
        </footer>
      </ChakraProvider>
    </>
  );
}
