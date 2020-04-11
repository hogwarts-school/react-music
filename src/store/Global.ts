import { useState, useEffect, useCallback } from 'react';
import { createContainer } from 'unstated-next';
import { useLocalStorage } from 'react-use';

type Theme = 'light' | 'dark';

const defaultTheme: Theme = 'light';

const Global = () => {
  const [rememberTheme, setRememberTheme] = useLocalStorage<Theme>('theme', defaultTheme);
  const [theme, setTheme] = useState<Theme>(rememberTheme);
  const resetTheme = useCallback(() => {
    setTheme(defaultTheme);
  }, [setTheme]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    setRememberTheme(theme);
  }, [theme, setRememberTheme]);

  return { theme, toggleTheme, resetTheme };
};

export default createContainer(Global);
