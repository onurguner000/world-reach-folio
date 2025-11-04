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

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between mb-4">
            <DialogTitle className="font-display text-3xl">
              {t(`pricing.${planKey}.name`)}
            </DialogTitle>
            {isPopular && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2 bg-gradient-gold text-gold-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-gold"
              >
                <Sparkles className="w-4 h-4" />
                {t('pricing.business.popular')}
              </motion.div>
            )}
          </div>
          <div className="text-4xl font-bold text-gold mb-4">
            {t(`pricing.commission.${planKey}.rate`)}
          </div>
          <DialogDescription className="text-base">
            {t(`pricing.commission.${planKey}.description`)}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 my-6">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-gold" />
              {t('pricing.form.included')}
            </h3>
            <ul className="space-y-3">
              {(t(`pricing.commission.${planKey}.features`, { returnObjects: true }) as string[]).map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50"
                >
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-semibold mb-4">
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

              <Button
                type="submit"
                className={`w-full ${
                  isPopular
                    ? 'bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('pricing.form.sending') : t('pricing.form.submit')}
              </Button>
            </form>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
