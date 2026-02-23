import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-background-secondary border border-border-subtle hover:border-gold-500/50 transition-all group"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun className="size-5 text-gold-500 group-hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="size-5 text-text-secondary group-hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}