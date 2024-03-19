import { ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens, getThemedComponents } from '@utils/themes';
import { ReactNode, createContext, useMemo, useState } from 'react';
import { deepmerge } from '@mui/utils';

const ColorModeContext = createContext({
  toggleColorMode: () => {}
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
    }
  };

  const theme = useMemo(() => {
    const themeCreate = createTheme(getDesignTokens(mode));
    return deepmerge(themeCreate, getThemedComponents(themeCreate));
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AppGlobalStyles;
