/**
 * CalendlyInline Component
 * Full-width Calendly inline embed for dedicated /book route
 * Includes lazy loading and booking confirmation toast
 */

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { getCalendlyEmbedUrl } from '@/constants/calendly';
import { useNavigate } from 'react-router-dom';

export const CalendlyInline = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for Calendly events via postMessage
    const handleMessage = (e: MessageEvent) => {
      if (e.origin === 'https://calendly.com' && e.data.event === 'calendly.event_scheduled') {
        toast.success(t('calendly.bookingConfirmed'), {
          description: t('calendly.bookingConfirmedDesc'),
          duration: 5000,
        });
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [t]);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsLoading(false);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-subtle pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4 hover:bg-secondary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('calendly.backToHome')}
          </Button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-xl bg-gold/10 border border-gold/20">
              <Calendar className="w-6 h-6 text-gold" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-navy bg-clip-text text-transparent">
              {t('calendly.scheduleConsultation')}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {t('calendly.scheduleDescription')}
          </p>
        </motion.div>

        {/* Calendly Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-2xl shadow-elegant border border-border overflow-hidden"
        >
          {isLoading && (
            <div className="flex items-center justify-center h-[700px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4" />
                <p className="text-muted-foreground">{t('calendly.loading')}</p>
              </div>
            </div>
          )}

          <div
            className="calendly-inline-widget"
            data-url={getCalendlyEmbedUrl()}
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>
      </div>
    </section>
  );
};
