import { useRoutes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { routeConfig } from '../lib';
import { SuspenseLoader, useTheme } from '@/shared';
import { Footer, Header } from '@/widgets';
import { ContainerStyled } from './AppRouter.styled';

function RoutesFunction() {
  return useRoutes(routeConfig);
}

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <ContainerStyled>
        <Header />
        {children}
        <Footer />
      </ContainerStyled>
    </div>
  );
};

const AppRouter = () => {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Layout>
        <RoutesFunction />
      </Layout>
    </Suspense>
  );
};

export default AppRouter;
