import React, { forwardRef, useState } from 'react';
import styles from './styles.module.css';

export interface SearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 검색바의 변형 타입
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  
  /**
   * 검색바의 크기
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * 테마 모드
   */
  theme?: 'light' | 'dark';
  
  /**
   * 플레이스홀더 텍스트
   */
  placeholder?: string;
  
  /**
   * 검색 값
   */
  value?: string;
  
  /**
   * 비활성화 상태
   */
  disabled?: boolean;
  
  /**
   * 읽기 전용 상태
   */
  readOnly?: boolean;
  
  /**
   * 추가 CSS 클래스명
   */
  className?: string;
  
  /**
   * 전체 너비 사용 여부
   */
  fullWidth?: boolean;
  
  /**
   * 검색 아이콘 표시 여부
   */
  showSearchIcon?: boolean;
  
  /**
   * 클리어 버튼 표시 여부
   */
  showClearButton?: boolean;
  
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
  
  /**
   * 검색 실행 핸들러 (Enter 키 또는 검색 버튼 클릭)
   */
  onSearch?: (value: string) => void;
  
  /**
   * 클리어 핸들러
   */
  onClear?: () => void;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  placeholder = '검색어를 입력해 주세요.',
  value,
  disabled = false,
  readOnly = false,
  className = '',
  fullWidth = false,
  showSearchIcon = true,
  showClearButton = true,
  onFocus,
  onBlur,
  onChange,
  onSearch,
  onClear,
  ...props
}, ref) => {
  const [internalValue, setInternalValue] = useState(value || '');
  const searchValue = value !== undefined ? value : internalValue;
  
  const searchBarId = props.id || `searchbar-${Math.random().toString(36).substr(2, 9)}`;
  
  const containerClasses = [
    styles.container,
    styles[`container--${variant}`],
    styles[`container--${size}`],
    styles[`container--${theme}`],
    fullWidth && styles['container--full-width'],
    disabled && styles['container--disabled'],
    readOnly && styles['container--readonly'],
    className
  ].filter(Boolean).join(' ');

  const inputWrapperClasses = [
    styles.inputWrapper,
    styles[`inputWrapper--${variant}`],
    styles[`inputWrapper--${size}`],
    styles[`inputWrapper--${theme}`],
    disabled && styles['inputWrapper--disabled'],
    readOnly && styles['inputWrapper--readonly'],
    showSearchIcon && styles['inputWrapper--with-search-icon'],
    showClearButton && searchValue && styles['inputWrapper--with-clear-button']
  ].filter(Boolean).join(' ');

  const inputClasses = [
    styles.input,
    styles[`input--${size}`],
    styles[`input--${theme}`],
    showSearchIcon && styles['input--with-search-icon'],
    showClearButton && searchValue && styles['input--with-clear-button']
  ].filter(Boolean).join(' ');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSearch) {
      event.preventDefault();
      onSearch(searchValue);
    }
    props.onKeyDown?.(event);
  };

  const handleSearchClick = () => {
    if (onSearch && !disabled && !readOnly) {
      onSearch(searchValue);
    }
  };

  const handleClearClick = () => {
    if (value === undefined) {
      setInternalValue('');
    }
    onClear?.();
  };

  return (
    <div className={containerClasses}>
      <div className={inputWrapperClasses}>
        {showSearchIcon && (
          <button
            type="button"
            className={styles.searchIcon}
            onClick={handleSearchClick}
            disabled={disabled}
            aria-label="검색"
          >
            <img 
              src="/icons/search_outline_light_m.svg" 
              alt="검색" 
              width="24" 
              height="24"
            />
          </button>
        )}
        
        <input
          ref={ref}
          id={searchBarId}
          type="text"
          className={inputClasses}
          placeholder={placeholder}
          value={searchValue}
          disabled={disabled}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          {...props}
        />
        
        {showClearButton && searchValue && !disabled && !readOnly && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClearClick}
            aria-label="검색어 지우기"
          >
            <img 
              src="/icons/close_outline_light_s.svg" 
              alt="지우기" 
              width="20" 
              height="20"
            />
          </button>
        )}
      </div>
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;
