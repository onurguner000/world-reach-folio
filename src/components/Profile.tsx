import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CheckCircle, Trophy, Globe, TrendingUp, Users, Target } from 'lucide-react';

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

  const stats = [
    { icon: Globe, value: '7', label: 'Kıta', color: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, value: '525+', label: 'İhracat', color: 'from-green-500 to-emerald-500' },
    { icon: Trophy, value: '€1M+', label: 'Ciro Artışı', color: 'from-gold to-yellow-500' },
    { icon: Users, value: '14+', label: 'Yıl Deneyim', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
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
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-navy bg-clip-text text-transparent">
            {t('profile.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('profile.intro')}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Stats Grid - Top Row */}
          <div className="md:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-2 border-border hover:border-gold hover:shadow-gold transition-all duration-300 group relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Main Content - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-8"
          >
            <Card className="p-8 sm:p-10 h-full bg-card/50 backdrop-blur-sm border-2 border-border hover:border-gold/50 transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-gold" />
                <h3 className="font-display text-2xl font-bold text-foreground">{t('profile.achievements')}</h3>
              </div>
              
              <div className="space-y-4">
                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-gold to-yellow-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform shadow-md">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Skills - Side Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-4"
          >
            <Card className="p-6 sm:p-8 h-full bg-gradient-to-br from-gold/10 to-primary/10 border-2 border-gold/30 hover:border-gold hover:shadow-gold transition-all duration-500">
              <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-gold-foreground" />
                </div>
                {t('profile.coreExpertise')}
              </h3>
              <div className="flex flex-col gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="group/skill"
                  >
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border hover:border-gold hover:bg-gold/5 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-gold group-hover/skill:scale-150 transition-transform" />
                      <span className="text-sm font-medium text-foreground">{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
