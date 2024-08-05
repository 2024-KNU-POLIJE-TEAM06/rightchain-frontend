import React from 'react';
import * as S from './Howtouse.style';

const Howtouse = () => {
  return (
    <S.Container>
      <S.Title>
        How To Use
      </S.Title>
      <S.ContentContainer>
        <S.ContentWrapper>
          <S.Logo src="image.png" alt="logo" />
          <S.Heading>STEP 1</S.Heading>
          <S.Description>Please log in to Google to use the service.</S.Description>
        </S.ContentWrapper>
        <S.ContentWrapper1>
        <S.Logo1 src="illustration-document-icon.png" alt="logo" />
          <S.Heading1>STEP 2</S.Heading1>
          <S.Description1>Please select a category and fill out the report. 
          The more detailed the content, the better.</S.Description1>
        </S.ContentWrapper1>
        <S.ContentWrapper2>
          <S.Heading2>STEP 3</S.Heading2>
          <S.Description2>After writing is completed, 
          you can see the real-time process transparently through the blockchain.</S.Description2>
        </S.ContentWrapper2>
      </S.ContentContainer>
    </S.Container>
  );
};

export default Howtouse;
