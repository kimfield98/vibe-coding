/**
 * Typography Design System - 한국어/영문 Typography 토큰
 * 피그마 파운데이션에서 정의된 Typography 스타일을 TypeScript 토큰으로 구현
 * 모바일/데스크톱 분기 및 한국어/영문 분기 지원
 */

// ===== TYPOGRAPHY WEIGHT TOKENS =====
export const TypographyWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

export type TypographyWeightType = typeof TypographyWeight[keyof typeof TypographyWeight];

// ===== FONT FAMILY TOKENS =====
export const FontFamily = {
  // 한국어: Pretendard 사용
  korean: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  // 영문/숫자: SUIT 사용
  english: 'SUIT Variable, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  // 기본 시스템 폰트
  system: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
} as const;

export type FontFamilyType = typeof FontFamily[keyof typeof FontFamily];

// ===== TYPOGRAPHY STYLE TYPE DEFINITIONS =====
export interface TypographyStyle {
  fontFamily: FontFamilyType;
  fontSize: number;
  fontWeight: TypographyWeightType;
  lineHeight: number;
  letterSpacing?: number;
}

export interface ResponsiveTypographyStyle {
  mobile: TypographyStyle;
  desktop: TypographyStyle;
}

// ===== WEB HEADLINE TYPOGRAPHY TOKENS =====
export const WebHeadlineTypography = {
  headline01: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 48,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 60,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 48,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 60,
      letterSpacing: 0,
    },
  },
  headline02: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 36,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 48,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 36,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 48,
      letterSpacing: 0,
    },
  },
  headline03: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 28,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 36,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 28,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 36,
      letterSpacing: 0,
    },
  },
} as const;

// ===== HEADLINE TYPOGRAPHY TOKENS =====
export const HeadlineTypography = {
  headline01: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 24,
      fontWeight: TypographyWeight.bold,
      lineHeight: 32,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 24,
      fontWeight: TypographyWeight.bold,
      lineHeight: 32,
      letterSpacing: 0,
    },
  },
  headline02: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 22,
      fontWeight: TypographyWeight.extrabold,
      lineHeight: 30,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 22,
      fontWeight: TypographyWeight.extrabold,
      lineHeight: 30,
      letterSpacing: 0,
    },
  },
  headline03: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 20,
      fontWeight: TypographyWeight.bold,
      lineHeight: 28,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 20,
      fontWeight: TypographyWeight.bold,
      lineHeight: 28,
      letterSpacing: 0,
    },
  },
} as const;

// ===== TITLE TYPOGRAPHY TOKENS =====
export const TitleTypography = {
  title01: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 18,
      fontWeight: TypographyWeight.bold,
      lineHeight: 24,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 18,
      fontWeight: TypographyWeight.bold,
      lineHeight: 24,
      letterSpacing: 0,
    },
  },
  title02: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 16,
      fontWeight: TypographyWeight.bold,
      lineHeight: 22,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 16,
      fontWeight: TypographyWeight.bold,
      lineHeight: 22,
      letterSpacing: 0,
    },
  },
  title03: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 14,
      fontWeight: TypographyWeight.bold,
      lineHeight: 20,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 14,
      fontWeight: TypographyWeight.bold,
      lineHeight: 20,
      letterSpacing: 0,
    },
  },
  subtitle01: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 14,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 22,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 14,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 22,
      letterSpacing: 0,
    },
  },
  subtitle02: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 12,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 18,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 12,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 18,
      letterSpacing: 0,
    },
  },
} as const;

// ===== BODY TYPOGRAPHY TOKENS =====
export const BodyTypography = {
  body01: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 16,
      fontWeight: TypographyWeight.medium,
      lineHeight: 24,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 16,
      fontWeight: TypographyWeight.medium,
      lineHeight: 24,
      letterSpacing: 0,
    },
  },
  body02_m: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 14,
      fontWeight: TypographyWeight.medium,
      lineHeight: 22,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 14,
      fontWeight: TypographyWeight.medium,
      lineHeight: 22,
      letterSpacing: 0,
    },
  },
  body03: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 12,
      fontWeight: TypographyWeight.medium,
      lineHeight: 18,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 12,
      fontWeight: TypographyWeight.medium,
      lineHeight: 18,
      letterSpacing: 0,
    },
  },
  // Regular weight variants
  body01_regular: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 16,
      fontWeight: TypographyWeight.regular,
      lineHeight: 22,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 16,
      fontWeight: TypographyWeight.regular,
      lineHeight: 22,
      letterSpacing: 0,
    },
  },
  body02_s: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 14,
      fontWeight: TypographyWeight.regular,
      lineHeight: 20,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 14,
      fontWeight: TypographyWeight.regular,
      lineHeight: 20,
      letterSpacing: 0,
    },
  },
  body03_regular: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 12,
      fontWeight: TypographyWeight.regular,
      lineHeight: 16,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 12,
      fontWeight: TypographyWeight.regular,
      lineHeight: 16,
      letterSpacing: 0,
    },
  },
} as const;

