import { EventIdImgBlockStyled, EventImgStyled, EventInfoStyled } from './Event-Id.styles';
import eventImg from '@/shared/assets/images/mock-event-3.jpg';
import { Flex } from '@/shared';
import { EventIdInfo } from './Event-Id-info';

export const EventId = () => {
  return (
    <Flex align="center" vertical justify="center">
      <EventIdImgBlockStyled>
        <EventImgStyled>
          <img alt="Img" src={eventImg} />
        </EventImgStyled>
        <EventInfoStyled />
      </EventIdImgBlockStyled>
      <EventIdInfo title='Иммерсивное шоу "Берсерк"' />
    </Flex>
  );
};
