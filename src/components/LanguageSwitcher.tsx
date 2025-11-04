import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Globe, Check } from 'lucide-react';
import { SUPPORTED_LANGUAGES, type SupportedLanguage, saveLanguagePreference } from '@/utils/languageDetection';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: SupportedLanguage) => {
    i18n.changeLanguage(lng);
    saveLanguagePreference(lng);
  };

  const currentLang = SUPPORTED_LANGUAGES[i18n.language as SupportedLanguage] || SUPPORTED_LANGUAGES.en;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="gap-2 font-medium border-border hover:border-gold hover:bg-gold/10 transition-all group"
        >
          <Globe className="w-4 h-4 group-hover:text-gold transition-colors" />
          <span className="hidden sm:inline">{currentLang.nativeName}</span>
          <span className="text-lg">{currentLang.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-card/95 backdrop-blur-xl border-border shadow-xl">
        <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
          Select Language / Dil Seçin
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.values(SUPPORTED_LANGUAGES).map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="flex items-center justify-between gap-3 py-2.5 cursor-pointer hover:bg-gold/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{lang.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium text-foreground">{lang.nativeName}</span>
                <span className="text-xs text-muted-foreground">{lang.name}</span>
              </div>
            </div>
            {i18n.language === lang.code && (
              <Check className="w-4 h-4 text-gold" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
