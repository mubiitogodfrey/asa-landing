'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MediaCards } from './MediaCards';
import { FeaturedContentPanel } from './FeaturedContent';

export const ContentHubSection = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-cyber-black to-cyber-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyber-blue">CONTENT </span>
            <span className="text-cyber-purple">HUB</span>
          </h2>
          <p className="text-text-secondary max-w-2xl">
            Explore our latest media, insights, and resources curated for Africa's digital transformation
          </p>
        </motion.div>

        {/* Desktop Layout: Grid */}
        <div className="hidden md:grid md:grid-cols-5 gap-8">
          {/* Left Side: Media Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <MediaCards onCardSelect={setSelectedCard} />
          </motion.div>

          {/* Right Side: Featured Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <FeaturedContentPanel />
          </motion.div>
        </div>

        {/* Mobile Layout: Stacked */}
        <div className="md:hidden space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <MediaCards onCardSelect={setSelectedCard} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FeaturedContentPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
