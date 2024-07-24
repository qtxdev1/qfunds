'use client';

import { createContext, useContext, useEffect } from 'react';
import React from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';

const ThemeContext = createContext({
  currentTheme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeCurrentTheme: (_newTheme: string) => {},
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const changeCurrentTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.add('[&_*]:!transition-none');
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    }

    const transitionTimeout = setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 1);

    return () => clearTimeout(transitionTimeout);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeProvider = () => useContext(ThemeContext);
