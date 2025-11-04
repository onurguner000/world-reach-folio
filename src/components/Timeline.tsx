import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';

export const Timeline = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      key: 'independent',
      color: 'bg-gold',
      period: t('timeline.independent.period')
    },
    {
      key: 'fms',
      color: 'bg-blue-500',
      period: t('timeline.fms.period')
    },
    {
      key: 'consultant2020',
      color: 'bg-teal-500',
      period: t('timeline.consultant2020.period')
    },
    {
      key: 'gulhan',
      color: 'bg-purple-500',
      period: t('timeline.gulhan.period')
    },
    {
      key: 'officer',
      color: 'bg-indigo-500',
      period: t('timeline.officer.period')
    },
    {
      key: 'assistant',
      color: 'bg-cyan-500',
      period: t('timeline.assistant.period')
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 bg-gradient-navy bg-clip-text text-transparent">
            {t('timeline.title')}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.key}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[11px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-gold to-primary" />
              )}

              {/* Timeline Dot */}
              <div className={`absolute left-0 top-0 w-6 h-6 rounded-full ${exp.color} shadow-gold`} />

              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-elegant border border-border hover:shadow-gold transition-all duration-300">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                      {t(`timeline.${exp.key}.company`)}
                    </h3>
                    <p className="text-gold font-semibold">
                      {t(`timeline.${exp.key}.position`)}
                    </p>
                  </div>
                  <span className="text-muted-foreground font-medium px-3 py-1 bg-secondary rounded-full">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {(t(`timeline.${exp.key}.points`, { returnObjects: true }) as string[]).map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
