import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';

const Header = () => {
  const navigate = useNavigate();
  const [inLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = type => {
    navigate(type);
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <S.Wrapper>
      <S.ButtonHome onClick={() => handleClick('')}>RIGHT CHAIN</S.ButtonHome>
      <S.ButtonHome onClick={() => handleClick('landing')}>
        How To Use?
      </S.ButtonHome>
      {inLoggedIn && <S.ButtonHome>Logout</S.ButtonHome>}
    </S.Wrapper>
  );
};

export default Header;
