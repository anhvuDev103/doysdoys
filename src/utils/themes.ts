import { Mode } from '@contexts/AppGlobalStyles';
import { Theme, ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    body: React.CSSProperties;
    h1Bold: React.CSSProperties;
    h2Bold: React.CSSProperties;
    h3Bold: React.CSSProperties;
    h4Bold: React.CSSProperties;
    h5Bold: React.CSSProperties;
    title1Bold: React.CSSProperties;
    title2Bold: React.CSSProperties;
    bodyBold: React.CSSProperties;
    captionBold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title1?: React.CSSProperties;
    title2?: React.CSSProperties;
    body?: React.CSSProperties;
    h1Bold?: React.CSSProperties;
    h2Bold?: React.CSSProperties;
    h3Bold?: React.CSSProperties;
    h4Bold?: React.CSSProperties;
    h5Bold?: React.CSSProperties;
    title1Bold?: React.CSSProperties;
    title2Bold?: React.CSSProperties;
    bodyBold?: React.CSSProperties;
    captionBold?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    body: true;
    h1Bold: true;
    h2Bold: true;
    h3Bold: true;
    h4Bold: true;
    h5Bold: true;
    title1Bold: true;
    title2Bold: true;
    bodyBold: true;
    captionBold: true;
    body1: false;
    body2: false;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    red: string;
    orange: string;
    yellow: string;
    green: string;
    gray: string;
    purple: string;
  }
}

const FONT = '"Space Grotesk", sans-serif';

export const getDesignTokens = (mode: Mode) => {
  const getColor = (darkColor: string, lightColor: string) =>
    mode === 'dark' ? darkColor : lightColor;

  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280
      }
    },
    typography: {
      fontFamily: FONT,
      h1: {
        fontWeight: 400,
        fontSize: 48,
        lineHeight: '140%'
      },
      h2: {
        fontWeight: 400,
        fontSize: 40,
        lineHeight: '140%'
      },
      h3: {
        fontWeight: 400,
        fontSize: 33,
        lineHeight: '140%'
      },
      h4: {
        fontWeight: 400,
        fontSize: 28,
        lineHeight: '140%'
      },
      h5: {
        fontWeight: 400,
        fontSize: 23,
        lineHeight: '140%'
      },
      title1: {
        fontWeight: 400,
        fontSize: 19,
        lineHeight: '140%'
      },
      title2: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '140%'
      },
      body: {
        fontWeight: 400,
        fontSize: 13,
        lineHeight: '140%'
      },
      caption: {
        fontWeight: 400,
        fontSize: 11,
        lineHeight: '140%'
      },
      h1Bold: {
        fontWeight: 500,
        fontSize: 48,
        lineHeight: '140%'
      },
      h2Bold: {
        fontWeight: 500,
        fontSize: 40,
        lineHeight: '140%'
      },
      h3Bold: {
        fontWeight: 500,
        fontSize: 33,
        lineHeight: '140%'
      },
      h4Bold: {
        fontWeight: 500,
        fontSize: 28,
        lineHeight: '140%'
      },
      h5Bold: {
        fontWeight: 500,
        fontSize: 23,
        lineHeight: '140%'
      },
      title1Bold: {
        fontWeight: 500,
        fontSize: 19,
        lineHeight: '140%'
      },
      title2Bold: {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '140%'
      },
      bodyBold: {
        fontWeight: 500,
        fontSize: 13,
        lineHeight: '140%'
      },
      captionBold: {
        fontWeight: 500,
        fontSize: 11,
        lineHeight: '140%'
      }
    },
    palette: {
      mode,
      primary: {
        main: getColor('#b286fd', '#b286fd'),
        contrastText: getColor('#000000', '#000000')
      },
      background: {
        default: getColor('#f4f4f0', '#f4f4f0'),
        paper: getColor('#ffffff', '#ffffff')
      },
      text: {
        primary: getColor('#000000', '#000000'),
        secondary: getColor('#666666', '#666666')
      },
      common: {
        gray: '#666666',
        green: '#11a365',
        orange: '#ff7051',
        purple: '#b286fd',
        red: '#e2442f',
        yellow: '#fabe24'
      }
    }
  } as ThemeOptions;
};

export function getThemedComponents(theme: Theme) {
  return {
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.background.paper,
            padding: 20,
            borderRadius: 8,
            boxShadow: `${theme.palette.common.black} 3px 3px 0px 1px`
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            outline: 'none',
            color: theme.palette.text.primary,
            borderRadius: 8,
            border: '1px solid',
            borderColor: theme.palette.common.black,
            boxShadow: `${theme.palette.common.black} 3px 3px 0px 1px`,

            '&:hover': {
              borderColor: theme.palette.common.black
            }
          }
        }
      },
      MuiTypography: {
        defaultProps: {
          variant: 'title2',
          color: theme.palette.text.primary
        }
      }
    }
  } as ThemeOptions;
}
