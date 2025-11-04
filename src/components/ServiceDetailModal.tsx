import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Briefcase, TrendingUp, FileCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

interface Project {
  title: string;
  description: string;
  results: string[];
}

interface ServiceDetail {
  title: string;
  description: string;
  icon: any;
  color: string;
  items: string[];
  projects: Project[];
  stats: {
    label: string;
    value: string;
  }[];
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail | null;
}

export const ServiceDetailModal = ({ isOpen, onClose, service }: ServiceDetailModalProps) => {
  const { t } = useTranslation();
  
  if (!service) return null;

  const Icon = service.icon;

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
            <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
                className="relative w-full max-w-6xl"
              >
                <Card className="relative bg-card/95 backdrop-blur-xl border-2 border-border/50 shadow-2xl max-h-[90vh] overflow-y-auto rounded-3xl">
                  {/* Close Button - Sticky */}
                  <button
                    onClick={onClose}
                    className="sticky top-4 float-right z-50 mr-4 mt-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-gold hover:bg-gold/10 transition-all group shadow-lg"
                  >
                    <X className="w-5 h-5 text-foreground group-hover:text-gold transition-colors" />
                  </button>

                  {/* Header */}
                  <div className={`relative p-8 sm:p-12 bg-gradient-to-br ${service.color} overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <Icon className="absolute -right-10 -top-10 w-72 h-72" />
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="relative z-10 flex items-start gap-4 sm:gap-6"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl border-2 border-white/30"
                      >
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
                          {service.title}
                        </h2>
                        <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 p-6 border-b border-border bg-secondary/20">
                    {service.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 space-y-8">
                    {/* Services List */}
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-gold" />
                        {t('servicesDetailed.services')}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.items.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-start gap-2 group"
                          >
                            <div className={`mt-1 w-4 h-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                              <CheckCircle className="w-2.5 h-2.5 text-white" />
                            </div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-gold" />
                        {t('servicesDetailed.successfulProjects')}
                      </h3>
                      <div className="space-y-4">
                        {service.projects.map((project, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                          >
                            <Card className="p-5 bg-secondary/30 border-border hover:border-gold/50 transition-all">
                              <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
                              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                              <div className="space-y-1.5">
                                {project.results.map((result, i) => (
                                  <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                                    {result}
                                  </div>
                                ))}
                              </div>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-border">
                      <motion.button
                        onClick={() => {
                          onClose();
                          setTimeout(() => {
                            const pricingSection = document.getElementById('pricing');
                            if (pricingSection) {
                              pricingSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 300);
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="block w-full py-4 px-6 text-center rounded-xl bg-gold text-gold-foreground font-semibold shadow-lg hover:shadow-gold transition-all cursor-pointer"
                      >
                        {t('servicesDetailed.getQuote')}
                      </motion.button>
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
