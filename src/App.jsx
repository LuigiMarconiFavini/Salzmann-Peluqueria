import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import BeforeAfter from './components/BeforeAfter';
import Testimonial from './components/Testimonial';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <BeforeAfter />
        <Testimonial />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
