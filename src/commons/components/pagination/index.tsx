import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

export interface PaginationProps {
  /**
   * 페이지네이션의 변형 타입
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  
  /**
   * 페이지네이션의 크기
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * 테마 모드
   */
  theme?: 'light' | 'dark';
  
  /**
   * 현재 페이지 번호 (1부터 시작)
   */
  currentPage: number;
  
  /**
   * 전체 페이지 수
   */
  totalPages: number;
  
  /**
   * 한 번에 보여줄 페이지 번호 개수
   */
  visiblePages?: number;
  
  /**
   * 페이지 변경 핸들러
   */
  onPageChange: (page: number) => void;
  
  /**
   * 이전/다음 버튼 표시 여부
   */
  showNavigationButtons?: boolean;
  
  /**
   * 첫 페이지/마지막 페이지 버튼 표시 여부
   */
  showBoundaryButtons?: boolean;
  
  /**
   * 비활성화 상태
   */
  disabled?: boolean;
  
  /**
   * 추가 CSS 클래스명
   */
  className?: string;
  
  /**
   * 이전 버튼 아이콘 (커스텀)
   */
  prevIcon?: React.ReactNode;
  
  /**
   * 다음 버튼 아이콘 (커스텀)
   */
  nextIcon?: React.ReactNode;
  
  /**
   * 첫 페이지 버튼 아이콘 (커스텀)
   */
  firstIcon?: React.ReactNode;
  
  /**
   * 마지막 페이지 버튼 아이콘 (커스텀)
   */
  lastIcon?: React.ReactNode;
}

// 기본 아이콘 컴포넌트들 (public/icons 활용)
const ChevronLeftIcon = () => (
  <Image 
    src="/icons/leftenable_outline_light_m.svg" 
    alt="이전" 
    width={24} 
    height={24}
    style={{ display: 'block' }}
  />
);

const ChevronRightIcon = () => (
  <Image 
    src="/icons/rightenable_outline_light_m.svg" 
    alt="다음" 
    width={24} 
    height={24}
    style={{ display: 'block' }}
  />
);

const FirstPageIcon = () => (
  <Image 
    src="/icons/leftenable_outline_light_m.svg" 
    alt="첫 페이지" 
    width={24} 
    height={24}
    style={{ display: 'block', transform: 'translateX(-2px)' }}
  />
);

const LastPageIcon = () => (
  <Image 
    src="/icons/rightenable_outline_light_m.svg" 
    alt="마지막 페이지" 
    width={24} 
    height={24}
    style={{ display: 'block', transform: 'translateX(2px)' }}
  />
);

