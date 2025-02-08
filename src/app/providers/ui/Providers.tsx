import { FC, PropsWithChildren, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { Loading, useTheme } from '@/shared';
import { ThemeProvider } from '../ThemeProvider';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<Loading />}>
        <ThemeProvider>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </BrowserRouter>
        </ThemeProvider>
      </Suspense>
    </div>
  );
};
