import React, { useRef, useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import landingImg from '../../asset/landingImg.png';
import Step1 from '../../asset/step1.svg';
import Step2 from '../../asset/step2.svg';
import Step3 from '../../asset/step3.svg';

import * as S from './Landing.style';

const Landing = () => {
  const [visibleSteps, setVisibleSteps] = useState([false, false, false]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const howToUseSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const timers = [
            setTimeout(() => setVisibleSteps([true, false, false]), 1000),
            setTimeout(() => setVisibleSteps([true, true, false]), 2000),
            setTimeout(() => setVisibleSteps([true, true, true]), 3000),
          ];

          return () => timers.forEach(timer => clearTimeout(timer));
        }

        return null;
      },
      { threshold: 0.5 },
    );

    if (howToUseSectionRef.current) {
      observer.observe(howToUseSectionRef.current);
    }

    return () => {
      if (howToUseSectionRef.current) {
        observer.unobserve(howToUseSectionRef.current);
      }
    };
  }, [hasAnimated]);

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
      <S.HowToUseSection ref={howToUseSectionRef}>
        <S.HowToUseTitleWrapper>
          <S.Title>How To Use</S.Title>
        </S.HowToUseTitleWrapper>
        <S.HowToUseContentWrapper>
          {visibleSteps[0] && <S.HowToUseImg src={Step1} />}
          {visibleSteps[1] && <S.HowToUseImg src={Step2} />}
          {visibleSteps[2] && <S.HowToUseImg src={Step3} />}
        </S.HowToUseContentWrapper>
      </S.HowToUseSection>
    </S.Wrapper>
  );
};

export default Landing;
