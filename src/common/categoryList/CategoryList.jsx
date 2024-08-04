import React from 'react';
import Category from '../Category';
import * as S from './CategoryList.style';

const CategoryList = () => {
  const categories = [
    'Bullying',
    'Discrimination',
    'Harassment',
    'Privacy Violation',
    'Freedom of speech violation',
    'Property Rights Violation',
    'Scamming',
    'Others',
  ];

  return (
    <S.Wrapper>
      {categories.map(category => (
        <S.ButtonWrapper key={category}>
          <Category name={category} />
        </S.ButtonWrapper>
      ))}
    </S.Wrapper>
  );
};

export default CategoryList;
