import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Header.style'; // Memastikan semua elemen telah diimpor

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = (type) => {
    navigate(type);
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <S.Wrapper>
      <S.Button onClick ={() => handleClick('')}>
      <S.Logo src="/logo.png" alt="logo" />
      </S.Button>
      <S.ButtonHome onClick={() => handleClick('/howtouse')}>
        How To Use?
      </S.ButtonHome>
      {isLoggedIn && <S.ButtonHome>Logout</S.ButtonHome>}
    </S.Wrapper>
  );
};

export default Header;
