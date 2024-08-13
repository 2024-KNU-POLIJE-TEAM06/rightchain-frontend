import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const IntroductionSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;

  width: 100%;
  height: 65vh;
`;

export const IntroductionLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;
`;

export const IntroductionRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;

  padding: 0 2rem;
`;

export const Title = styled.div`
  width: 50%;
  height: 10%;
  margin-top: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: black;

  text-align: center;
`;

export const YoutubeVideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const IntroductionImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80%;
`;

export const IntroductionDescription = styled.div`
  font-size: 1.5rem;
  color: black;
`;

export const DividingLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #2f590f;

  margin: 3rem 0;
`;

export const SectionDivideImg = styled.img`
  width: 50%;
  height: 15vh;
`;

export const HowToUseSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80vh;
`;

export const HowToUseTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 30%;
`;

export const HowToUseContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  width: 100%;
  height: 100%;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HowToUseImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;
