import React from 'react';
import YouTube from 'react-youtube';
import landingImg from '../../asset/landingImg.png';
import howToUseImg from '../../asset/howToUseImg.svg';

import * as S from './Landing.style';

const Landing = () => {
  const videoOptions = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <S.Wrapper>
      <S.IntroductionSection>
        <S.IntroductionLeft>
          <S.YoutubeVideoWrapper>
            <YouTube videoId="f1KIR8ABnuo" opts={videoOptions} />
          </S.YoutubeVideoWrapper>
        </S.IntroductionLeft>
        <S.IntroductionRight>
          <S.Title>About Service</S.Title>
          <S.DescriptionContainer>
            <S.IntroductionDescription>
              Comprehensive case management platform to ensure the reliability
              of all parties involved in the process.
            </S.IntroductionDescription>
            <S.DividingLine />
            <S.IntroductionDescription>
              By utilizing blockchain technology, the platform ensures data
              immutability, thereby preventing data manipulation. It enhances
              transparency and reliability of the processing procedures by
              showing users unaltered data.
            </S.IntroductionDescription>
          </S.DescriptionContainer>
        </S.IntroductionRight>
      </S.IntroductionSection>
      <S.SectionDivideImg src={landingImg} />
      <S.HowToUseSection>
        <S.HowToUseTitleWrapper>
          <S.Title>How To Use</S.Title>
        </S.HowToUseTitleWrapper>
        <S.HowToUseContentWrapper>
          <S.HowToUseImg src={howToUseImg} />
        </S.HowToUseContentWrapper>
      </S.HowToUseSection>
    </S.Wrapper>
  );
};

export default Landing;
