/**
 * URL Constants - URL 경로 및 라우팅 정보 관리
 * 프로젝트에서 사용되는 모든 URL 경로와 관련 정보를 중앙에서 관리
 * 다이나믹 라우팅 지원 및 link 이동 시 사용 가능하도록 설계
 */

// ===== URL PATH ENUM DEFINITION =====
export const UrlPath = {
  // 인증 관련
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  
  // 일기 관련
  DIARIES: '/diaries',
  DIARY_DETAIL: '/diaries/[id]',
  
  // 사진 관련
  PICTURES: '/pictures',
} as const;

export type UrlPathType = typeof UrlPath[keyof typeof UrlPath];

// ===== ACCESS STATE ENUM =====
export const AccessState = {
  /** 누구나 접근 가능 */
  PUBLIC: 'PUBLIC',
  /** 회원 전용 */
  MEMBER_ONLY: 'MEMBER_ONLY',
} as const;

export type AccessStateType = typeof AccessState[keyof typeof AccessState];

// ===== UI COMPONENT VISIBILITY INTERFACE =====
export interface UIVisibility {
  /** 헤더 표시 여부 */
  header: boolean;
  /** 헤더 내 로고 표시 여부 */
  headerLogo: boolean;
  /** 헤더 내 다크모드 토글 표시 여부 */
  headerDarkModeToggle: boolean;
  /** 배너 표시 여부 */
  banner: boolean;
  /** 네비게이션 표시 여부 */
  navigation: boolean;
  /** 푸터 표시 여부 */
  footer: boolean;
}

// ===== URL PROPERTIES INTERFACE =====
export interface UrlProperties {
  /** URL 경로 */
  path: string;
  /** 접근 가능 상태 */
  accessState: AccessStateType;
  /** UI 컴포넌트 노출 설정 */
  uiVisibility: UIVisibility;
  /** 다이나믹 라우팅 여부 */
  isDynamic: boolean;
}

// ===== URL DATA MAPPING =====
export const UrlData: Record<string, UrlProperties> = {
  [UrlPath.LOGIN]: {
    path: UrlPath.LOGIN,
    accessState: AccessState.PUBLIC,
    uiVisibility: {
      header: false,
      headerLogo: false,
      headerDarkModeToggle: false,
      banner: false,
      navigation: false,
      footer: false,
    },
    isDynamic: false,
  },
  [UrlPath.SIGNUP]: {
    path: UrlPath.SIGNUP,
    accessState: AccessState.PUBLIC,
    uiVisibility: {
      header: false,
      headerLogo: false,
      headerDarkModeToggle: false,
      banner: false,
      navigation: false,
      footer: false,
    },
    isDynamic: false,
  },
  [UrlPath.DIARIES]: {
    path: UrlPath.DIARIES,
    accessState: AccessState.PUBLIC,
    uiVisibility: {
      header: true,
      headerLogo: true,
      headerDarkModeToggle: false,
      banner: true,
      navigation: true,
      footer: true,
    },
    isDynamic: false,
  },
  [UrlPath.DIARY_DETAIL]: {
    path: UrlPath.DIARY_DETAIL,
    accessState: AccessState.MEMBER_ONLY,
    uiVisibility: {
      header: true,
      headerLogo: true,
      headerDarkModeToggle: false,
      banner: false,
      navigation: false,
      footer: true,
    },
    isDynamic: true,
  },
  [UrlPath.PICTURES]: {
    path: UrlPath.PICTURES,
    accessState: AccessState.PUBLIC,
    uiVisibility: {
      header: true,
      headerLogo: true,
      headerDarkModeToggle: false,
      banner: true,
      navigation: true,
      footer: true,
    },
    isDynamic: false,
  },
} as const;

// ===== URL UTILITY FUNCTIONS =====

/**
 * URL 경로에 따른 접근 권한을 반환
 */
export const getAccessState = (path: string): AccessStateType => {
  const urlData = Object.values(UrlData).find(data => data.path === path);
  return urlData?.accessState || AccessState.PUBLIC;
};

/**
 * URL 경로에 따른 UI 가시성 설정을 반환
 */
export const getUIVisibility = (path: string): UIVisibility => {
  const urlData = Object.values(UrlData).find(data => data.path === path);
  return urlData?.uiVisibility || {
    header: true,
    headerLogo: true,
    headerDarkModeToggle: false,
    banner: true,
    navigation: true,
    footer: true,
  };
};

/**
 * URL이 다이나믹 라우팅인지 확인
 */
export const isDynamicRoute = (path: string): boolean => {
  const urlData = Object.values(UrlData).find(data => data.path === path);
  return urlData?.isDynamic || false;
};

/**
 * 다이나믹 URL 생성 함수
 * @param basePath 기본 경로 (예: '/diaries/[id]')
 * @param params 파라미터 객체 (예: { id: '123' })
 * @returns 실제 URL 경로 (예: '/diaries/123')
 */
