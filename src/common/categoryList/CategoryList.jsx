import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './CategoryList.style';
import { useWrite } from '../../context/WriteContext';
import { useSearch } from '../../context/SearchContext';

const Category = ({ name, isSelected, onClickCategory }) => {
  return (
    <S.CategoryButton
      onClick={() => onClickCategory(name)}
      selected={isSelected}
    >
      {name}
    </S.CategoryButton>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

const CategoryList = ({ type }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
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

  const context = type === 'write' ? useWrite() : useSearch();
  const { onChangeCategory } = context;

  const onClickCategory = categoryName => {
    if (selectedCategory === categoryName) {
      setSelectedCategory('');
      onChangeCategory('');
    } else {
      setSelectedCategory(categoryName);
      onChangeCategory(categoryName);
    }
  };

  return (
    <S.Wrapper>
      {categories.map(categoryName => (
        <S.ButtonWrapper key={categoryName}>
          <Category
            name={categoryName}
            isSelected={selectedCategory === categoryName}
            onClickCategory={onClickCategory}
          />
        </S.ButtonWrapper>
      ))}
    </S.Wrapper>
  );
};

CategoryList.propTypes = {
  type: PropTypes.string.isRequired, // Ensure that type is passed as a prop
};

export default CategoryList;
