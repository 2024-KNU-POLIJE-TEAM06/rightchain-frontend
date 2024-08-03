import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GoogleImg from '../asset/GoogleImg.png';

const PageButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: #fff;

  border: none;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  cursor: pointer;
  font-size: 20px;
`;

const AuthButton = styled.button`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #2f590f;

  border: none;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  cursor: pointer;
  font-size: 20px;
  color: #fff;
`;

const Button = ({ name, type, action = () => {} }) => {
  switch (type) {
    case 'page':
      return <PageButton onClick={action}>{name}</PageButton>;
    case 'auth':
      return <AuthButton onClick={action}>{name}</AuthButton>;
    case 'login':
      return (
        <AuthButton onClick={action}>
          <p style={{ marginRight: '10px' }}>{name}</p>
          <img src={GoogleImg} alt="" />
        </AuthButton>
      );
    default:
      return <PageButton onClick={action}>{name}</PageButton>;
  }
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Button;