export const generateDynamicUrl = (basePath: string, params: Record<string, string | number>): string => {
  let generatedUrl = basePath;
  
  Object.entries(params).forEach(([key, value]) => {
    generatedUrl = generatedUrl.replace(`[${key}]`, String(value));
  });
  
  return generatedUrl;
};

/**
 * 일기 상세 페이지 URL 생성
 */
export const getDiaryDetailUrl = (id: string | number): string => {
  return generateDynamicUrl(UrlPath.DIARY_DETAIL, { id });
};

/**
 * 현재 경로가 회원 전용인지 확인
 */
export const isMemberOnlyPath = (path: string): boolean => {
  return getAccessState(path) === AccessState.MEMBER_ONLY;
};

/**
 * 현재 경로가 공개 경로인지 확인
 */
export const isPublicPath = (path: string): boolean => {
  return getAccessState(path) === AccessState.PUBLIC;
};

/**
 * 특정 UI 컴포넌트가 표시되어야 하는지 확인
 */
export const shouldShowComponent = (path: string, component: keyof UIVisibility): boolean => {
  const visibility = getUIVisibility(path);
  return visibility[component];
};

/**
 * 헤더를 표시해야 하는지 확인
 */
export const shouldShowHeader = (path: string): boolean => {
  return shouldShowComponent(path, 'header');
};

/**
 * 헤더 로고를 표시해야 하는지 확인
 */
export const shouldShowHeaderLogo = (path: string): boolean => {
  return shouldShowComponent(path, 'headerLogo');
};

/**
 * 헤더 다크모드 토글을 표시해야 하는지 확인
 */
export const shouldShowHeaderDarkModeToggle = (path: string): boolean => {
  return shouldShowComponent(path, 'headerDarkModeToggle');
};

/**
 * 배너를 표시해야 하는지 확인
 */
export const shouldShowBanner = (path: string): boolean => {
  return shouldShowComponent(path, 'banner');
};

/**
 * 네비게이션을 표시해야 하는지 확인
 */
export const shouldShowNavigation = (path: string): boolean => {
  return shouldShowComponent(path, 'navigation');
};

/**
 * 푸터를 표시해야 하는지 확인
 */
export const shouldShowFooter = (path: string): boolean => {
  return shouldShowComponent(path, 'footer');
};

/**
 * 모든 URL 경로 목록을 반환
 */
export const getAllUrlPaths = (): string[] => {
  return Object.values(UrlPath);
};

/**
 * 공개 URL 경로 목록을 반환
 */
export const getPublicPaths = (): string[] => {
  return Object.values(UrlData)
    .filter(data => data.accessState === AccessState.PUBLIC)
    .map(data => data.path);
};

/**
 * 회원 전용 URL 경로 목록을 반환
 */
export const getMemberOnlyPaths = (): string[] => {
  return Object.values(UrlData)
    .filter(data => data.accessState === AccessState.MEMBER_ONLY)
    .map(data => data.path);
};

/**
 * URL 경로의 전체 프로퍼티를 반환
 */
export const getUrlProperties = (path: string): UrlProperties | undefined => {
  return Object.values(UrlData).find(data => data.path === path);
};

/**
 * 현재 경로에서 실제 다이나믹 경로 패턴을 찾아 반환
 * 예: '/diaries/123' -> '/diaries/[id]'
 */
export const getMatchingDynamicPattern = (currentPath: string): string | undefined => {
  const dynamicPaths = Object.values(UrlData)
    .filter(data => data.isDynamic)
    .map(data => data.path);
  
  for (const pattern of dynamicPaths) {
    // [id] 등의 다이나믹 부분을 정규식으로 변환
    const regex = new RegExp('^' + pattern.replace(/\[([^\]]+)\]/g, '([^/]+)') + '$');
    if (regex.test(currentPath)) {
      return pattern;
    }
  }
  
  return undefined;
};

/**
 * 네비게이션 메뉴 항목들을 반환 (공개 경로 중 네비게이션이 표시되는 페이지들)
 */
export const getNavigationItems = (): Array<{
  path: string;
  label: string;
}> => {
  return [
    { path: UrlPath.DIARIES, label: '일기목록' },
    { path: UrlPath.PICTURES, label: '사진목록' },
  ];
};

// ===== URL CONSTANTS EXPORT =====
export const UrlConstants = {
  UrlPath,
  AccessState,
  UrlData,
  // Utility functions
  getAccessState,
  getUIVisibility,
  isDynamicRoute,
  generateDynamicUrl,
  getDiaryDetailUrl,
  isMemberOnlyPath,
  isPublicPath,
  shouldShowComponent,
  shouldShowHeader,
  shouldShowHeaderLogo,
  shouldShowHeaderDarkModeToggle,
  shouldShowBanner,
  shouldShowNavigation,
  shouldShowFooter,
  getAllUrlPaths,
  getPublicPaths,
  getMemberOnlyPaths,
  getUrlProperties,
  getMatchingDynamicPattern,
  getNavigationItems,
} as const;

// Default export
export default UrlConstants;
