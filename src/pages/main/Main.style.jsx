import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: Green;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const LeftContentContainer = styled.div`
`;

export const ContentButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContentButton = styled.button`
  background: white;
  height: 50px;
  width: 150px;
  border: 1px white;
  box-shadow: 1px 2px #888888;
  cursor: pointer;
  justify-content: center;
  padding: 5px;
  margin: 30px;
  border-radius: 5px;
`;

export const ReportContainer = styled.div`
  display: flex;
  justify-content: center;
  
`;

export const RightContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const AuthButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const HowToUseButton = styled.button``;

export const AdvertisementContainer = styled.div``;
