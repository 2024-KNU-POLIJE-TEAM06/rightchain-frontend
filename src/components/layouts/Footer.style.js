import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  width: 100%;
  height: 8rem;
  padding-bottom: 0.5rem;
  margin-top: 3rem;

  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: end;

  padding: 0;
  padding-bottom: 2rem;
  border-top: 1px solid #e0e0e0;

  p {
    font-size: 1.2rem;
    color: #e0e0e0;
  }
`;
