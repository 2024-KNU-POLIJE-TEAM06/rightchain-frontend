import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 3rem;
  padding-bottom: 0.5rem;

  align-items: start;
`;

export const ButtonHome = styled.button`
  background: white;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;

  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
`;
