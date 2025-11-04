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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Enhanced World Map Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            {/* Global Trade Routes - Subtle and elegant */}
            {/* Asia to Europe Route */}
            <path 
              d="M900,300 Q750,280 600,300 Q450,320 300,300" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none" 
              className="animate-pulse" 
              strokeDasharray="5,5"
            />
            {/* Americas Route */}
            <path 
              d="M150,400 Q200,380 250,400 Q300,420 350,400" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none" 
              className="animate-pulse" 
              style={{ animationDelay: '0.7s' }}
              strokeDasharray="5,5"
            />
            {/* Middle East to Asia */}
            <path 
              d="M500,350 Q650,330 800,350 Q950,370 1100,350" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none" 
              className="animate-pulse" 
              style={{ animationDelay: '1.4s' }}
              strokeDasharray="5,5"
            />
            {/* Europe to Americas */}
            <path 
              d="M300,250 Q450,230 600,250 Q750,270 900,250" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none" 
              className="animate-pulse" 
              style={{ animationDelay: '2.1s' }}
              strokeDasharray="5,5"
            />
            {/* Trade Hubs - Small circles representing major trade centers */}
            <circle cx="300" cy="300" r="3" fill="currentColor" className="animate-pulse" opacity="0.6" />
            <circle cx="600" cy="300" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }} opacity="0.6" />
            <circle cx="900" cy="300" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1s' }} opacity="0.6" />
            <circle cx="450" cy="400" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.5s' }} opacity="0.6" />
            <circle cx="750" cy="350" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: '2s' }} opacity="0.6" />
          </svg>
        </div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="mb-8 sm:mb-12 flex justify-center"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-gold/50 shadow-gold">
              <img 
                src="/55.jpg" 
                alt="Onur Güner" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              type: "spring",
              stiffness: 80
            }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-navy bg-clip-text text-transparent"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="text-xl sm:text-2xl font-medium text-gold mb-6"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 1,
              type: "spring",
              stiffness: 100
            }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.2,
              type: "spring",
              stiffness: 100
            }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('about')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
              >
                {t('hero.viewPortfolio')}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="gold"
                onClick={() => scrollToSection('contact')}
              >
                {t('hero.requestConsultancy')}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('pricing')}
                className="border-gold text-gold hover:bg-gold/10"
              >
                {t('hero.customPricing')}
              </Button>
            </motion.div>
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
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-3 rounded-full bg-card border border-border hover:border-gold hover:shadow-gold transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:onurguner1@hotmail.com"
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
              transition={{ 
                scale: { type: "spring", stiffness: 400, damping: 15 },
                rotate: { duration: 0.5, ease: "easeInOut" }
              }}
              className="p-3 rounded-full bg-card border-2 border-border hover:border-gold hover:shadow-gold hover:bg-gold/10 transition-all duration-300 relative group"
            >
              <Mail className="w-6 h-6 text-foreground group-hover:text-gold transition-colors" />
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-yellow-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>
            <motion.a
              href="tel:+905054569021"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
