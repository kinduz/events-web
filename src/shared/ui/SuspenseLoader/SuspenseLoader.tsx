import styled from 'styled-components';
import { Loading } from '@/shared';

const Wrapper = styled('div')`
  width: 100vh;
  height: 100vh;
`;

export const SuspenseLoader = () => {
  return (
    <Wrapper>
      <Loading />
    </Wrapper>
  );
};
