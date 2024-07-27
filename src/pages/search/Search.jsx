import React, { useState } from 'react';
import * as S from './Search.style';

const Search = () => {
  const [search, setSearch] = useState('');

  const onClickSearch = () => {
    localStorage.setItem('search', search);
  };

  const onchangeSearch = e => {
    setSearch(e.target.value);
  };

  return (
    <S.Wrapper>
      <S.SearchUtilContainer>
        <S.Title>Search</S.Title>
        <S.SearchContainer>
          <S.InputSearch
            onChange={onchangeSearch}
            type="text"
            placeholder="Search..."
          />
          <S.ButtonSearch onClick={onClickSearch}>Search</S.ButtonSearch>
        </S.SearchContainer>
        <S.CategoryWrapper>
          <div>Category 1</div>
          <div>Category 2</div>
          <div>Category 3</div>
        </S.CategoryWrapper>
      </S.SearchUtilContainer>
      <S.ReportListWrapper>
        <div>Report 1</div>
        <div>Report 2</div>
      </S.ReportListWrapper>
    </S.Wrapper>
  );
};

export default Search;
