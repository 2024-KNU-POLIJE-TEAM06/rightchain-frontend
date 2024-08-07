import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainAuthContainer from '../../components/auth/MainAuthContainer';
import Card from '../../components/card/Card';
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
            <S.ContentButton1 onClick={() => onContentButtonClick('search')}>
              Report Search
            </S.ContentButton1>
          </S.ContentButtonContainer>
               </S.LeftContentContainer>

        <S.RightContentContainer>
          <MainAuthContainer navigate={navigate} />
          <S.AdvertisementContainer>
            You can use a wider variety of services after logging in.
          </S.AdvertisementContainer>
          <S.Logo src="logo20.png" alt="logo"/>
          <S.AdvertisementContainer1>
          Sue your unfairness!
          Observe the honest process!
          </S.AdvertisementContainer1>
          <Card />
        </S.RightContentContainer>
      </S.ContentWrapper>
      <></>
    </S.MainWrapper>
  );
};

export default Main;
