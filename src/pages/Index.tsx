import { useEffect } from 'react';
import '../i18n/config';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WorkDefinition } from '@/components/WorkDefinition';
import { Profile } from '@/components/Profile';
import { Timeline } from '@/components/Timeline';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WorkDefinition />
      <Profile />
      <Timeline />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
