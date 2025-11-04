import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileBox, TrendingUp, Search, FileCheck, DollarSign, Users } from 'lucide-react';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    { key: 'import', icon: FileBox, gradient: 'from-blue-500 to-cyan-500' },
    { key: 'export', icon: TrendingUp, gradient: 'from-purple-500 to-pink-500' },
    { key: 'supplier', icon: Search, gradient: 'from-green-500 to-emerald-500' },
    { key: 'customs', icon: FileCheck, gradient: 'from-orange-500 to-red-500' },
    { key: 'pricing', icon: DollarSign, gradient: 'from-gold to-yellow-500' },
    { key: 'networking', icon: Users, gradient: 'from-teal-500 to-cyan-500' },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 bg-gradient-navy bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.tagline')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-card rounded-3xl p-8 shadow-elegant border border-border h-full hover:shadow-gold transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${service.gradient} 
                    opacity-0 group-hover:opacity-10 transition-opacity duration-300
                  `} />

                  <div className="relative z-10">
                    <div className={`
                      w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient}
                      flex items-center justify-center mb-6
                      shadow-gold group-hover:scale-110 transition-transform duration-300
                    `}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                      {t(`services.list.${service.key}.title`)}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {t(`services.list.${service.key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
