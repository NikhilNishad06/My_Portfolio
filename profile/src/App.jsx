import { useState } from 'react';
import Preloader from './components/Preloader';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Services from './components/Services';
import WhyMe from './components/WhyMe';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <SpaceBackground />
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Services />
        {/* <WhyMe /> */}
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

