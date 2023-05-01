import React, {ReactNode, createContext, useState} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

import mainTheme from '../theme/theme.json';
import signUpCommunityTheme from '../theme/signUpCommunityTheme.json';
import {SafeAreaContent} from './SafeAreaContent';

const DEFAULT_THEME = {...eva.light, ...mainTheme};

const THEMES: any = {
  SIGNUP_COMMUNITY: {...eva.light, ...signUpCommunityTheme},
};

type ThemeContextType = {
  setDefaultTheme: () => void;
  setThemeByName: (themeName: string) => void;
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

  const setThemeByName = (themeName: string) => {
    if (!(themeName in THEMES)) {
      return;
    }
    setTheme(THEMES[themeName]);
  };

  return (
    <ThemeContext.Provider
      value={{
        setDefaultTheme,
        setThemeByName,
      }}>
      <SafeAreaContent>
        <ApplicationProvider {...eva} theme={theme}>
          {children}
        </ApplicationProvider>
      </SafeAreaContent>
    </ThemeContext.Provider>
  );
};
