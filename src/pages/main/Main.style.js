import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;

  padding: 1rem 1rem;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  padding: 1rem 3rem;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  padding: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 30%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 280px;
  height: 70px;

  margin-bottom: 5vh;
`;

export const ReportListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;

  padding: 0 4rem;
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 40vh;

  margin-bottom: 20px;
`;

export const IntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  margin-bottom: 20px;
`;
