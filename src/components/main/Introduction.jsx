import React from 'react';
import * as S from './Introduction.style';
import IntroductionImg from '../../asset/Introduce.png';

const IntroductionContainer = () => {
  return (
    <S.Container>
      <S.ImgWrapper>
        <img src={IntroductionImg} alt="" />
      </S.ImgWrapper>
      <S.MessageWrapper>
        Sue your unfairness!{'\n'}Observe the honest process!
      </S.MessageWrapper>
    </S.Container>
  );
};

export default IntroductionContainer;
