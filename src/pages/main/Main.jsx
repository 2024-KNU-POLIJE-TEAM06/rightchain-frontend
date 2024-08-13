import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Main.style';
import Button from '../../common/Button';
import AuthContainer from '../../components/main/AuthContainer';
import ReportList from '../../common/reportList/ReportList';
import Introduction from '../../components/main/Introduction';
import Advertisement from '../../components/main/Advertisement';

const Main = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <S.ButtonContainer>
          <S.ButtonWrapper>
            <Button
              name="Write Report"
              type="page"
              action={() => {
                navigate('write');
              }}
            />
          </S.ButtonWrapper>
          <S.ButtonWrapper>
            <Button
              name="Search Report"
              type="page"
              action={() => {
                navigate('search');
              }}
            />
          </S.ButtonWrapper>
        </S.ButtonContainer>
        <S.ReportListWrapper>
          <ReportList />
        </S.ReportListWrapper>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.AuthWrapper>
          <AuthContainer />
        </S.AuthWrapper>
        <Introduction />
        <S.AdWrapper>
          <Advertisement />
        </S.AdWrapper>
      </S.RightWrapper>
    </S.Wrapper>
  );
};

export default Main;
