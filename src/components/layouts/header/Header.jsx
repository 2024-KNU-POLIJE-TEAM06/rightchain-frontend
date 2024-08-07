import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    handleNavigation('/login'); // Assuming you have a login route
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <S.Wrapper>
      <S.Button onClick={() => handleNavigation('/')}>
        <S.Logo src="/logo.png" alt="logo" />
      </S.Button>
      <S.ButtonHome onClick={() => handleNavigation('/howtouse')}>
        How To Use?
      </S.ButtonHome>
      {isLoggedIn && (
        <S.ButtonHome onClick={handleLogout}>
          Logout
        </S.ButtonHome>
      )}
    </S.Wrapper>
  );
};

export default Header;
