import { FC } from 'react';
import { EventTitleStyled } from './EventTitle.styles';
import { useTheme } from '@/shared';

type TEventTitleProps = {
  title: string;
}

export const EventTitle: FC<TEventTitleProps> = ({ title }) => {
  const { theme } = useTheme();

  return (
    <EventTitleStyled theme={theme}>{title}</EventTitleStyled>
  );
};
