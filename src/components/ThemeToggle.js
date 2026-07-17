import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const label = isDark ? 'Light' : 'Dark';
  const icon = isDark ? '☀️' : '🌙';

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${label.toLowerCase()} theme`}
    >
      <span className="theme-toggle-icon">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export default ThemeToggle;