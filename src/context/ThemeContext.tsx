import React, {ReactNode, createContext, useState} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

import mainTheme from '../theme/theme.json';

const DEFAULT_THEME = {...eva.light, ...mainTheme};

type ThemeContextType = {
  setDefaultTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

type Props = {
  children: ReactNode;
};
export const ThemeContextProvider = ({children}: Props) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const setDefaultTheme = () => {
    setTheme(DEFAULT_THEME);
  };

  return (
    <ThemeContext.Provider
      value={{
        setDefaultTheme,
      }}>
      <ApplicationProvider {...eva} theme={theme}>
        {children}
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};
