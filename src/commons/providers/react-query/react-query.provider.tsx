'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

interface ReactQueryProviderProps {
  children: React.ReactNode;
}

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 데이터가 5분 동안 fresh 상태로 유지
            staleTime: 5 * 60 * 1000,
            // 캐시된 데이터가 10분 동안 메모리에 유지
            gcTime: 10 * 60 * 1000,
            // 네트워크 에러 시 3번까지 재시도
            retry: 3,
            // 재시도 간격을 지수적으로 증가
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
            // 윈도우 포커스 시 자동 refetch 비활성화
            refetchOnWindowFocus: false,
            // 마운트 시 자동 refetch 활성화
            refetchOnMount: true,
            // 재연결 시 자동 refetch 활성화
            refetchOnReconnect: true,
          },
          mutations: {
            // 뮤테이션 에러 시 3번까지 재시도
            retry: 3,
            // 재시도 간격을 지수적으로 증가
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
