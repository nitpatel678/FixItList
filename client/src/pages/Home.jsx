import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatWeOffer from '../components/WhatWeOffer';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';

export default  function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeOffer />
      <TechStack />
      <Footer />
    </>
  );
}
