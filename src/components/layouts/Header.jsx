import React from 'react';
import { useNavigate } from 'react-router-dom';
import TitleImg from '../../asset/title.png';
import * as S from './Header.style';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleClick = type => {
    navigate(type);
  };

  const onClickLogout = () => {
    logout();
  };

  return (
    <S.Wrapper>
      <S.ButtonHome onClick={() => handleClick('landing')}>
        how to use?
      </S.ButtonHome>
      <S.TitleWrapper>
        <S.TitleImg
          src={TitleImg}
          alt="Title"
          onClick={() => handleClick('/')}
        />
      </S.TitleWrapper>
      {isLoggedIn && (
        <S.ButtonHome onClick={onClickLogout}>Logout</S.ButtonHome>
      )}
    </S.Wrapper>
  );
};

export default Header;
