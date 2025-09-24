/**
 * Color Design Tokens
 * 피그마 파운데이션에서 정의된 모든 컬러 토큰
 * 다크모드 지원을 위한 라이트/다크 테마 색상 정의
 */

// Blue Color Palette
export const blue = {
  5: '#F0F7FF',
  10: '#DBEEFF', 
  20: '#BDDBFF',
  30: '#93BEFF',
  40: '#6DA5FA', // System color
  50: '#497CFF',
  60: '#3A5CF3', // System color
  70: '#274AE1',
  80: '#1530A6',
  90: '#0B2184',
} as const;

// Gray Color Palette
export const gray = {
  white: '#FFFFFF',
  5: '#F2F2F2',
  10: '#E4E4E4',
  20: '#D4D3D3',
  30: '#C7C7C7',
  40: '#ABABAB',
  50: '#919191',
  60: '#777777',
  70: '#5F5F5F',
  80: '#333333',
  90: '#1C1C1C',
  black: '#000000',
} as const;

// Red Color Palette
export const red = {
  5: '#FDD7DC',
  10: '#F797A4',
  20: '#F4677A',
  30: '#F03851', // Error color
  40: '#E4112E',
  50: '#B40E24',
  60: '#850A1B',
} as const;

// Green Color Palette
export const green = {
  5: '#D3F3E0',
  10: '#92E6B9',
  20: '#15D66F',
  30: '#12B75F', // Success color
  40: '#109C51',
  50: '#0E723C',
  60: '#084424',
} as const;

// Yellow Color Palette
export const yellow = {
  5: '#FFE499',
  10: '#FFD666',
  20: '#FFC933',
  30: '#FFB300',
  40: '#EBA500',
  50: '#D69600',
  60: '#B27D00',
} as const;

// Cool Gray Color Palette
export const coolGray = {
  1: '#F8F8FA',
  5: '#F6F6F9',
  10: '#EDEEF2',
  20: '#DDDFE5',
  30: '#D2D4DD',
  40: '#C7C9D5',
  50: '#BBBECD',
  60: '#B0B3C4',
} as const;

// Gradient Definitions
export const gradients = {
  primary: 'linear-gradient(135deg, #6DA5FA 0%, #92EAF5 100%)',
  skeleton: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 48.5%, transparent 100%)',
} as const;

// Semantic Color Tokens - Light Theme
export const lightTheme = {
  // Background colors
  background: {
    primary: gray.white,
    secondary: gray[5],
    tertiary: gray[10],
    inverse: gray.black,
  },
  
  // Text colors
  text: {
    primary: gray.black,
    secondary: gray[70],
    tertiary: gray[50],
    inverse: gray.white,
    disabled: gray[40],
  },
  
  // Border colors
  border: {
    primary: gray[20],
    secondary: gray[10],
    focus: blue[40],
    error: red[30],
    success: green[30],
  },
  
  // Status colors
  status: {
    error: red[30],
    success: green[30],
    warning: yellow[30],
    info: blue[40],
  },
  
  // Interactive colors
  interactive: {
    primary: blue[40],
    primaryHover: blue[50],
    primaryActive: blue[60],
    secondary: gray[20],
    secondaryHover: gray[30],
    secondaryActive: gray[40],
  },
} as const;

// Semantic Color Tokens - Dark Theme
export const darkTheme = {
  // Background colors
  background: {
    primary: gray.black,
    secondary: gray[90],
    tertiary: gray[80],
    inverse: gray.white,
  },
  
  // Text colors
  text: {
    primary: gray.white,
    secondary: gray[30],
    tertiary: gray[50],
    inverse: gray.black,
    disabled: gray[60],
  },
  
  // Border colors
  border: {
    primary: gray[70],
    secondary: gray[80],
    focus: blue[50],
    error: red[40],
    success: green[40],
  },
  
  // Status colors
  status: {
    error: red[40],
    success: green[40],
    warning: yellow[40],
    info: blue[50],
  },
  
  // Interactive colors
  interactive: {
    primary: blue[50],
    primaryHover: blue[40],
    primaryActive: blue[30],
    secondary: gray[70],
    secondaryHover: gray[60],
    secondaryActive: gray[50],
  },
} as const;

