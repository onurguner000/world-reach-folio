import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, Globe, MapPin } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.experience'), id: 'experience' },
    { label: t('nav.pricing'), id: 'pricing' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 py-12 sm:py-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <img 
                src="/19.png" 
                alt="Onur Güner Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-primary-foreground/70">Çankaya, Ankara, Türkiye</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-display text-lg font-semibold text-gold">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-display text-lg font-semibold text-gold">
              {t('footer.contactInfo')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+905054569021"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-all duration-300 text-sm group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/10 group-hover:bg-gold/20 flex items-center justify-center transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+90 505 456 9021</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:onurguner1@hotmail.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-all duration-300 text-sm group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/10 group-hover:bg-gold/20 flex items-center justify-center transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="break-all">onurguner1@hotmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/onur-güner-2b59397a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-all duration-300 text-sm group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/10 group-hover:bg-gold/20 flex items-center justify-center transition-all">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span>{t('contact.info.linkedin')}</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Language & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-display text-lg font-semibold text-gold flex items-center gap-2 mb-3">
              <Globe className="w-5 h-5" />
              {t('footer.language')}
            </h3>
            <div className="[&_button]:text-primary-foreground">
              <LanguageSwitcher />
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3 text-primary-foreground/90">{t('footer.connect')}</h4>
              <div className="flex gap-3">
                <motion.a
                  href="https://linkedin.com/in/onur-güner-2b59397a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-gold"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:onurguner1@hotmail.com"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-gold"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="tel:+905054569021"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-gold"
                >
                  <Phone className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-primary-foreground/20 py-6"
        >
          <div className="flex justify-center items-center text-sm">
            <div className="text-primary-foreground/70 text-center">
              <p>{t('footer.copyright')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};