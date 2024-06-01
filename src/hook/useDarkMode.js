import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [colorMode, setColorMode] = useState(localStorage.getItem('chakra-ui-color-mode') || 'light');

  useEffect(() => {
    localStorage.setItem('chakra-ui-color-mode', colorMode);
  }, [colorMode]);

  const toggleColorMode = () => {
    setColorMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return { colorMode, toggleColorMode };
};
