import React from 'react';
import styles from './styles.module.css';

export interface ButtonProps {
  /**
   * 버튼의 변형 타입
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  
  /**
   * 버튼의 크기
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * 테마 모드
   */
  theme?: 'light' | 'dark';
  
  /**
   * 버튼 텍스트
   */
  children: React.ReactNode;
  
  /**
   * 비활성화 상태
   */
  disabled?: boolean;
  
  /**
   * 클릭 핸들러
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * 버튼 타입
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * 추가 CSS 클래스명
   */
  className?: string;
  
  /**
   * 아이콘 (선택사항)
   */
  icon?: React.ReactNode;
  
  /**
   * 아이콘 위치
   */
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  children,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    styles[`button--${theme}`],
    disabled && styles['button--disabled'],
    icon && styles['button--with-icon'],
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={styles['button__icon']}>{icon}</span>
      )}
      <span className={styles['button__text']}>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={styles['button__icon']}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
