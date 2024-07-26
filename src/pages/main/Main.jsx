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
      <S.TitleWrapper>
        <S.Title>RIGHT CHAIN</S.Title>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <S.LeftContentContainer>
          <S.ContentButtonContainer>
            <S.ContentButton onClick={() => onContentButtonClick('report')}>
              Report
            </S.ContentButton>
            <S.ContentButton onClick={() => onContentButtonClick('search')}>
              Search
            </S.ContentButton>
          </S.ContentButtonContainer>
          <S.ReportContainer>Report Container</S.ReportContainer>
        </S.LeftContentContainer>

        <S.RightContentContainer>
          <MainAuthContainer navigate={navigate} />
          <S.HowToUseButton onClick={() => onContentButtonClick('landing')}>
            How To Use Button
          </S.HowToUseButton>
          <S.AdvertisementContainer>
            Advertisement Container
          </S.AdvertisementContainer>
        </S.RightContentContainer>
      </S.ContentWrapper>
    </S.MainWrapper>
  );
};

export default Main;
