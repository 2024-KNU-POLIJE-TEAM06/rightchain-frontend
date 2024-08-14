import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Search.style';
import { SearchProvider } from '../../context/SearchContext';
import Banner from '../../common/Banner';
import ReportList from '../../common/reportList/ReportList';
import CategoryList from '../../common/categoryList/CategoryList';

const Search = ({ mode }) => {
  let type;

  if (mode === 'search') {
    type = 'topLiked';
  } else if (mode === 'My Reports') {
    type = 'myReport';
  } else if (mode === 'My Likes') {
    type = 'myLikes';
  }

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
            <ReportList type={type} />
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
