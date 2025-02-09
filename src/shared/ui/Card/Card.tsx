import { Card as AntCard } from 'antd';
import type { CardProps } from 'antd';
import { FC } from 'react';

type TCardProps = CardProps;

export const Card: FC<TCardProps> = ({ children, ...otherProps }) => {
  return (
    <AntCard {...otherProps}>{children}</AntCard>
  );
};
