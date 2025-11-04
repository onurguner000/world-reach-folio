import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Check, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface PricingDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  planKey: 'starter' | 'business' | 'enterprise';
}

export const PricingDetailModal = ({ isOpen, onClose, planKey }: PricingDetailModalProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      plan: planKey,
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      productType: formData.get('productType'),
      targetCountries: formData.get('targetCountries'),
      budget: formData.get('budget'),
      message: formData.get('message'),
    };

    // Create email body
    const emailSubject = `🎯 New Partnership Request - ${t(`pricing.commission.${planKey}.name`)}`;
    const emailBody = `
╔════════════════════════════════════════════════════════════╗
║        NEW PARTNERSHIP REQUEST / YENİ ORTAKLIK TALEBİ       ║
╚════════════════════════════════════════════════════════════╝

📋 PLAN DETAILS / PLAN DETAYLARI
─────────────────────────────────────────────────────────────
Plan Type: ${t(`pricing.commission.${planKey}.name`)}
Commission Rate: ${t(`pricing.commission.${planKey}.rate`)}

👤 CLIENT INFORMATION / MÜŞTERİ BİLGİLERİ
─────────────────────────────────────────────────────────────
Full Name / Ad Soyad: ${data.name}
Email / E-posta: ${data.email}
Company / Şirket: ${data.company || 'Not provided / Belirtilmedi'}
Phone / Telefon: ${data.phone || 'Not provided / Belirtilmedi'}

📦 PROJECT DETAILS / PROJE DETAYLARI
─────────────────────────────────────────────────────────────
Product Type / Ürün Tipi: ${data.productType || 'Not specified / Belirtilmedi'}
Target Countries / Hedef Ülkeler: ${data.targetCountries || 'Not specified / Belirtilmedi'}
Budget / Bütçe: ${data.budget || 'Not specified / Belirtilmedi'}

💬 ADDITIONAL MESSAGE / EK MESAJ
─────────────────────────────────────────────────────────────
${data.message || 'No additional message / Ek mesaj yok'}

─────────────────────────────────────────────────────────────
📅 Request Date / Talep Tarihi: ${new Date().toLocaleString('tr-TR', { 
      dateStyle: 'full', 
      timeStyle: 'short',
      timeZone: 'Europe/Istanbul'
    })}
    `.trim();

    // Open mailto link
    const mailtoLink = `mailto:onurguner1@hotmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // Show success message after a short delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast({
      title: t('pricing.form.successTitle'),
      description: t('pricing.form.successMessage'),
    });

    setIsSubmitting(false);
    onClose();
  };

  const isPopular = planKey === 'business';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[92vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-2 border-gold/30 rounded-3xl">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <DialogTitle className="font-display text-3xl sm:text-4xl bg-gradient-navy bg-clip-text text-transparent">
              {t(`pricing.commission.${planKey}.name`)}
            </DialogTitle>
            {isPopular && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="flex items-center gap-2 bg-gradient-gold text-gold-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-xl shadow-gold/50"
              >
                <Sparkles className="w-4 h-4" />
                {t(`pricing.commission.${planKey}.popular`)}
              </motion.div>
            )}
          </div>
          <div className="flex items-baseline gap-2">
            <div className="text-5xl sm:text-6xl font-bold text-gold">
              {t(`pricing.commission.${planKey}.rate`)}
            </div>
            <span className="text-muted-foreground text-lg">{t('pricing.commission.perTransaction')}</span>
          </div>
          <DialogDescription className="text-base text-muted-foreground leading-relaxed">
            {t(`pricing.commission.${planKey}.description`)}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 my-6 sm:my-8">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-display text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-gold" />
              </div>
              {t('pricing.form.included')}
            </h3>
            <ul className="space-y-3">
              {(t(`pricing.commission.${planKey}.features`, { returnObjects: true }) as string[]).map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-gold/30 hover:bg-secondary/50 transition-all group"
                >
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/30 transition-colors">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-secondary/20 p-6 sm:p-8 rounded-2xl border border-border/50"
          >
            <h3 className="font-display text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-gold" />
              {t('pricing.form.title')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">{t('pricing.form.name')}</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="mt-1"
                  placeholder={t('pricing.form.namePlaceholder')}
                />
              </div>

              <div>
                <Label htmlFor="email">{t('pricing.form.email')}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1"
                  placeholder={t('pricing.form.emailPlaceholder')}
                />
              </div>

              <div>
                <Label htmlFor="company">{t('pricing.form.company')}</Label>
                <Input
                  id="company"
                  name="company"
                  className="mt-1"
                  placeholder={t('pricing.form.companyPlaceholder')}
                />
              </div>

              <div>
                <Label htmlFor="phone">{t('pricing.form.phone')}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1"
                  placeholder={t('pricing.form.phonePlaceholder')}
                />
              </div>

              <div>
                <Label htmlFor="productType">{t('pricing.form.productType')}</Label>
                <Input
                  id="productType"
                  name="productType"
                  className="mt-1"
                  placeholder={t('pricing.form.productTypePlaceholder')}
                />
              </div>

              <div>
                <Label htmlFor="targetCountries">{t('pricing.form.targetCountries')}</Label>
                <Input
                  id="targetCountries"
                  name="targetCountries"
                  className="mt-1"
                  placeholder={t('pricing.form.targetCountriesPlaceholder')}
                />
              </div>

              <div>
                <Label htmlFor="budget">{t('pricing.form.budget')}</Label>
                <Input
                  id="budget"
                  name="budget"
                  className="mt-1"
                  placeholder={t('pricing.form.budgetPlaceholder')}
                />
              </div>

              <div>
                <Label htmlFor="message">{t('pricing.form.message')}</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1"
                  placeholder={t('pricing.form.messagePlaceholder')}
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className={`w-full ${
                    isPopular
                      ? 'bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-xl shadow-gold/50'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl'
                  } h-12 text-base font-semibold`}
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      {t('pricing.form.sending')}
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      {t('pricing.form.submit')}
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
