import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from 'react';

export const Testimonials = () => {
  const { t } = useTranslation();
  
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{
    name: string;
    title: string;
    text: string;
  }>;

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 bg-gradient-navy bg-clip-text text-transparent">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
                  className="h-full"
                >
                  <Card className="p-6 sm:p-8 h-full bg-card/80 backdrop-blur-sm border-border shadow-elegant hover:shadow-gold transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-gold" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-muted-foreground mb-6 italic leading-relaxed text-sm sm:text-base flex-grow">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div className="border-t border-border pt-4 mt-auto">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{testimonial.title}</p>
                      </div>
                    </div>

                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden lg:block">
            <CarouselPrevious className="left-0 -translate-x-16" />
            <CarouselNext className="right-0 translate-x-16" />
          </div>
        </Carousel>

        {/* Navigation dots indicator */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {testimonials.slice(0, 4).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gold/30 animate-pulse"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};