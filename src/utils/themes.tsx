import { CheckBoxIcon, CheckedBoxIcon } from '@components/icons';
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

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    red: true;
    yellow: true;
    green: true;
  }

  interface ButtonPropsSizeOverrides {
    squared: true;
    squaredLarge: true;
  }
}

export const FONT = '"Outfit", sans-serif';

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
        xl: 1280,
      },
    },
    typography: {
      fontFamily: FONT,
      h1: {
        fontWeight: 400,
        fontSize: 48,
        lineHeight: '140%',
      },
      h2: {
        fontWeight: 400,
        fontSize: 40,
        lineHeight: '140%',
      },
      h3: {
        fontWeight: 400,
        fontSize: 33,
        lineHeight: '140%',
      },
      h4: {
        fontWeight: 400,
        fontSize: 28,
        lineHeight: '140%',
      },
      h5: {
        fontWeight: 400,
        fontSize: 23,
        lineHeight: '140%',
      },
      title1: {
        fontWeight: 400,
        fontSize: 19,
        lineHeight: '140%',
      },
      title2: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '140%',
      },
      body: {
        fontWeight: 400,
        fontSize: 13,
        lineHeight: '140%',
      },
      caption: {
        fontWeight: 400,
        fontSize: 11,
        lineHeight: '140%',
      },
      h1Bold: {
        fontWeight: 700,
        fontSize: 48,
        lineHeight: '140%',
      },
      h2Bold: {
        fontWeight: 700,
        fontSize: 40,
        lineHeight: '140%',
      },
      h3Bold: {
        fontWeight: 700,
        fontSize: 33,
        lineHeight: '140%',
      },
      h4Bold: {
        fontWeight: 700,
        fontSize: 28,
        lineHeight: '140%',
      },
      h5Bold: {
        fontWeight: 700,
        fontSize: 23,
        lineHeight: '140%',
      },
      title1Bold: {
        fontWeight: 700,
        fontSize: 19,
        lineHeight: '140%',
      },
      title2Bold: {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: '140%',
      },
      bodyBold: {
        fontWeight: 700,
        fontSize: 13,
        lineHeight: '140%',
      },
      captionBold: {
        fontWeight: 700,
        fontSize: 11,
        lineHeight: '140%',
      },
    },
    spacing: 4,
    palette: {
      mode,
      primary: {
        main: getColor('#b286fd', '#b286fd'),
        contrastText: getColor('#000000', '#000000'),
      },
      background: {
        default: getColor('#f4f4f0', '#f4f4f0'),
        paper: getColor('#ffffff', '#ffffff'),
      },
      text: {
        primary: getColor('#000000', '#000000'),
        secondary: getColor('#666666', '#666666'),
      },
      common: {
        gray: '#666666',
        green: '#11a365',
        orange: '#ff7051',
        purple: '#b286fd',
        red: '#e2442f',
        yellow: '#fabe24',
      },
    },
    shape: {
      borderRadius: 2,
    },
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
            borderRadius: theme.shape.borderRadius,
            border: '1px solid',
            borderColor: theme.palette.common.black,
            boxShadow: 'none',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            outline: 'none',
            color: theme.palette.text.primary,
            borderRadius: theme.shape.borderRadius,
            border: '1px solid',
            borderColor: theme.palette.common.black,
            boxShadow: `${theme.palette.common.black} 1px 1px 0px 0px`,
            minWidth: 'unset',
            textTransform: 'none',
            ...theme.typography.body,

            '&:hover': {
              borderColor: theme.palette.common.black,
            },
          },
          sizeMedium: {
            padding: '4px 10px',
          },
          sizeSquared: {
            width: 32,
            height: 32,
            padding: 6,
          },
          sizeSquaredLarge: {
            width: 36,
            height: 36,
            padding: 8,
          },
        },
        variants: [
          {
            props: {
              variant: 'red',
            },
            style: {
              color: theme.palette.common.white,
              backgroundColor: theme.palette.common.red,
            },
          },
          {
            props: {
              variant: 'yellow',
            },
            style: {
              color: theme.palette.common.black,
              backgroundColor: theme.palette.common.yellow,
            },
          },
          {
            props: {
              variant: 'green',
            },
            style: {
              color: theme.palette.common.white,
              backgroundColor: theme.palette.common.green,
            },
          },
        ],
      },
      MuiSvgIcon: {
        variants: [
          {
            props: {
              fontSize: 'large',
            },
            style: {
              width: 32,
              height: 32,
            },
          },
          {
            props: {
              fontSize: 'medium',
            },
            style: {
              width: 24,
              height: 24,
            },
          },
          {
            props: {
              fontSize: 'small',
            },
            style: {
              width: 20,
              height: 20,
            },
          },
        ],
      },
      MuiTypography: {
        defaultProps: {
          variant: 'title2',
          color: theme.palette.text.primary,
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            border: '1px solid',
            borderColor: theme.palette.common.black,
            backgroundColor: theme.palette.background.default,
            boxShadow: `${theme.palette.common.black} 1px 1px 0px 0px`,
            paddingLeft: 24,
            paddingRight: 12,
            borderRadius: theme.shape.borderRadius,
            '& .MuiInput-input': {
              padding: 0,
              '&::placeholder': {
                color: theme.palette.common.gray,
              },
            },
            '&::before': {
              content: 'normal',
            },
            '&::after': {
              content: 'normal',
            },
          },
        },
        defaultProps: {
          size: 'medium',
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              height: 32,
            },
          },
          {
            props: { size: 'medium' },
            style: {
              height: 40,
            },
          },
        ],
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            padding: 0,
            '&:hover': {
              background: 'red',
            },
          },
        },
        defaultProps: {
          icon: <CheckBoxIcon />,
          checkedIcon: <CheckedBoxIcon />,
        },
      },
    },
  } as ThemeOptions;
}
