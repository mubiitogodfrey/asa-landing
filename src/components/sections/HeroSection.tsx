'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-cyber-black">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/16056/16056-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/20 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo/Brand */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-cyber-blue flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-cyber-blue" />
            </div>
            <span className="text-cyber-blue font-bold text-sm uppercase tracking-widest">
              AllsafeAfrica
            </span>
          </div>
          <div className="mt-2 text-text-secondary text-sm">CYBER HUB</div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 max-w-5xl"
        >
          <span className="block text-white">SECURING AFRICA.</span>
          <span className="block text-white">EMPOWERING TALENT.</span>
          <span className="block bg-gradient-to-r from-cyber-gold via-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            BUILDING THE FUTURE.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12"
        >
          Cybersecurity • Compliance • ESG • Innovation • Digital Inclusion
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
        >
          <Button variant="blue" size="lg" className="group">
            EXPLORE SCOPD™
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="green" size="lg" className="group">
            JOIN ASA CYBER HUB
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="gold" size="lg" className="group">
            <Play className="w-5 h-5" />
            WATCH CYBER TALKS
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center"
          >
            <div className="text-text-secondary text-sm mb-2">SCROLL TO EXPLORE</div>
            <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-cyber-blue rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
