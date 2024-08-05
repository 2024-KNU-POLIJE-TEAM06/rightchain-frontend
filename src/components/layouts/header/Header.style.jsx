import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: auto;
  height: 65px;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid green;
`;

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 2rem;
`;


export const ButtonHome = styled.button`
  height: 40px;
  width: 120px;
  background: white;
  border: 1px white;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
  color: green;
  box-shadow: 1px 2px  #00000014;
`;

export const Button = styled.button`
  cursor: pointer;
`;