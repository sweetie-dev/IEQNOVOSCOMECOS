import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <Hero />
      <Services />
      <Events />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
