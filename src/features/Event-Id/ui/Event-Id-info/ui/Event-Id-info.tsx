import { FC } from 'react';
import { EventTitle } from '@/shared';

type TEventIdInfoProps = {
  title: string;
  description?: string;
}

export const EventIdInfo: FC<TEventIdInfoProps> = ({ title, description }) => {
  return (
    <div><EventTitle title={title} /></div>
  );
};
