/**
 * Emotion Enum - 감정 데이터 상수 정의
 * 프로젝트에서 사용되는 감정 관련 데이터를 enum 형태로 관리
 * 각 감정별로 한국어 텍스트, 이미지, 색상 정보를 포함
 */

import { red, blue, gray, yellow, green } from './color';

// ===== EMOTION ENUM DEFINITION =====
export const Emotion = {
  HAPPY: 'HAPPY',
  SAD: 'SAD', 
  ANGRY: 'ANGRY',
  SURPRISE: 'SURPRISE',
  ETC: 'ETC',
} as const;

export type EmotionType = typeof Emotion[keyof typeof Emotion];

// ===== EMOTION PROPERTIES INTERFACE =====
export interface EmotionProperties {
  /** 화면에 표시될 한국어 텍스트 */
  text: string;
  /** 중간 사이즈 이미지 파일명 */
  imageM: string;
  /** 작은 사이즈 이미지 파일명 */
  imageS: string;
  /** 감정 색상 값 */
  color: string;
}

// ===== EMOTION DATA MAPPING =====
export const EmotionData: Record<EmotionType, EmotionProperties> = {
  [Emotion.HAPPY]: {
    text: '행복해요',
    imageM: 'emotion-happy-m.svg',
    imageS: 'emotion-happy-s.svg',
    color: red[60], // red60
  },
  [Emotion.SAD]: {
    text: '슬퍼요',
    imageM: 'emotion-sad-m.svg',
    imageS: 'emotion-sad-s.svg',
    color: blue[60], // blue60
  },
  [Emotion.ANGRY]: {
    text: '화나요',
    imageM: 'emotion-angry-m.svg',
    imageS: 'emotion-angry-s.svg',
    color: gray[60], // gray60
  },
  [Emotion.SURPRISE]: {
    text: '놀랐어요',
    imageM: 'emotion-surprise-m.svg',
    imageS: 'emotion-surprise-s.svg',
    color: yellow[60], // yellow60
  },
  [Emotion.ETC]: {
    text: '기타',
    imageM: 'emotion-etc-m.svg',
    imageS: 'emotion-etc-s.svg',
    color: green[60], // green60
  },
} as const;

// ===== EMOTION UTILITY FUNCTIONS =====

/**
 * 감정 타입에 따른 한국어 텍스트를 반환
 */
export const getEmotionText = (emotion: EmotionType): string => {
  return EmotionData[emotion].text;
};

/**
 * 감정 타입에 따른 중간 사이즈 이미지 파일명을 반환
 */
export const getEmotionImageM = (emotion: EmotionType): string => {
  return EmotionData[emotion].imageM;
};

/**
 * 감정 타입에 따른 작은 사이즈 이미지 파일명을 반환
 */
export const getEmotionImageS = (emotion: EmotionType): string => {
  return EmotionData[emotion].imageS;
};

/**
 * 감정 타입에 따른 색상 값을 반환
 */
export const getEmotionColor = (emotion: EmotionType): string => {
  return EmotionData[emotion].color;
};

/**
 * 감정 타입에 따른 전체 이미지 경로를 반환 (public 기준)
 */
export const getEmotionImagePath = (emotion: EmotionType, size: 'M' | 'S' = 'M'): string => {
  const imageName = size === 'M' ? getEmotionImageM(emotion) : getEmotionImageS(emotion);
  return `/icons/${imageName}`;
};

/**
 * 모든 감정 타입 배열을 반환
 */
export const getAllEmotions = (): EmotionType[] => {
  return Object.values(Emotion);
};

/**
 * 감정 타입의 전체 프로퍼티를 반환
 */
export const getEmotionProperties = (emotion: EmotionType): EmotionProperties => {
  return EmotionData[emotion];
};

/**
 * 감정 텍스트로부터 감정 타입을 찾아 반환
 */
export const getEmotionByText = (text: string): EmotionType | undefined => {
  return getAllEmotions().find(emotion => getEmotionText(emotion) === text);
};

/**
 * 감정 데이터를 배열 형태로 반환 (select box 등에서 활용)
 */
export const getEmotionOptions = (): Array<{
  value: EmotionType;
  label: string;
  color: string;
  imageM: string;
  imageS: string;
}> => {
  return getAllEmotions().map(emotion => ({
    value: emotion,
    label: getEmotionText(emotion),
    color: getEmotionColor(emotion),
    imageM: getEmotionImageM(emotion),
    imageS: getEmotionImageS(emotion),
  }));
};

// ===== EMOTION CONSTANTS EXPORT =====
export const EmotionConstants = {
  Emotion,
  EmotionData,
  // Utility functions
  getEmotionText,
  getEmotionImageM,
  getEmotionImageS,
  getEmotionColor,
  getEmotionImagePath,
  getAllEmotions,
  getEmotionProperties,
  getEmotionByText,
  getEmotionOptions,
} as const;

// Default export
export default EmotionConstants;
