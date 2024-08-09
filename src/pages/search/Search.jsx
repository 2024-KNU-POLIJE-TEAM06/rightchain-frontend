import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './Search.style';
import Banner from '../../common/Banner';
import ReportList from '../../common/reportList/ReportList';
import MyReportList from '../../common/reportList/MyReportList';
import CategoryList from '../../common/categoryList/CategoryList';
import { useAuth } from '../../context/AuthContext';

const Search = ({ mode }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (mode !== 'Search' && !isLoggedIn) {
      alert('로그인 후 사용 가능합니다. 메인 페이지로 돌아갑니다.');
      navigate('/'); // 메인 페이지로 리다이렉트
    }
  }, [mode, isLoggedIn, navigate]);

  return (
    <S.Wrapper>
      <S.BannerWrapper>
        <Banner title={mode} />
      </S.BannerWrapper>
      <S.ContentWrapper>
        <S.CategoryWrapper>
          <CategoryList />
        </S.CategoryWrapper>
        <S.ReportListWrapper>
          <MyReportList />
        </S.ReportListWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

Search.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Search;
