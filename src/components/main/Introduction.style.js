import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const ImgWrapper = styled.div`
  display: flex;
  width: 40%;
  height: 40%;

  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const MessageWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;

  font-size: 22px;
  text-align: center;
  white-space: pre-line;
`;
