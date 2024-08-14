import React, { useState, useEffect } from 'react';
import ad1 from '../../asset/ad1.png';
import ad2 from '../../asset/ad2.png';
import ad3 from '../../asset/ad3.png';

import * as S from './Advertisement.style';

const Advertisement = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const ads = [ad1, ad2, ad3];

  useEffect(() => {
    const adTimer = setInterval(() => {
      setCurrentAdIndex(prevIndex => (prevIndex + 1) % ads.length);
    }, 3000);

    return () => clearInterval(adTimer);
  }, [ads.length]);

  return (
    <S.AdWrapper>
      <S.AdContainer>
        <S.AdImage
          src={ads[currentAdIndex]}
          alt={`Advertisement ${currentAdIndex + 1}`}
        />
      </S.AdContainer>
      <S.IndicatorContainer>
        {ads.map((_, index) => (
          <S.Indicator key={_} active={index === currentAdIndex} />
        ))}
      </S.IndicatorContainer>
    </S.AdWrapper>
  );
};

export default Advertisement;
