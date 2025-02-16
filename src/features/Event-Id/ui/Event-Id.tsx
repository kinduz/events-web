import { useMemo } from 'react';
import { EventIdImgBlockStyled, EventImgStyled, EventInfoStyled } from './Event-Id.styles';
import eventImg from '@/shared/assets/images/mock-event-4.webp';
import { Container, Flex, TCardEventProps } from '@/shared';
import { EventIdInfo } from './Event-Id-info';
import { SimilarEvents } from '@/widgets';

export const EventId = () => {
  const events: TCardEventProps[] = useMemo(() => [
    {
      id: '1',
      name: 'Иммерсивное шоу "Берсерк"',
      img: eventImg,
    },
    {
      id: '2',
      name: 'Иммерсивное шоу "Берсерк"',
      img: eventImg,
    },
    {
      id: '13',
      name: 'Иммерсивное шоу "Берсерк"',
      img: eventImg,
    },
    {
      id: '14',
      name: 'Иммерсивное шоу "Берсерк"',
      img: eventImg,
    },
    {
      id: '15',
      name: 'Иммерсивное шоу "Берсерк"',
      img: eventImg,
    },
  ], []);

  return (
    <Container>
      <Flex align="center" vertical justify="center">
        <Flex style={{ marginTop: '32px', width: '55%' }} justify="space-between">
          <h4>Информация</h4>
          <h4>Информация</h4>
        </Flex>
        <EventIdImgBlockStyled>
          <EventImgStyled>
            <img alt="Img" src={eventImg} />
          </EventImgStyled>
          <EventInfoStyled />
        </EventIdImgBlockStyled>
        <EventIdInfo title='Иммерсивное шоу "Японская культура. От Асуки до "Берсерка"' />
        <SimilarEvents events={events} />
      </Flex>
    </Container>
  );
};
