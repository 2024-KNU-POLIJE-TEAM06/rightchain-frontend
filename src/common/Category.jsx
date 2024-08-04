import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CategoryButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ selected }) => (selected ? '#4D7C3A' : '#729E4F')};
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
`;

const Category = ({ name }) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClickCategory = () => {
    setIsSelected(prev => !prev);
  };

  return (
    <CategoryButton
      onClick={onClickCategory}
      selected={isSelected} // 이 prop은 styled-component로 전달됨
    >
      {name}
    </CategoryButton>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
