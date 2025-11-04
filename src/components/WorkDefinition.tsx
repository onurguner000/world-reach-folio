import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, CheckCircle, DollarSign, FileText, Truck, Package, HeadphonesIcon } from 'lucide-react';

export const WorkDefinition = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: Search, key: 'research', color: 'text-blue-500' },
    { icon: CheckCircle, key: 'verification', color: 'text-green-500' },
    { icon: DollarSign, key: 'pricing', color: 'text-gold' },
    { icon: FileText, key: 'documentation', color: 'text-purple-500' },
    { icon: Truck, key: 'logistics', color: 'text-orange-500' },
    { icon: Package, key: 'delivery', color: 'text-teal-500' },
    { icon: HeadphonesIcon, key: 'afterSales', color: 'text-pink-500' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 bg-gradient-navy bg-clip-text text-transparent">
            {t('workDef.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('workDef.description')}
          </p>
        </motion.div>

        {/* Workflow Diagram */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold to-primary transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className={`
                    w-20 h-20 rounded-2xl bg-card border-2 border-border
                    flex items-center justify-center mb-4
                    shadow-elegant group-hover:shadow-gold group-hover:border-gold
                    transition-all duration-300
                  `}>
                    <Icon className={`w-10 h-10 ${step.color}`} />
                  </div>
                  <h3 className="font-semibold text-sm leading-tight">
                    {t(`workDef.steps.${step.key}`)}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
