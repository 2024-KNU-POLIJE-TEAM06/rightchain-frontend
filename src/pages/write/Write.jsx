import React from 'react';
import { WriteProvider } from '../../context/WriteContext';
import * as S from './Write.style';
import Banner from '../../common/Banner';
import CategoryList from '../../common/categoryList/CategoryList';
import WriteForm from '../../components/write/WriteForm';

const Write = () => {
  return (
    <WriteProvider>
      <S.Wrapper>
        <S.BannerWrapper>
          <Banner title="Write" />
        </S.BannerWrapper>
        <S.ContentWrapper>
          <S.CategoryWrapper>
            <CategoryList type="write" />
          </S.CategoryWrapper>
          <S.FormWrapper>
            <WriteForm />
          </S.FormWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </WriteProvider>
  );
};

export default Write;
