import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  padding: 1rem 2rem;

  border: 2px solid #ccc;
  border-radius: 1rem;

  overflow-y: auto; /* Enable vertical scrolling */
`;

export const LabelWrapper = styled.p`
  margin: 0.7rem 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 1rem; /* Add some space below the title wrapper */
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;

  font-size: 1rem;
  font-weight: bold;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem; /* Add some space below the content wrapper */
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 22rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  resize: none;
`;

export const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const FileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;

  width: 100%;

  border: 1px solid black;
  border-radius: 0.5rem;

  padding: 0.5rem;

  margin-bottom: 1rem;
`;

export const FileInput = styled.input``;

export const LowContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10%;
  margin-top: auto; /* Push this section to the bottom */
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  width: 70%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 50px;
`;

export const DownloadIconWrapper = styled.a`
  margin-left: 10px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }

  svg {
    vertical-align: middle;
  }
`;
