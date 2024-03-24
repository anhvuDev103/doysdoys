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
    black60: string;
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

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsSizeOverrides {
    extraSmall: true;
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
        black60: '#00000099',
      },
      action: {
        hover: getColor('#0000001a', '#0000001a'),
      },
    },
    shape: {
      borderRadius: 2,
    },
    shadows: [
      'none',
      '#000000 1px 1px 0 0',
      '#000000 3px 3px 0 0',
      ...Array(22).fill('none'),
    ],
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
            transition: '200ms',
            ...theme.typography.body,

            '&:not(.Mui-disabled):hover': {
              borderColor: theme.palette.common.black,
              opacity: 0.7,
            },

            '&.Mui-disabled': {
              backgroundColor: theme.palette.common.gray,
              pointerEvents: 'all',
              cursor: 'no-drop',
            },
          },
          sizeSmall: {
            height: 'unset',
          },
          sizeMedium: {
            padding: '4px 10px',
            height: '40px',
            ...theme.typography.title2,
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
        defaultProps: {
          size: 'medium',
        },
        variants: [
          {
            props: {
              variant: 'red',
            },
            style: {
              color: theme.palette.common.white,
              backgroundColor: theme.palette.common.red,

              '&:not(.Mui-disabled):hover': {
                backgroundColor: theme.palette.common.red,
              },
            },
          },
          {
            props: {
              variant: 'yellow',
            },
            style: {
              color: theme.palette.common.black,
              backgroundColor: theme.palette.common.yellow,

              '&:not(.Mui-disabled):hover': {
                backgroundColor: theme.palette.common.yellow,
              },
            },
          },
          {
            props: {
              variant: 'green',
            },
            style: {
              color: theme.palette.common.white,
              backgroundColor: theme.palette.common.green,

              '&:not(.Mui-disabled):hover': {
                backgroundColor: theme.palette.common.green,
              },
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
          {
            props: {
              fontSize: 'extraSmall',
            },
            style: {
              width: 16,
              height: 16,
            },
          },
        ],
      },
      MuiTypography: {
        defaultProps: {
          variant: 'title2',
          color: theme.palette.text.primary,
        },
        styleOverrides: {
          root: {
            userSelect: 'none',
          },
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true,
        },
        styleOverrides: {
          popper: {
            '& .MuiTooltip-tooltip': {
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 12,
              paddingBottom: 12,
              backgroundColor: theme.palette.common.white,
              color: theme.palette.common.black,
              border: '1px solid',
              borderColor: theme.palette.common.black,
              borderRadius: theme.shape.borderRadius,

              ...theme.typography.body2,
            },
            '& .MuiTooltip-arrow': {
              color: theme.palette.common.black,
              borderRadius: theme.shape.borderRadius,
              '&::before': {
                borderRadius: theme.shape.borderRadius,
              },
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            border: '1px solid',
            borderColor: theme.palette.common.black,
            backgroundColor: theme.palette.background.paper,
            boxShadow: `${theme.palette.common.black} 1px 1px 0px 0px`,
            paddingLeft: 24,
            paddingRight: 12,
            borderRadius: theme.shape.borderRadius,
            ...theme.typography.title2,

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
            '&.MuiInputBase-multiline': {
              paddingTop: '9px',
              paddingBottom: '9px',
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
              '& .MuiInput-input': {
                height: 32,
              },
            },
          },
          {
            props: { size: 'medium' },
            style: {
              '& .MuiInput-input': {
                height: 40,
              },
            },
          },
          {
            props: { size: 'medium', multiline: true },
            style: {
              height: 'unset',
            },
          },
        ],
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            padding: 0,
            color: theme.palette.common.white,
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
