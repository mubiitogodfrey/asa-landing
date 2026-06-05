'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from '@/lib/utils';

// Simple variant system for buttons
type ButtonVariant = 'blue' | 'purple' | 'green' | 'gold' | 'primary';
type ButtonSize = 'sm' | 'md' | 'lg';

const variantStyles: Record<ButtonVariant, string> = {
  blue: 'border border-cyber-blue/50 hover:shadow-glow-blue hover:border-cyber-blue text-cyber-blue',
  purple:
    'border border-cyber-purple/50 hover:shadow-glow-purple hover:border-cyber-purple text-cyber-purple',
  green: 'border border-cyber-green/50 hover:shadow-glow-green hover:border-cyber-green text-cyber-green',
  gold: 'border border-cyber-gold/50 hover:shadow-glow-gold hover:border-cyber-gold text-cyber-gold',
  primary: 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white hover:shadow-neon-blue',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-6 py-3',
  lg: 'text-lg px-8 py-4',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({
  className,
  variant = 'blue',
  size = 'md',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'relative rounded-lg font-medium transition-all duration-300 overflow-hidden group',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12" />
    </button>
  );
};

export default Button;
