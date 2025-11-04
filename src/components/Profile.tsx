import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

export const Profile = () => {
  const { t } = useTranslation();

  const skills = [
    t('profile.skills.negotiation'),
    t('profile.skills.research'),
    t('profile.skills.customs'),
    t('profile.skills.pricing'),
    t('profile.skills.development'),
  ];

  const points = [
    t('profile.points.0'),
    t('profile.points.1'),
    t('profile.points.2'),
    t('profile.points.3'),
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 bg-gradient-navy bg-clip-text text-transparent">
              {t('profile.title')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 sm:p-12 shadow-elegant border border-border"
          >
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              {t('profile.intro')}
            </p>

            <div className="space-y-4 mb-8">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{point}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-8 border-t border-border"
            >
              <h3 className="font-semibold text-lg mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-medium bg-gradient-gold text-gold-foreground shadow-gold"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
