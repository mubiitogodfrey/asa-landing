import { useTheme } from '@/providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-dark-surface/50 dark:bg-dark-surface/50 hover:bg-dark-surface/80 dark:hover:bg-dark-surface/80 border border-cyber-blue/20 dark:border-cyber-blue/30 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-cyber-gold transition-all duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="w-5 h-5 text-cyber-purple transition-all duration-300 rotate-0 scale-100" />
      )}
    </button>
  );
}
