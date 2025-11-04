import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Phone, Mail, Linkedin } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to a backend
    console.log('Form submitted:', formData);
    toast.success(t('contact.form.success'));
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 bg-gradient-navy bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 bg-card border-border focus:border-gold"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 bg-card border-border focus:border-gold"
                />
              </div>

              <div>
                <Input
                  placeholder={t('contact.form.company')}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12 bg-card border-border focus:border-gold"
                />
              </div>

              <div>
                <Textarea
                  placeholder={t('contact.form.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-card border-border focus:border-gold resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold"
              >
                {t('contact.form.submit')}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.a
                href="tel:+905054569021"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl shadow-elegant border border-border hover:border-gold hover:shadow-gold transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gold-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('contact.info.phone')}</p>
                  <p className="font-semibold text-foreground">+90 505 456 9021</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:onurguner1@hotmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl shadow-elegant border border-border hover:border-gold hover:shadow-gold transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('contact.info.email')}</p>
                  <p className="font-semibold text-foreground">onurguner1@hotmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/onur-güner-2b59397a"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl shadow-elegant border border-border hover:border-gold hover:shadow-gold transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('contact.info.linkedin')}</p>
                  <p className="font-semibold text-foreground">Onur Güner</p>
                </div>
              </motion.a>
            </div>

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-elegant border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.8361748476624!2d32.859375!3d39.919965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara%2C%20Turkey!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ankara, Turkey Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
