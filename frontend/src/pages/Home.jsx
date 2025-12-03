import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
