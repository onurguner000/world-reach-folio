import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Phone } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* World Map Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            {/* Simplified world map paths */}
            <path d="M200,300 Q400,250 600,300 T1000,300" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M300,400 Q500,350 700,400 T1100,400" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <path d="M100,500 Q300,450 500,500 T900,500" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-gold shadow-gold animate-glow-pulse">
              <div className="w-full h-full bg-gradient-navy flex items-center justify-center">
                <span className="text-6xl font-display text-gold">OG</span>
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-navy bg-clip-text text-transparent"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl font-medium text-gold mb-6"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
            >
              {t('hero.viewPortfolio')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-gold text-gold hover:bg-gold hover:text-gold-foreground"
            >
              {t('hero.requestConsultancy')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('pricing')}
            >
              {t('hero.customPricing')}
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-4 justify-center"
          >
            <motion.a
              href="https://linkedin.com/in/onur-güner-2b59397a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-3 rounded-full bg-card border border-border hover:border-gold hover:shadow-gold transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:onurguner1@hotmail.com"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-3 rounded-full bg-card border border-border hover:border-gold hover:shadow-gold transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="tel:+905054569021"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-3 rounded-full bg-card border border-border hover:border-gold hover:shadow-gold transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
