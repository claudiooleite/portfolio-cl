import NavBar from "@/components/NavBar";
import Landing from "@/components/Landing";

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
      </main>
    </div>
  );
}
