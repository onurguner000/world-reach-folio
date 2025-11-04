import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const languages = [
  { code: 'tr', flag: '🇹🇷', name: 'Türkçe', label: 'TR' },
  { code: 'en', flag: '🇬🇧', name: 'English', label: 'GB' },
  { code: 'zh', flag: '🇨🇳', name: '中文', label: 'CN' },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-1 sm:gap-2">
      {languages.map((lang) => (
        <motion.div
          key={lang.code}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={i18n.language === lang.code ? 'default' : 'outline'}
            size="sm"
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`
              px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium transition-all duration-300 min-w-[40px] sm:min-w-[48px]
              ${i18n.language === lang.code 
                ? 'bg-primary text-primary-foreground shadow-elegant' 
                : 'bg-card hover:bg-secondary border-border'
              }
            `}
            title={lang.name}
          >
            {lang.label}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};
