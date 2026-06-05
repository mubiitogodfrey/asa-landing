'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { mediaCards } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export const MediaCards = ({ onCardSelect }: { onCardSelect: (cardId: number) => void }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    if (!autoRotate) return;

    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % mediaCards.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoRotate]);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
    setAutoRotate(false);
    onCardSelect(mediaCards[index].id);

    // Resume auto-rotate after 10 seconds of inactivity
    const timeout = setTimeout(() => setAutoRotate(true), 10000);
    return () => clearTimeout(timeout);
  };

  const getAccentColor = (accent: string) => {
    const colors: Record<string, string> = {
      blue: 'border-cyber-blue/50 hover:border-cyber-blue hover:shadow-glow-blue',
      purple: 'border-cyber-purple/50 hover:border-cyber-purple hover:shadow-glow-purple',
      green: 'border-cyber-green/50 hover:border-cyber-green hover:shadow-glow-green',
      gold: 'border-cyber-gold/50 hover:border-cyber-gold hover:shadow-glow-gold',
    };
    return colors[accent] || colors.blue;
  };

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Shield: <Icons.Shield className="w-6 h-6" />,
      Mail: <Icons.Mail className="w-6 h-6" />,
      Calendar: <Icons.Calendar className="w-6 h-6" />,
      Mic2: <Icons.Mic2 className="w-6 h-6" />,
      Zap: <Icons.Zap className="w-6 h-6" />,
      Headphones: <Icons.Headphones className="w-6 h-6" />,
    };
    return icons[iconName] || <Icons.Shield className="w-6 h-6" />;
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Card Scroll Container */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-min px-4 md:px-0">
          {mediaCards.map((card, index) => {
            const icon = getIconComponent(card.icon);
            const isActive = activeCard === index;

            return (
              <motion.button
                key={card.id}
                onClick={() => handleCardClick(index)}
                onMouseEnter={() => setAutoRotate(false)}
                onMouseLeave={() => setAutoRotate(true)}
                whileHover={{ y: -4 }}
                className={`glass px-6 py-4 rounded-lg border-2 transition-all duration-300 cursor-pointer flex-shrink-0 w-80 text-left ${getAccentColor(
                  card.accent
                )} ${isActive ? 'ring-2 ring-offset-2 ring-offset-cyber-black' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg glass-${card.accent}`}>
                    {icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-white mb-1">{card.title}</h3>
                    <p className="text-xs text-text-secondary line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeCard"
                    className="absolute inset-0 rounded-lg border-2"
                    style={{
                      borderColor:
                        card.accent === 'blue'
                          ? '#00B8FF'
                          : card.accent === 'purple'
                            ? '#7A00FF'
                            : card.accent === 'green'
                              ? '#00D26A'
                              : '#FFC400',
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Card Detail View */}
      <div className="glass-purple rounded-lg p-8 min-h-96 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {(() => {
              const card = mediaCards[activeCard];
              const icon = getIconComponent(card.icon);

              return (
                <>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg glass-${card.accent}`}>
                        {icon}
                      </div>
                      <h2 className="text-2xl font-bold text-white">{card.title}</h2>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{card.description}</p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Button
                      variant={
                        card.accent as 'blue' | 'purple' | 'green' | 'gold'
                      }
                      className="mt-6"
                    >
                      {card.buttonText}
                    </Button>
                  </motion.div>
                </>
              );
            })()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {mediaCards.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              activeCard === index ? 'bg-cyber-blue w-8' : 'bg-text-secondary/30'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
};
