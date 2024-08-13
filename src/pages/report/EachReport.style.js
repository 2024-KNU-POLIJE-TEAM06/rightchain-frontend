import styled, { keyframes, css } from 'styled-components';

export const ReportBox = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  width: 95%;
`;

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1px;
  color: black;
  width: 100%;
`;

export const ReportInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const ReportInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatusContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
`;

export const Status = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  margin-top: 1px;
  color: #6e9154;
  border-radius: 4px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const Description = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: justify;
  flex: 3;
  margin-right: 20px;
  white-space: pre-wrap;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 95%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
`;

export const BottomButton = styled.button`
  width: 40%;
  height: 50px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 700;
  background-color: white;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 20px;
  transition: background-color 0.3s ease;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled.p`
  font-family: 'ThonburiUI', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: -1px;
  text-align: center;
  color: #9a9a9a;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const fillAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const textColorChange = keyframes`
  from {
    color: #000000;
  }
  to {
    color: #ffffff;
  }
`;

export const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%;
  height: 30px;
  background-color: #d3d3d3;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;

  span {
    position: relative;
    z-index: 2; /* Ensures text is above the background */
    color: #000000;
    transition: color 0.3s ease-in-out;
    ${({ active, index }) =>
      active &&
      css`
        animation: ${textColorChange} 1s ease-in-out forwards;
        animation-delay: ${(index + 1) * 1}s;
      `}
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: #6e9154;
    transition: width 0.3s ease-in-out;
    z-index: 1;
    ${({ active, index }) =>
      active &&
      css`
        animation: ${fillAnimation} 1s ease-in-out forwards;
        animation-delay: ${index * 1}s;
      `}
  }
`;
