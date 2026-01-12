import MainSec from "./_components/MainSec";
import Quotes from "./_components/Quotes";
import Projects from "./_components/Projects";
import Services from "./_components/Services";
import Skills from "./_components/Skill";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import About from "./_components/About";

function page() {
  return (
    <div className="bg-(--background) md:mx-10 ">
      <section className="pt-24 ">
        <MainSec />
        <Quotes />
      </section>
      <Projects />
      <Services />
      <Skills />
      <About />x
      <Contact />
      <Footer />
    </div>
  );
}

export default page;
