import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  background: none;
  border: none;
  font-size: 50px;
  cursor: pointer;
`;

export const MinimizeButton = styled.button`
  position: absolute;
  top: 10px;
  right: 50px;
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  color: black;
`;

export const TitleBox = styled.div`
  width: 80%;
  height: 50px;
  background: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 700;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 30px;
  box-sizing: border-box;
`;

export const TextList = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  letter-spacing: -1px;
  text-align: left;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  color: black;
`;

export const RedText = styled.span`
  color: red;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 10%;
  width: 100%;
  height: 40px;
  margin-top: 20px;
`;
