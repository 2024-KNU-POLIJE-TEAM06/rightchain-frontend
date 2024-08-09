import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Search.style';
import { SearchProvider } from '../../context/SearchContext';
import Banner from '../../common/Banner';
import ReportList from '../../common/reportList/ReportList';
import MyReportList from '../../common/reportList/MyReportList';
import CategoryList from '../../common/categoryList/CategoryList';

const Search = ({ mode }) => {
  return (
    <SearchProvider>
      <S.Wrapper>
        <S.BannerWrapper>
          <Banner title={mode} />
        </S.BannerWrapper>
        <S.ContentWrapper>
          <S.CategoryWrapper>
            <CategoryList type="search" />
          </S.CategoryWrapper>
          <S.ReportListWrapper>
            {mode === 'My Reports' ? <MyReportList /> : <ReportList />}
          </S.ReportListWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </SearchProvider>
  );
};

Search.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Search;
