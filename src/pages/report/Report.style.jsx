import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputTitle = styled.input`
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

export const InputContent = styled.textarea`
  width: 100%;
  height: 20rem;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

export const InputType = styled.select`
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

export const InputOtherType = styled.input`
  width: 100%;
  height: 1.5rem;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

export const InputFile = styled.input``;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  cursor: pointer;
`;