export const Pagination: React.FC<PaginationProps> = ({
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  currentPage,
  totalPages,
  visiblePages = 5,
  onPageChange,
  showNavigationButtons = true,
  showBoundaryButtons = false,
  disabled = false,
  className = '',
  prevIcon,
  nextIcon,
  firstIcon,
  lastIcon,
  ...props
}) => {
  // 페이지 번호 배열 생성
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= visiblePages) {
      // 전체 페이지가 visiblePages보다 적으면 모든 페이지 표시
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 현재 페이지를 중심으로 visiblePages만큼 표시
      const half = Math.floor(visiblePages / 2);
      let start = Math.max(1, currentPage - half);
      const end = Math.min(totalPages, start + visiblePages - 1);
      
      // 끝에서 시작점 조정
      if (end - start + 1 < visiblePages) {
        start = Math.max(1, end - visiblePages + 1);
      }
      
      // 첫 페이지와 간격이 있으면 ... 추가
      if (start > 1) {
        pages.push(1);
        if (start > 2) {
          pages.push('...');
        }
      }
      
      // 중간 페이지들 추가
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // 마지막 페이지와 간격이 있으면 ... 추가
      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const handlePageClick = (page: number) => {
    if (disabled || page === currentPage || page < 1 || page > totalPages) {
      return;
    }
    onPageChange(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  const handleFirstClick = () => {
    handlePageClick(1);
  };

  const handleLastClick = () => {
    handlePageClick(totalPages);
  };

  const containerClasses = [
    styles.pagination,
    styles[`pagination--${variant}`],
    styles[`pagination--${size}`],
    styles[`pagination--${theme}`],
    disabled && styles['pagination--disabled'],
    className
  ].filter(Boolean).join(' ');

  const visiblePageNumbers = getVisiblePages();

  return (
    <nav className={containerClasses} role="navigation" aria-label="페이지네이션" {...props}>
      <div className={styles.paginationContainer}>
        {/* 첫 페이지 버튼 */}
        {showBoundaryButtons && (
          <button
            type="button"
            className={[
              styles.paginationButton,
              styles.paginationButton__navigation,
              styles[`paginationButton--${variant}`],
              styles[`paginationButton--${size}`],
              styles[`paginationButton--${theme}`],
              (disabled || currentPage === 1) && styles['paginationButton--disabled']
            ].filter(Boolean).join(' ')}
            onClick={handleFirstClick}
            disabled={disabled || currentPage === 1}
            aria-label="첫 페이지로 이동"
          >
            {firstIcon || <FirstPageIcon />}
          </button>
        )}

        {/* 이전 버튼 */}
        {showNavigationButtons && (
          <button
            type="button"
            className={[
              styles.paginationButton,
              styles.paginationButton__navigation,
              styles[`paginationButton--${variant}`],
              styles[`paginationButton--${size}`],
              styles[`paginationButton--${theme}`],
              (disabled || currentPage === 1) && styles['paginationButton--disabled']
            ].filter(Boolean).join(' ')}
            onClick={handlePrevClick}
            disabled={disabled || currentPage === 1}
            aria-label="이전 페이지로 이동"
          >
            {prevIcon || <ChevronLeftIcon />}
          </button>
        )}

        {/* 페이지 번호들 */}
        <div className={styles.paginationNumbers}>
          {visiblePageNumbers.map((page, index) => {
            if (page === '...') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className={[
                    styles.paginationEllipsis,
                    styles[`paginationEllipsis--${theme}`]
                  ].filter(Boolean).join(' ')}
                  aria-hidden="true"
                >
                  ...
                </span>
              );
            }

            const pageNumber = page as number;
            const isActive = pageNumber === currentPage;

            return (
              <button
                key={pageNumber}
                type="button"
                className={[
                  styles.paginationButton,
                  styles.paginationButton__page,
                  styles[`paginationButton--${variant}`],
                  styles[`paginationButton--${size}`],
                  styles[`paginationButton--${theme}`],
                  isActive && styles['paginationButton--active'],
                  disabled && styles['paginationButton--disabled']
                ].filter(Boolean).join(' ')}
                onClick={() => handlePageClick(pageNumber)}
                disabled={disabled}
                aria-label={`${pageNumber}페이지로 이동`}
                aria-current={isActive ? 'page' : undefined}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        {/* 다음 버튼 */}
        {showNavigationButtons && (
          <button
            type="button"
            className={[
              styles.paginationButton,
              styles.paginationButton__navigation,
              styles[`paginationButton--${variant}`],
              styles[`paginationButton--${size}`],
              styles[`paginationButton--${theme}`],
              (disabled || currentPage === totalPages) && styles['paginationButton--disabled']
            ].filter(Boolean).join(' ')}
            onClick={handleNextClick}
            disabled={disabled || currentPage === totalPages}
            aria-label="다음 페이지로 이동"
          >
            {nextIcon || <ChevronRightIcon />}
          </button>
        )}

        {/* 마지막 페이지 버튼 */}
        {showBoundaryButtons && (
          <button
            type="button"
            className={[
              styles.paginationButton,
              styles.paginationButton__navigation,
              styles[`paginationButton--${variant}`],
              styles[`paginationButton--${size}`],
              styles[`paginationButton--${theme}`],
              (disabled || currentPage === totalPages) && styles['paginationButton--disabled']
            ].filter(Boolean).join(' ')}
            onClick={handleLastClick}
            disabled={disabled || currentPage === totalPages}
            aria-label="마지막 페이지로 이동"
          >
            {lastIcon || <LastPageIcon />}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Pagination;
