import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = type => {
    navigate(type);
  };

  return (
    <S.Wrapper>
      <S.ButtonHome onClick={() => handleClick('')}>RIGHT CHAIN</S.ButtonHome>
      <S.ButtonHome onClick={() => handleClick('landing')}>
        How To Use?
      </S.ButtonHome>
    </S.Wrapper>
  );
};

export default Header;
