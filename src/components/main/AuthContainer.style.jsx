import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  width: 90%;
  height: 25%;
  margin-bottom: 15px;
`;

export const MessageWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 40%;

  font-size: 22px;
  text-align: center;
  margin-top: 20px;
`;

export const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  width: 90%;
  heigh: 50%;

  margin-bottom: 15px;
`;
