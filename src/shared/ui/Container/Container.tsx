import { FC, PropsWithChildren } from 'react';
import { ContainerStyles } from './Container.styles';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ContainerStyles>{children}</ContainerStyles>
  );
};
