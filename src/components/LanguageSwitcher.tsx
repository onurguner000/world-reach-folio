import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const languages = [
  { code: 'tr', flag: '🇹🇷', name: 'Türkçe' },
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'zh', flag: '🇨🇳', name: '中文' },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <motion.div
          key={lang.code}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={i18n.language === lang.code ? 'default' : 'outline'}
            size="sm"
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`
              font-medium transition-all duration-300
              ${i18n.language === lang.code 
                ? 'bg-primary text-primary-foreground shadow-elegant' 
                : 'bg-card hover:bg-secondary border-border'
              }
            `}
            title={lang.name}
          >
            <span className="text-lg">{lang.flag}</span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
};
