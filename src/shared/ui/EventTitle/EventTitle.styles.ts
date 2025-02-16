import styled from 'styled-components';
import { Theme } from '@/shared';

type TProps = {
  theme: Theme;
}

export const EventTitleStyled = styled.h2<TProps>`
    font-size: 26px;
    color: ${(props) => (props.theme === Theme.DARK ? 'white' : 'black')};
`;
