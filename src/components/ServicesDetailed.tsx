import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Globe, TrendingUp, FileCheck, Package, Shield, Award,
  Users, BarChart3, FileText, Truck, GraduationCap, Target,
  CheckCircle, ArrowRight, Briefcase, DollarSign, Sparkles
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ServiceDetailModal } from './ServiceDetailModal';

export const ServicesDetailed = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (item: any) => {
    const itemData = t(`servicesDetailed.items.${item.key}`, { returnObjects: true }) as any;
    const projects = t(`servicesDetailed.projects.${item.key}`, { returnObjects: true }) as any;
    const stats = getMockStats(item.key);
    
    const serviceDetail = {
      ...item,
      ...itemData,
      items: itemData.services, // Modal'da service.items olarak kullanılıyor
      projects: projects || [],
      stats: stats
    };
    setSelectedService(serviceDetail);
    setIsModalOpen(true);
  };

  const getMockStats = (key: string) => {
    const stats: Record<string, any> = {
      'foreignTrade': [
        { label: t('servicesDetailed.stats.totalProjects'), value: '50+' },
        { label: t('servicesDetailed.stats.yearsExperience'), value: '14+' },
        { label: t('servicesDetailed.stats.successRate'), value: '%98' }
      ],
      'import': [
        { label: t('servicesDetailed.stats.importOperations'), value: '40+' },
        { label: t('servicesDetailed.stats.costSavings'), value: '%25' },
        { label: t('servicesDetailed.stats.successfulDelivery'), value: '%100' }
      ],
      'export': [
        { label: t('servicesDetailed.stats.exports'), value: '525+' },
        { label: t('servicesDetailed.stats.countries'), value: '15+' },
        { label: t('servicesDetailed.stats.revenueIncrease'), value: '€1M+' }
      ]
    };
    return stats[key] || [
      { label: t('servicesDetailed.stats.projects'), value: '10+' },
      { label: t('servicesDetailed.stats.clients'), value: '20+' },
      { label: t('servicesDetailed.stats.satisfaction'), value: '%100' }
    ];
  };

  const bentoItems = [
    {
      key: 'foreignTrade',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      size: 'large'
    },
    {
      key: 'import',
      icon: Package,
      color: 'from-green-500 to-emerald-500',
      size: 'medium'
    },
    {
      key: 'export',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      size: 'medium'
    },
    {
      key: 'operational',
      icon: Briefcase,
      color: 'from-orange-500 to-red-500',
      size: 'small'
    },
    {
      key: 'compliance',
      icon: FileCheck,
      color: 'from-indigo-500 to-blue-500',
      size: 'small'
    },
    {
      key: 'training',
      icon: GraduationCap,
      color: 'from-gold to-yellow-500',
      size: 'medium'
    },
    {
      key: 'support',
      icon: Users,
      color: 'from-teal-500 to-cyan-500',
      size: 'small'
    }
  ];

  // Bento Grid size mapping
  const getSizeClass = (size: string) => {
    switch(size) {
      case 'large': return 'md:col-span-2 md:row-span-2';
      case 'medium': return 'md:col-span-1 md:row-span-2';
      case 'small': return 'md:col-span-1 md:row-span-1';
      default: return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section id="services-detailed" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 bg-gold/10 text-gold border border-gold/20 px-4 py-2 rounded-full"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold text-sm">{t('servicesDetailed.badge')}</span>
          </motion.div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-navy bg-clip-text text-transparent">
            {t('servicesDetailed.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('servicesDetailed.subtitle')}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto auto-rows-[minmax(280px,auto)]">
          {bentoItems.map((item, index) => {
            const Icon = item.icon;
            const sizeClass = getSizeClass(item.size);
            const itemData = t(`servicesDetailed.items.${item.key}`, { returnObjects: true }) as any;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${sizeClass} group`}
              >
                <Card className={`
                  h-full p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-2 border-border
                  hover:border-gold hover:shadow-2xl hover:shadow-gold/20
                  transition-all duration-500 relative overflow-hidden
                  ${item.size === 'large' ? 'justify-center items-center flex flex-col' : ''}
                `}>
                  {/* Animated Gradient Background */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${item.color} 
                    opacity-0 group-hover:opacity-10 transition-all duration-700
                  `} />
                  
                  {/* Floating Icon Effect */}
                  <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Icon className="w-48 h-48 text-foreground" />
                  </div>

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className={`
                          ${item.size === 'large' ? 'w-20 h-20' : 'w-14 h-14'}
                          rounded-2xl bg-gradient-to-br ${item.color}
                          flex items-center justify-center shadow-lg
                          group-hover:scale-110 group-hover:rotate-6
                          transition-all duration-500
                        `}>
                          <Icon className={`${item.size === 'large' ? 'w-10 h-10' : 'w-7 h-7'} text-white`} />
                        </div>
                        
                        {itemData.highlight && (
                          <Badge className={`
                            bg-gradient-to-r ${item.color} text-white border-0 
                            shadow-lg text-xs px-2 py-1
                          `}>
                            {itemData.highlight}
                          </Badge>
                        )}
                      </div>

                      <h3 className={`
                        font-display font-bold text-foreground mb-2
                        ${item.size === 'large' ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}
                      `}>
                        {itemData.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm sm:text-base mb-3">
                        {itemData.description}
                      </p>

                      {/* Stats Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border">
                        <Target className="w-3.5 h-3.5 text-gold" />
                        <span className="text-xs font-semibold text-foreground">{itemData.stats}</span>
                      </div>
                    </div>

                    {/* Service Items */}
                    <ul className="space-y-2.5 flex-grow">
                      {(itemData.services as string[]).map((service, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex items-start gap-2 group/item"
                        >
                          <div className={`
                            mt-1 w-4 h-4 rounded-full bg-gradient-to-br ${item.color}
                            flex items-center justify-center flex-shrink-0
                            group-hover/item:scale-125 transition-transform
                          `}>
                            <CheckCircle className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                            {service}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover Action */}
                    <motion.div
                      className="mt-4 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <button
                        onClick={() => handleServiceClick(item)}
                        className="flex items-center gap-2 text-gold font-semibold text-sm cursor-pointer hover:gap-3 transition-all"
                      >
                        <span>{t('servicesDetailed.viewDetails')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="relative p-8 sm:p-10 bg-gradient-to-br from-gold/10 via-primary/5 to-gold/10 border-2 border-gold/30 overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-2xl shadow-gold/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-display text-2xl sm:text-3xl font-bold mb-2 text-foreground">
                  {t('servicesDetailed.flexiblePricing')}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t('servicesDetailed.flexiblePricingDesc')}
                </p>
              </div>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-gold text-gold-foreground font-semibold shadow-lg hover:shadow-gold transition-all duration-300 whitespace-nowrap inline-block"
              >
                {t('servicesDetailed.getQuote')}
              </motion.a>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </section>
  );
};
