import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  function toggleDarkMode() {
    setIsDark(prev => !prev);
  }

  useEffect(() => {
    localStorage.setItem("darkMode", isDark);
  }, [isDark]);

  return { isDark, toggleDarkMode };
}