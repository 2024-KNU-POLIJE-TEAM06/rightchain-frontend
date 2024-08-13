import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import * as S from './AuthContainer.style';
import Button from '../../common/Button';
import UserInfo from './UserInfo';

const LoginSuggestion = () => {
  const { login } = useAuth();
  return (
    <S.Container>
      <S.ButtonWrapper>
        <Button name="Continue with" type="login" action={login} />
      </S.ButtonWrapper>
      <S.MessageWrapper>
        You can use a wider variety of services after logging in.
      </S.MessageWrapper>
    </S.Container>
  );
};

const MyInfo = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.MyInfoWrapper>
        <UserInfo />
      </S.MyInfoWrapper>
      <S.ButtonWrapper>
        <Button
          name="My Reports"
          type="auth"
          action={() => {
            navigate('my-reports');
          }}
        />
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <Button
          name="My Likes"
          type="auth"
          action={() => {
            navigate('my-likes');
          }}
        />
      </S.ButtonWrapper>
    </S.Container>
  );
};

const AuthContainer = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <MyInfo />;
  }
  return <LoginSuggestion />;
};

export default AuthContainer;
