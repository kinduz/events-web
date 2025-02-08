import { EventIdImgBlockStyled, EventImgStyled, EventInfoStyled } from './Event-Id.styles';
import eventImg from '@/shared/assets/images/mock-event.jpeg';
import { Flex } from '@/shared';

export const EventId = () => {
  return (
    <Flex align="center" justify="center">
      <EventIdImgBlockStyled>
        <EventImgStyled>
          <img alt="Img" src={eventImg} />
        </EventImgStyled>
        <EventInfoStyled />
      </EventIdImgBlockStyled>
    </Flex>
  );
};
