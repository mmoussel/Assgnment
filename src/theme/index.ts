export const theme = {
  dark: false,

  colors: {
    text: '#4E4E4E',
    primeText: '#202020',
    subtext: '#C1C1C1',
    mutedText: '#BCBCBC',
    disabled: '#E9E9E9',
    tertiary: '#F0F0F0',
    primary: '#4E4E4E',
    background: '#F4F4F4',
    input: '#FFF',
    card: '#EAEAEA',
    border: 'rgba(0, 0, 0, 0.1)',
    error: '#EA1818',
    warning: '#FD9418',
    success: 'rgba(85, 189, 121, 1)',
    divider: '#DEDEDE',
    light: {
      background: 'rgba(255, 255, 255, 0.3)',
      primary: 'rgba(98, 94, 238, 0.15)',
      success: 'rgba(85, 189, 121, 0.15)',
      error: 'rgba(234, 24, 24, 0.15)',
      warning: 'rgba(253, 148, 24, 0.15)',
    },
  },

  font: {
    size: {
      xxs: 6,
      xs: 8,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 20,
      xxl: 24,
      xxxl: 34,
      bigNum: 48,
    },

    family: {
      italic: 'OpenSans-Italic', //font-weight: 300
      regular: 'OpenSans-Regular', //font-weight: 400
      semiBold: 'OpenSans-SemiBold', //font-weight: 600
      bold: 'OpenSans-Bold', //font-weight: 700
    },
  },

  spacing: (n: number) => n * 4,
};
