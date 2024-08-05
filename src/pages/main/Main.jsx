import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainAuthContainer from '../../components/auth/MainAuthContainer';
import * as S from './Main.style';

const Main = () => {
  const navigate = useNavigate();

  const onContentButtonClick = type => {
    navigate(`/${type}`);
  };

  return (
    <S.MainWrapper>
      <S.ContentWrapper>
        <S.LeftContentContainer>
          <S.ContentButtonContainer>
            <S.ContentButton onClick={() => onContentButtonClick('report')}>
              Write Report
            </S.ContentButton>
            <S.ContentButton onClick={() => onContentButtonClick('search')}>
              Report Search
            </S.ContentButton>
          </S.ContentButtonContainer>
               </S.LeftContentContainer>

        <S.RightContentContainer>
          <MainAuthContainer navigate={navigate} />
          <S.AdvertisementContainer>
            Advertisement Container
          </S.AdvertisementContainer>
        </S.RightContentContainer>
      </S.ContentWrapper>
    </S.MainWrapper>
  );
};

export default Main;
