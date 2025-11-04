import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    { key: 'starter', popular: false },
    { key: 'business', popular: true },
    { key: 'enterprise', popular: false },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 bg-gradient-navy bg-clip-text text-transparent">
            {t('pricing.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-gold text-gold-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-gold">
                    {t('pricing.business.popular')}
                  </span>
                </div>
              )}

              <div className={`
                bg-card rounded-3xl p-8 h-full shadow-elegant border
                ${plan.popular ? 'border-gold shadow-gold' : 'border-border hover:shadow-gold'}
                transition-all duration-300
              `}>
                <h3 className="font-display text-2xl font-bold mb-2">
                  {t(`pricing.${plan.key}.name`)}
                </h3>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gold">
                    {t(`pricing.${plan.key}.price`)}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {(t(`pricing.${plan.key}.features`, { returnObjects: true }) as string[]).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('pricing.customize')}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