// Color token type definitions
export type ColorToken = {
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    disabled: string;
  };
  border: {
    primary: string;
    secondary: string;
    focus: string;
    error: string;
    success: string;
  };
  status: {
    error: string;
    success: string;
    warning: string;
    info: string;
  };
  interactive: {
    primary: string;
    primaryHover: string;
    primaryActive: string;
    secondary: string;
    secondaryHover: string;
    secondaryActive: string;
  };
};

export type ThemeMode = 'light' | 'dark';

// Theme selector function
export const getTheme = (mode: ThemeMode): ColorToken => {
  return mode === 'light' ? lightTheme : darkTheme;
};

// CSS Custom Properties for color tokens (used in globals.css)
export const cssColorVariables = {
  light: {
    // Background
    '--color-bg-primary': lightTheme.background.primary,
    '--color-bg-secondary': lightTheme.background.secondary,
    '--color-bg-tertiary': lightTheme.background.tertiary,
    '--color-bg-inverse': lightTheme.background.inverse,
    
    // Text
    '--color-text-primary': lightTheme.text.primary,
    '--color-text-secondary': lightTheme.text.secondary,
    '--color-text-tertiary': lightTheme.text.tertiary,
    '--color-text-inverse': lightTheme.text.inverse,
    '--color-text-disabled': lightTheme.text.disabled,
    
    // Border
    '--color-border-primary': lightTheme.border.primary,
    '--color-border-secondary': lightTheme.border.secondary,
    '--color-border-focus': lightTheme.border.focus,
    '--color-border-error': lightTheme.border.error,
    '--color-border-success': lightTheme.border.success,
    
    // Status
    '--color-status-error': lightTheme.status.error,
    '--color-status-success': lightTheme.status.success,
    '--color-status-warning': lightTheme.status.warning,
    '--color-status-info': lightTheme.status.info,
    
    // Interactive
    '--color-interactive-primary': lightTheme.interactive.primary,
    '--color-interactive-primary-hover': lightTheme.interactive.primaryHover,
    '--color-interactive-primary-active': lightTheme.interactive.primaryActive,
    '--color-interactive-secondary': lightTheme.interactive.secondary,
    '--color-interactive-secondary-hover': lightTheme.interactive.secondaryHover,
    '--color-interactive-secondary-active': lightTheme.interactive.secondaryActive,
    
    // Gradients
    '--color-gradient-primary': gradients.primary,
    '--color-gradient-skeleton': gradients.skeleton,
  },
  dark: {
    // Background
    '--color-bg-primary': darkTheme.background.primary,
    '--color-bg-secondary': darkTheme.background.secondary,
    '--color-bg-tertiary': darkTheme.background.tertiary,
    '--color-bg-inverse': darkTheme.background.inverse,
    
    // Text
    '--color-text-primary': darkTheme.text.primary,
    '--color-text-secondary': darkTheme.text.secondary,
    '--color-text-tertiary': darkTheme.text.tertiary,
    '--color-text-inverse': darkTheme.text.inverse,
    '--color-text-disabled': darkTheme.text.disabled,
    
    // Border
    '--color-border-primary': darkTheme.border.primary,
    '--color-border-secondary': darkTheme.border.secondary,
    '--color-border-focus': darkTheme.border.focus,
    '--color-border-error': darkTheme.border.error,
    '--color-border-success': darkTheme.border.success,
    
    // Status
    '--color-status-error': darkTheme.status.error,
    '--color-status-success': darkTheme.status.success,
    '--color-status-warning': darkTheme.status.warning,
    '--color-status-info': darkTheme.status.info,
    
    // Interactive
    '--color-interactive-primary': darkTheme.interactive.primary,
    '--color-interactive-primary-hover': darkTheme.interactive.primaryHover,
    '--color-interactive-primary-active': darkTheme.interactive.primaryActive,
    '--color-interactive-secondary': darkTheme.interactive.secondary,
    '--color-interactive-secondary-hover': darkTheme.interactive.secondaryHover,
    '--color-interactive-secondary-active': darkTheme.interactive.secondaryActive,
    
    // Gradients
    '--color-gradient-primary': gradients.primary,
    '--color-gradient-skeleton': gradients.skeleton,
  },
} as const;

// Export all color palettes
export const colors = {
  blue,
  gray,
  red,
  green,
  yellow,
  coolGray,
  gradients,
} as const;

// Default export
export default {
  colors,
  lightTheme,
  darkTheme,
  getTheme,
  cssColorVariables,
} as const;
