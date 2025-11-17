import React, { forwardRef } from 'react';
import styles from './styles.module.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 인풋의 변형 타입
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  
  /**
   * 인풋의 크기
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * 테마 모드
   */
  theme?: 'light' | 'dark';
  
  /**
   * 라벨 텍스트
   */
  label?: string;
  
  /**
   * 플레이스홀더 텍스트
   */
  placeholder?: string;
  
  /**
   * 에러 상태
   */
  error?: boolean;
  
  /**
   * 에러 메시지
   */
  errorMessage?: string;
  
  /**
   * 헬퍼 텍스트
   */
  helperText?: string;
  
  /**
   * 비활성화 상태
   */
  disabled?: boolean;
  
  /**
   * 읽기 전용 상태
   */
  readOnly?: boolean;
  
  /**
   * 필수 입력 여부
   */
  required?: boolean;
  
  /**
   * 추가 CSS 클래스명
   */
  className?: string;
  
  /**
   * 왼쪽 아이콘
   */
  leftIcon?: React.ReactNode;
  
  /**
   * 오른쪽 아이콘
   */
  rightIcon?: React.ReactNode;
  
  /**
   * 전체 너비 사용 여부
   */
  fullWidth?: boolean;
  
  /**
   * 포커스 핸들러
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * 블러 핸들러
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * 값 변경 핸들러
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  label,
  placeholder,
  error = false,
  errorMessage,
  helperText,
  disabled = false,
  readOnly = false,
  required = false,
  className = '',
  leftIcon,
  rightIcon,
  fullWidth = false,
  onFocus,
  onBlur,
  onChange,
  ...props
}, ref) => {
  const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const containerClasses = [
    styles.container,
    fullWidth && styles['container--full-width'],
    className
  ].filter(Boolean).join(' ');

  const inputWrapperClasses = [
    styles.inputWrapper,
    styles[`inputWrapper--${variant}`],
    styles[`inputWrapper--${size}`],
    styles[`inputWrapper--${theme}`],
    error && styles['inputWrapper--error'],
    disabled && styles['inputWrapper--disabled'],
    readOnly && styles['inputWrapper--readonly'],
    leftIcon && styles['inputWrapper--with-left-icon'],
    rightIcon && styles['inputWrapper--with-right-icon']
  ].filter(Boolean).join(' ');

  const inputClasses = [
    styles.input,
    styles[`input--${size}`],
    styles[`input--${theme}`],
    leftIcon && styles['input--with-left-icon'],
    rightIcon && styles['input--with-right-icon']
  ].filter(Boolean).join(' ');

  const labelClasses = [
    styles.label,
    styles[`label--${theme}`],
    required && styles['label--required'],
    disabled && styles['label--disabled']
  ].filter(Boolean).join(' ');

  const messageClasses = [
    styles.message,
    styles[`message--${theme}`],
    error && styles['message--error']
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      
      <div className={inputWrapperClasses}>
        {leftIcon && (
          <span className={styles.leftIcon}>
            {leftIcon}
          </span>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          {...props}
        />
        
        {rightIcon && (
          <span className={styles.rightIcon}>
            {rightIcon}
          </span>
        )}
      </div>
      
      {(errorMessage || helperText) && (
        <div className={messageClasses}>
          {error && errorMessage ? errorMessage : helperText}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
