'use client';

import { motion } from 'framer-motion';
import { partners } from '@/lib/constants';

export const PartnersSection = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 terminal-frame p-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-cyber-blue">// </span>
            <span className="text-white">OUR PARTNERS</span>
          </h2>
          <div className="mt-2 text-text-secondary text-sm">
            Building Africa's digital future with trusted organizations
          </div>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 md:gap-16"
            variants={marqueeVariants}
            animate="animate"
          >
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass rounded-lg p-6 md:p-8 min-w-max cursor-pointer group"
              >
                <div className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl md:text-3xl font-bold text-text-secondary group-hover:text-cyber-blue transition-colors">
                      {partner.logo}
                    </div>
                    <p className="text-xs md:text-sm text-text-secondary group-hover:text-white transition-colors line-clamp-2">
                      {partner.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass rounded-lg p-6 md:p-8 min-w-max cursor-pointer group"
              >
                <div className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl md:text-3xl font-bold text-text-secondary group-hover:text-cyber-blue transition-colors">
                      {partner.logo}
                    </div>
                    <p className="text-xs md:text-sm text-text-secondary group-hover:text-white transition-colors line-clamp-2">
                      {partner.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Fade */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-cyber-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-cyber-black to-transparent pointer-events-none" />
        </div>

        {/* Info Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary text-sm mt-12"
        >
          Partnering with universities, government agencies, NGOs, and leading technology organizations
        </motion.p>
      </div>
    </section>
  );
};
