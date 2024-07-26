import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <S.Wrapper>
      <S.ButtonHome onClick={handleClick}>RIGHT CHAIN</S.ButtonHome>
    </S.Wrapper>
  );
};

export default Header;
