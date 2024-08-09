import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  justify-content: space-between;

  padding-left: 0.5rem;
  padding-right: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 9%;
`;

export const CategoryButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ selected }) => (selected ? '#729E4F' : '#fff')};
  border: ${({ selected }) => (selected ? 'none' : '1px solid black')};
  border-radius: 15px;
  cursor: pointer;
  font-size: 20px;
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    background-color: #729e4f;
  }
`;
