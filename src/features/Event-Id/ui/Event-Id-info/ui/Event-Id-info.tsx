import { FC } from 'react';
import { EventInfoTitle } from './Event-Id-info.styles';

type TEventIdInfoProps = {
  title: string;
  description?: string;
}

export const EventIdInfo: FC<TEventIdInfoProps> = ({ title, description }) => {
  return (
    <div><EventInfoTitle>{title}</EventInfoTitle></div>
  );
};
