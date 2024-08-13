import styled from 'styled-components';

export const AdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

export const AdContainer = styled.div`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 28/7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #f0f0f0; /* Fallback color while images load */
`;

export const AdImage = styled.img`
  width: 100%;
  height: 100%;
  padding-right: 1rem;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
`;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: ${props => (props.isActive ? 'black' : '#ccc')};
  border-radius: 50%;
`;
