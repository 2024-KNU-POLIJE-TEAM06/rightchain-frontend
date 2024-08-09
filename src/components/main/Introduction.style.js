import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70%;

  justify-content: center;

  margin-bottom: 10px;
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
