'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Play, ExternalLink, Link } from 'lucide-react';
import { products, resources, contactInfo, socialLinks } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export const FooterSection = () => {
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

  const getSocialIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      LinkedIn: ExternalLink,
      Youtube: Play,
      Github: Link,
      X: ExternalLink,
      Instagram: ExternalLink,
    };
    return icons[iconName] || ExternalLink;
  };

  return (
    <footer className="bg-cyber-black terminal-frame">
      {/* Main Footer Content */}
      <div className="px-6 md:px-12 py-16">
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Column 1: About */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="w-10 h-10 rounded-full border-2 border-cyber-blue flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-cyber-blue" />
            </div>
            <h3 className="font-bold text-white text-lg">ALLSAFEAFRICA</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              We are committed to securing Africa's digital future through innovative cybersecurity solutions,
              capacity building, ESG leadership and digital inclusion.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((link) => {
                const IconComponent = getSocialIcon(link.icon);
                return (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 glass rounded-lg hover:border-cyber-blue transition-colors"
                  >
                    <IconComponent className="w-5 h-5 text-cyber-blue" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2: Products */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-cyber-gold font-bold text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href="#"
                    className="text-text-secondary text-sm hover:text-cyber-gold transition-colors"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-cyber-green font-bold text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <a
                    href={resource.href}
                    className="text-text-secondary text-sm hover:text-cyber-green transition-colors"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-cyber-blue font-bold text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-text-secondary hover:text-cyber-blue transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 text-text-secondary hover:text-cyber-blue transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {contactInfo.phone}
              </a>
              <div className="flex items-start gap-2 text-text-secondary text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>{contactInfo.location}</p>
                  <p className="text-xs text-text-secondary/70">{contactInfo.tagline}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Button variant="blue" size="sm" className="w-full justify-center">
                BOOK A CONSULTATION
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="border-t border-cyber-blue/20 px-6 md:px-12 py-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-text-secondary text-xs">
            <p>&copy; 2024 AllsafeAfrica Cyber Hub. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#" className="hover:text-cyber-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyber-blue transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-cyber-blue transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-cyber-blue transition-colors">
                Security Policy
              </a>
              <a href="#" className="hover:text-cyber-blue transition-colors">
                Responsible Disclosure
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
