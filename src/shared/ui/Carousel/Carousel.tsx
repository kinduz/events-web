import { Carousel as AntCarousel } from 'antd';
import type { CarouselProps } from 'antd';
import { FC } from 'react';

type TCarouselProps = CarouselProps;

export const Carousel: FC<TCarouselProps> = ({ children, ...otherProps }) => {
  return (
    <AntCarousel {...otherProps}>{children}</AntCarousel>
  );
};
