import styled from 'styled-components';

export const EventIdImgBlockStyled = styled.div`
    position: relative;
    margin: 24px 0;
`;

export const EventImgStyled = styled.div`
    width: 800px;
    height: 360px;
    border-radius: 25px;
    box-shadow: 4px 8px 19px 0px rgba(34, 60, 80, 0.1);
    
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }
`;

export const EventInfoStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
`;
