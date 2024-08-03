import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  width: 90%;
  height: 25%;
`;

export const MessageWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 40%;

  font-size: 22px;
  text-align: center;
`;

export const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  width: 90%;
  heigh: 50%;

  margin-bottom: 10px;
`;
