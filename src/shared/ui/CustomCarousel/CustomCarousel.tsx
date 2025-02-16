import Carousel, { CarouselProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FC } from 'react';

type TCustomCarouselProps = CarouselProps;

// eslint-disable-next-line max-len
export const CustomCarousel: FC<TCustomCarouselProps> = ({ children, responsive, ...otherProps }) => {
  return (
    <Carousel responsive={responsive} {...otherProps}>{children}</Carousel>
  );
};
