import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Navigation } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationModal = ({ isOpen, onClose }: LocationModalProps) => {
  const { t } = useTranslation();
  
  // Coordinates for Ankara, Turkey (Çankaya)
  const location = {
    lat: 39.8997,
    lng: 32.8627,
    name: 'Çankaya, Ankara, Turkey',
    address: 'Daire No: 19, Blok No: 159 C, Çınar Sitesi, Turan Güneş Bulvarı, Dumlupınar Mah., 06550 Çankaya, Ankara, Türkiye'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-4xl"
              >
                <Card className="relative bg-card border-2 border-border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
                  {/* Close Button - Sticky */}
                  <button
                    onClick={onClose}
                    className="sticky top-4 float-right z-50 mr-4 mt-4 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:border-gold hover:bg-gold/10 transition-all group shadow-lg"
                  >
                    <X className="w-5 h-5 text-foreground group-hover:text-gold transition-colors" />
                  </button>

                  {/* Header */}
                  <div className="relative p-6 bg-gradient-to-br from-gold/20 to-primary/20 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center shadow-lg">
                        <MapPin className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold text-foreground">
                          {t('locationModal.title')}
                        </h2>
                        <p className="text-muted-foreground">
                          {location.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Map Container */}
                  <div className="relative h-[500px] bg-secondary/20">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.1!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0x28b631f89e72b2d3!2sTuran%20G%C3%BCne%C5%9F%20Blv.%2C%20Dumlup%C4%B1nar%2C%20%C3%87ankaya%2FAn kara!5e0!3m2!1str!2str!4v1699999999999!5m2!1str!2str`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Footer Actions */}
                  <div className="p-6 border-t border-border bg-secondary/10">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.a
                        href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 px-6 py-3 rounded-xl bg-gold text-gold-foreground font-semibold shadow-lg hover:shadow-gold transition-all flex items-center justify-center gap-2"
                      >
                        <Navigation className="w-4 h-4" />
                        {t('locationModal.openInGoogle')}
                      </motion.a>
                      <motion.a
                        href={`https://maps.apple.com/?q=${location.lat},${location.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 px-6 py-3 rounded-xl bg-secondary text-foreground font-semibold border-2 border-border hover:border-gold transition-all flex items-center justify-center gap-2"
                      >
                        <MapPin className="w-4 h-4" />
                        {t('locationModal.openInApple')}
                      </motion.a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