// ===== CAPTION TYPOGRAPHY TOKENS =====
export const CaptionTypography = {
  caption01: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 12,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 14,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 12,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 14,
      letterSpacing: 0,
    },
  },
  caption02_m: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 10,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 12,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 10,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 12,
      letterSpacing: 0,
    },
  },
  caption02_s: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 10,
      fontWeight: TypographyWeight.medium,
      lineHeight: 12,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 10,
      fontWeight: TypographyWeight.medium,
      lineHeight: 12,
      letterSpacing: 0,
    },
  },
  caption03: {
    mobile: {
      fontFamily: FontFamily.korean,
      fontSize: 8,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 10,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.korean,
      fontSize: 8,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 10,
      letterSpacing: 0,
    },
  },
} as const;

// ===== ENGLISH TYPOGRAPHY VARIANTS =====
// 영문 콘텐츠용 typography (SUIT 폰트 사용)
export const EnglishWebHeadlineTypography = {
  headline01: {
    mobile: {
      fontFamily: FontFamily.english,
      fontSize: 48,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 60,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.english,
      fontSize: 48,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 60,
      letterSpacing: 0,
    },
  },
  headline02: {
    mobile: {
      fontFamily: FontFamily.english,
      fontSize: 36,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 48,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.english,
      fontSize: 36,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 48,
      letterSpacing: 0,
    },
  },
  headline03: {
    mobile: {
      fontFamily: FontFamily.english,
      fontSize: 28,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 36,
      letterSpacing: 0,
    },
    desktop: {
      fontFamily: FontFamily.english,
      fontSize: 28,
      fontWeight: TypographyWeight.semibold,
      lineHeight: 36,
      letterSpacing: 0,
    },
  },
} as const;

// ===== TYPOGRAPHY UTILITY FUNCTIONS =====

/**
 * 현재 디바이스 타입을 감지하는 함수
 */
export const getDeviceType = (): 'mobile' | 'desktop' => {
  if (typeof window === 'undefined') return 'desktop';
  return window.innerWidth < 768 ? 'mobile' : 'desktop';
};

/**
 * Typography 스타일을 CSS 객체로 변환하는 함수
 */
export const getTypographyCSS = (style: TypographyStyle): React.CSSProperties => {
  return {
    fontFamily: style.fontFamily,
    fontSize: `${style.fontSize}px`,
    fontWeight: style.fontWeight,
    lineHeight: `${style.lineHeight}px`,
    letterSpacing: style.letterSpacing ? `${style.letterSpacing}px` : '0',
  };
};

/**
 * 반응형 Typography 스타일을 현재 디바이스에 맞게 반환하는 함수
 */
export const getResponsiveTypographyCSS = (
  style: ResponsiveTypographyStyle,
  deviceType?: 'mobile' | 'desktop'
): React.CSSProperties => {
  const device = deviceType || getDeviceType();
  return getTypographyCSS(style[device]);
};

/**
 * CSS 변수명을 생성하는 함수
 */
export const getTypographyCSSVariable = (category: string, name: string, property: string): string => {
  return `--typo-${category}-${name}-${property}`;
};

// ===== ALL TYPOGRAPHY TOKENS EXPORT =====
export const Typography = {
  webHeadline: WebHeadlineTypography,
  headline: HeadlineTypography,
  title: TitleTypography,
  body: BodyTypography,
  caption: CaptionTypography,
  // English variants
  english: {
    webHeadline: EnglishWebHeadlineTypography,
  },
  // Utility functions
  getDeviceType,
  getTypographyCSS,
  getResponsiveTypographyCSS,
  getTypographyCSSVariable,
} as const;

export default Typography;
