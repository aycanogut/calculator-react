// breakpoints
const size = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

// device sizes
const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`
};

// colors
const color = {
  textPrimary: '#ffffff',
  textSecondary: '#9b9b9c',
  background: '#2b2c32',
  input: '#1d1d1d',
  numberKeys: '#070707',
  operatorKeys: '#141414',
  equalKey: '#463f66'
};

// typography
const typography = {
  fontSize: {
    md: '1.6rem'
  },
  fontWeight: {
    thin: '300',
    regular: '400',
    semiBold: '600',
    bold: '700',
    extraBold: '800'
  }
};

export default { size, device, color, typography };
