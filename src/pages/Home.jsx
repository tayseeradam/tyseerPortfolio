import AboutMe from "../sections/AboutMe";
import Projects from "../sections/Projects";
import ContactMe from "../sections/ContactMe";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";

const Home = () => {
  return (
    <main  className="">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      
    </main>
  );
};

export default Home;
