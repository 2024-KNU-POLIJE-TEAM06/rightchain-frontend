import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;

  padding: 1rem 1rem;
  align-items: center;
  border-bottom: 2px solid #3f7317;
  margin-bottom: 1rem;
  justify-content: space-between;
  position: relative; /* 추가: TitleWrapper의 기준이 됨 */
`;

export const TitleWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  height: 6rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export const ButtonHome = styled.button`
  background: white;
  width: 9rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1rem;
  color: #2f590f;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
