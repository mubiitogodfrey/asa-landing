'use client';

import { motion } from 'framer-motion';
import { Play, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { featuredContent, highlights } from '@/lib/constants';

export const FeaturedContentPanel = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="space-y-8">
      {/* Main Featured Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="glass-blue rounded-lg overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-6 p-8">
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative aspect-video md:aspect-square rounded-lg overflow-hidden"
          >
            <img
              src={featuredContent.podcast.image}
              alt="Featured Podcast"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            <button className="absolute inset-0 flex items-center justify-center hover:scale-110 transition-transform">
              <div className="w-20 h-20 rounded-full bg-cyber-blue/20 backdrop-blur-md flex items-center justify-center hover:bg-cyber-blue/40 transition-colors">
                <Play className="w-8 h-8 text-cyber-blue fill-cyber-blue" />
              </div>
            </button>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <span className="text-cyber-blue text-sm font-bold uppercase mb-3 tracking-widest">
              LATEST PODCAST EPISODE
            </span>
            <h3 className="text-3xl font-bold text-white mb-4">
              {featuredContent.podcast.title}
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              {featuredContent.podcast.description}
            </p>

            {/* Audio Waveform Visualization */}
            <div className="flex items-center gap-2 mb-6 p-4 glass rounded-lg">
              <Volume2 className="w-5 h-5 text-cyber-blue flex-shrink-0" />
              <div className="flex gap-1 flex-1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, 16, 4] }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.05,
                      repeat: Infinity,
                    }}
                    className="w-1 bg-gradient-to-t from-cyber-blue to-cyber-purple rounded-full"
                  />
                ))}
              </div>
              <span className="text-text-secondary text-xs ml-2">{featuredContent.podcast.duration}</span>
            </div>

            <Button variant="blue" size="lg">
              <Play className="w-5 h-5" />
              LISTEN NOW
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Other Highlights Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid md:grid-cols-4 gap-4"
      >
        {highlights.map((highlight) => (
          <motion.div
            key={highlight.id}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="glass rounded-lg overflow-hidden cursor-pointer group"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-white mb-1 line-clamp-2">{highlight.title}</h4>
              <p className="text-text-secondary text-sm mb-3">{highlight.subtitle}</p>
              <button className="text-cyber-blue text-sm font-medium hover:translate-x-1 transition-transform">
                {highlight.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
