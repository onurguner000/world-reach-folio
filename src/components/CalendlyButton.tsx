/**
 * CalendlyButton Component
 * Opens a popup dialog with Calendly inline embed
 * Includes focus trap, mobile responsiveness, and booking confirmation toast
 */

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import { getCalendlyEmbedUrl } from '@/constants/calendly';

interface CalendlyButtonProps {
  variant?: 'default' | 'gold' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children?: React.ReactNode;
}

export const CalendlyButton = ({ 
  variant = 'gold', 
  size = 'default',
  className = '',
  children 
}: CalendlyButtonProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for Calendly events via postMessage
    const handleMessage = (e: MessageEvent) => {
      if (e.origin === 'https://calendly.com' && e.data.event === 'calendly.event_scheduled') {
        toast.success(t('calendly.bookingConfirmed'), {
          description: t('calendly.bookingConfirmedDesc'),
          duration: 5000,
        });
        setIsOpen(false);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [t]);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setIsLoading(false);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => setIsOpen(true)}
        className={className}
      >
        <Calendar className="w-4 h-4 mr-2" />
        {children || t('calendly.bookCall')}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          className="!max-w-[98vw] sm:!max-w-[95vw] lg:!max-w-[92vw] xl:!max-w-[88vw] 2xl:!max-w-7xl !h-[98vh] sm:!h-[95vh] !p-0 !overflow-hidden !flex !flex-col !gap-0 !rounded-lg sm:!rounded-xl"
          style={{ maxWidth: '98vw', height: '98vh' }}
        >
          {/* Custom Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-3 top-3 sm:right-4 sm:top-4 z-50 rounded-full p-2 bg-background/80 backdrop-blur-sm border border-border hover:bg-accent hover:border-gold transition-all duration-200 shadow-lg"
            aria-label="Close"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <DialogHeader className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2 border-b border-border flex-shrink-0">
            <DialogTitle className="text-base sm:text-lg font-bold line-clamp-1 pr-10 sm:pr-12">
              {t('calendly.scheduleConsultation')}
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm line-clamp-1 hidden sm:block">
              {t('calendly.scheduleDescription')}
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-hidden relative min-h-0">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm z-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-gold mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">{t('calendly.loading')}</p>
                </div>
              </div>
            )}
            
            <div 
              className="calendly-inline-widget w-full h-full"
              data-url={getCalendlyEmbedUrl()}
              style={{ width: '100%', height: '100%', minHeight: '100%' }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
