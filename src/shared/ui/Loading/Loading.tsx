import { Spin } from 'antd';
import { LoadingStyled } from './Loading.styled';

export const Loading = () => {
  return (
    <LoadingStyled>
      <Spin size="default" />
    </LoadingStyled>
  );
};
