'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';

// ===== MODAL TYPES =====
export interface ModalContextType {
  /** 모달 열기 */
  openModal: (content: ReactNode, options?: ModalOptions) => void;
  /** 모달 닫기 */
  closeModal: () => void;
  /** 모달 열림 상태 */
  isOpen: boolean;
}

export interface ModalOptions {
  /** 배경 클릭 시 모달 닫기 여부 (기본값: true) */
  closeOnBackdropClick?: boolean;
  /** ESC 키로 모달 닫기 여부 (기본값: true) */
  closeOnEscape?: boolean;
  /** 모달 배경 스타일 커스터마이징 */
  backdropClassName?: string;
  /** 모달 컨테이너 스타일 커스터마이징 */
  containerClassName?: string;
}

interface ModalState {
  isOpen: boolean;
  content: ReactNode | null;
  options: ModalOptions;
}

// ===== MODAL CONTEXT =====
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// ===== MODAL HOOK =====
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

// ===== MODAL COMPONENT =====
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  options: ModalOptions;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, options }) => {
  const {
    closeOnBackdropClick = true,
    closeOnEscape = true,
    backdropClassName = '',
    containerClassName = '',
  } = options;

  // ESC 키 이벤트 처리
  React.useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // 배경 클릭 처리
  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnBackdropClick && event.target === event.currentTarget) {
        onClose();
      }
    },
    [closeOnBackdropClick, onClose]
  );

  // body 스크롤 제어
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${backdropClassName}`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative bg-white rounded-lg shadow-xl ${containerClassName}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  // Portal을 사용하여 body에 모달 렌더링
  return typeof window !== 'undefined' 
    ? createPortal(modalContent, document.body)
    : null;
};

// ===== MODAL PROVIDER =====
interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    content: null,
    options: {},
  });

  const openModal = useCallback((content: ReactNode, options: ModalOptions = {}) => {
    setModalState({
      isOpen: true,
      content,
      options,
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalState(prev => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  const contextValue: ModalContextType = {
    openModal,
    closeModal,
    isOpen: modalState.isOpen,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        options={modalState.options}
      >
        {modalState.content}
      </Modal>
    </ModalContext.Provider>
  );
};

// ===== DEFAULT EXPORT =====
export default ModalProvider;
