import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from '@mui/material';
import { deepmerge } from '@mui/utils';
import { getDesignTokens, getThemedComponents } from '@utils/themes';
import { createContext, ReactNode, useMemo, useState } from 'react';

const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export type Mode = 'dark' | 'light';

const AppGlobalStyles = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>('dark');

  const colorMode = {
    toggleColorMode: () => {
      setMode((prevMode) => {
        const newMode = prevMode === 'light' ? 'dark' : 'light';
        return newMode;
      });
    },
  };

  const theme = useMemo(() => {
    const themeCreate = createTheme(getDesignTokens(mode));
    return deepmerge(themeCreate, getThemedComponents(themeCreate));
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={(theme) => ({
            body: {
              backgroundColor: theme.palette.background.default,
            },
          })}
        />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AppGlobalStyles;
