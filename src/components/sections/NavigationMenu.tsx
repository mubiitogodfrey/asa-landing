'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { navigationItems, socialLinks } from '@/lib/constants';

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-40 p-3 glass rounded-lg hover:bg-cyber-blue/10 transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 text-cyber-blue" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Menu Panel */}
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-0 right-0 h-screen w-full max-w-2xl glass-purple z-50 overflow-y-auto"
        >
          <div className="p-8">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-cyber-purple/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-cyber-purple" />
            </button>

            {/* Menu Content */}
            <div className="pt-16 space-y-12">
              {/* About AllsafeAfrica */}
              <section>
                <h3 className="text-cyber-blue text-sm font-bold mb-4 neon-glow uppercase tracking-wider">
                  ABOUT ALLSAFEAFRICA
                </h3>
                <ul className="space-y-3">
                  {navigationItems.about.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-text-secondary hover:text-cyber-blue transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Flagship Products */}
              <section>
                <h3 className="text-cyber-green text-sm font-bold mb-4 neon-glow-green uppercase tracking-wider">
                  FLAGSHIP PRODUCTS
                </h3>
                <ul className="space-y-3">
                  {navigationItems.products.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-text-secondary hover:text-cyber-green transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Media */}
              <section>
                <h3 className="text-cyber-gold text-sm font-bold mb-4 neon-glow-gold uppercase tracking-wider">
                  MEDIA
                </h3>
                <ul className="space-y-3">
                  {navigationItems.media.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-text-secondary hover:text-cyber-gold transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Socials */}
              <section>
                <h3 className="text-cyber-purple text-sm font-bold mb-4 neon-glow-purple uppercase tracking-wider">
                  SOCIALS
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-purple rounded-lg hover:border-cyber-purple transition-all duration-300 text-center"
                    >
                      <div className="text-sm font-medium text-text-secondary hover:text-cyber-purple">
                        {link.label}
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
