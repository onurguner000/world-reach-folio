import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const Timeline = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      key: 'independent',
      color: 'from-gold to-yellow-500',
      dotColor: 'bg-gold',
      icon: '🚀',
      period: t('timeline.independent.period')
    },
    {
      key: 'fms',
      color: 'from-blue-500 to-cyan-500',
      dotColor: 'bg-blue-500',
      icon: '⚙️',
      period: t('timeline.fms.period')
    },
    {
      key: 'consultant2020',
      color: 'from-teal-500 to-green-500',
      dotColor: 'bg-teal-500',
      icon: '💼',
      period: t('timeline.consultant2020.period')
    },
    {
      key: 'gulhan',
      color: 'from-purple-500 via-pink-500 to-rose-500',
      dotColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
      icon: '📈',
      period: t('timeline.gulhan.period')
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gold/10 text-gold border-gold/20 px-4 py-1.5">
            {t('timeline.experienceBadge')}
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-navy bg-clip-text text-transparent">
            {t('timeline.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('timeline.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Modern Vertical Timeline Line with Gradient & Flowing Animation */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-gold/20 via-primary/30 to-gold/20" />
            <motion.div 
              className="hidden md:block absolute left-6 top-0 w-1 h-32 bg-gradient-to-b from-transparent via-gold to-transparent"
              animate={{
                y: [0, "calc(100vh - 128px)", 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold/50 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.key}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-8 last:mb-0 md:pl-20 pl-0"
              >
                {/* Timeline Dot - Modern Pulsing with Special Effect for Gülhan */}
                <div className="hidden md:flex absolute left-0 top-5 z-20">
                  <div className="relative">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl ${exp.dotColor} shadow-xl flex items-center justify-center text-lg border-4 border-background group-hover:scale-125 transition-all duration-300 ${exp.key === 'gulhan' ? 'shadow-2xl shadow-purple-500/50' : ''}`}
                      animate={exp.key === 'gulhan' ? {
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 10px 30px rgba(168, 85, 247, 0.3)',
                          '0 10px 40px rgba(236, 72, 153, 0.5)',
                          '0 10px 30px rgba(168, 85, 247, 0.3)',
                        ]
                      } : {}}
                      transition={exp.key === 'gulhan' ? {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      } : {}}
                    >
                      {exp.icon}
                    </motion.div>
                    <div className={`absolute inset-0 w-12 h-12 rounded-xl ${exp.dotColor} animate-ping opacity-20`} />
                    {exp.key === 'gulhan' && (
                      <motion.div 
                        className="absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Content Card - Modern Glass Morphism with Special Gülhan Style */}
                <motion.div
                  whileHover={{ scale: 1.01, x: 8 }}
                  className={`relative bg-card/40 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl border transition-all duration-500 group ${
                    exp.key === 'gulhan' 
                      ? 'border-purple-500/30 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-purple-500/20' 
                      : 'border-border/50 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10'
                  }`}
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                  
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />

                  {/* Mobile Icon */}
                  <div className="md:hidden mb-3">
                    <div className={`inline-flex w-10 h-10 rounded-lg ${exp.dotColor} items-center justify-center text-lg shadow-lg`}>
                      {exp.icon}
                    </div>
                  </div>

                  {/* Header - Clean Layout */}
                  <div className="relative z-10 mb-3">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1">
                          {t(`timeline.${exp.key}.company`)}
                        </h3>
                        <p className="text-gold font-semibold text-sm flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" />
                          {t(`timeline.${exp.key}.position`)}
                        </p>
                      </div>
                      <div className={`text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r ${exp.color} text-white font-medium shadow-lg flex items-center gap-1.5 whitespace-nowrap shrink-0`}>
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Achievement Points - Clean Bullets with Enhanced Gülhan Style */}
                  <ul className={`relative z-10 space-y-2 ${exp.key === 'gulhan' ? 'space-y-3' : ''}`}>
                    {(t(`timeline.${exp.key}.points`, { returnObjects: true }) as string[]).map((point, i) => {
                      // Emoji ile başlıyorsa onu ayır
                      const hasEmoji = /^[\u{1F300}-\u{1F9FF}]/u.test(point);
                      
                      return (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className={`flex items-start gap-2.5 group/item ${
                            exp.key === 'gulhan' && hasEmoji 
                              ? 'p-2 rounded-lg hover:bg-secondary/30 transition-colors' 
                              : ''
                          }`}
                        >
                          {hasEmoji && exp.key === 'gulhan' ? (
                            // Gülhan için emoji göster
                            <span className="text-base sm:text-lg flex-shrink-0 group-hover/item:scale-125 transition-transform">
                              {point.match(/^[\u{1F300}-\u{1F9FF}]/u)?.[0]}
                            </span>
                          ) : (
                            // Diğerleri için normal bullet
                            <div className={`mt-0.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color} flex-shrink-0 group-hover/item:scale-150 transition-transform`} />
                          )}
                          <span className={`leading-relaxed group-hover/item:text-foreground transition-colors ${
                            exp.key === 'gulhan' && hasEmoji
                              ? 'text-foreground text-sm sm:text-base font-medium'
                              : 'text-muted-foreground text-xs sm:text-sm'
                          }`}>
                            {hasEmoji ? point.replace(/^[\u{1F300}-\u{1F9FF}]\s*/u, '') : point}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
