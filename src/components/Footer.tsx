import { useTranslation } from 'react-i18next';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="font-display text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
            OG
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/onur-güner-2b59397a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:onurguner1@hotmail.com"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+905054569021"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Copyright */}
          <div className="text-center text-sm text-primary-foreground/70">
            <p className="mb-1">{t('footer.copyright')}</p>
            <p>{t('footer.poweredBy')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
