import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './MainAuthContainer.style';

const AuthRedirectContainer = ({ navigate }) => {
  const onAuthButtonClick = () => {
    navigate('/auth');
  };

  return (
    <S.AuthButtonContainer>
      <S.Button onClick={onAuthButtonClick}>Sign Up</S.Button>
      <S.Button onClick={onAuthButtonClick}>Sign In</S.Button>
    </S.AuthButtonContainer>
  );
};

AuthRedirectContainer.propTypes = {
  navigate: PropTypes.func.isRequired,
};

const MyInfoContainer = ({ onLogoutButtonClick }) => {
  return (
    <S.MyInfoContainer>
      <S.Button>My Info</S.Button>
      <S.Button onClick={onLogoutButtonClick}>Log Out</S.Button>
    </S.MyInfoContainer>
  );
};

MyInfoContainer.propTypes = {
  onLogoutButtonClick: PropTypes.func.isRequired,
};

const MainAuthContainer = ({ navigate }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogoutButtonClick = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <S.AuthContentContainer>
      {isLoggedIn ? (
        <MyInfoContainer onLogoutButtonClick={onLogoutButtonClick} />
      ) : (
        <AuthRedirectContainer navigate={navigate} />
      )}
    </S.AuthContentContainer>
  );
};

MainAuthContainer.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default MainAuthContainer;
