import { FC } from 'react';
import { CustomCarousel, responsive, TCardEventProps } from '@/shared';

type TSimilarEventsProps = {
  events: TCardEventProps[];
}

export const SimilarEvents: FC<TSimilarEventsProps> = ({ events }) => {
  return (
    <div>Похожие события</div>
    // <CustomCarousel arrows responsive={responsive}>
    //   <div>124</div>
    //   <div>124</div>
    //   <div>124</div>
    //   {events.map((event) => (
    //     <div key={event.id}>
    //       {event.name}
    //     </div>
    //   ))}
    // </CustomCarousel>
  );
};
