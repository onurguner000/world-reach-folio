import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WorkDefinition } from '@/components/WorkDefinition';
import { Profile } from '@/components/Profile';
import { Timeline } from '@/components/Timeline';
import { Services } from '@/components/Services';
import { ServicesDetailed } from '@/components/ServicesDetailed';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { detectUserLanguage, saveLanguagePreference, SUPPORTED_LANGUAGES } from '@/utils/languageDetection';

const Index = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Auto-detect and set user's preferred language
    const initializeLanguage = async () => {
      try {
        const detectedLang = await detectUserLanguage();
        
        // Only change if user hasn't manually selected a language
        if (!localStorage.getItem('preferred-language')) {
          await i18n.changeLanguage(detectedLang);
          saveLanguagePreference(detectedLang);
        } else {
          // Apply saved preference
          const savedLang = localStorage.getItem('preferred-language');
          if (savedLang && savedLang in SUPPORTED_LANGUAGES) {
            await i18n.changeLanguage(savedLang);
            document.documentElement.dir = SUPPORTED_LANGUAGES[savedLang as keyof typeof SUPPORTED_LANGUAGES].dir;
            document.documentElement.lang = savedLang;
          }
        }
      } catch (error) {
        console.error('Language initialization failed:', error);
        // Fallback to English
        await i18n.changeLanguage('en');
      }
    };

    initializeLanguage();
  }, [i18n]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WorkDefinition />
      <Profile />
      <Timeline />
      <Services />
      <ServicesDetailed />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
