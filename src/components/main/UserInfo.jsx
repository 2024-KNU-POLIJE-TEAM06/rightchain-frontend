import React from 'react';
import styled from 'styled-components';
import HeartImg from '../../asset/heart-fill.png';
import NoteImg from '../../asset/journal-text.png';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  border: none;
  border-radius: 15px;

  background-color: #729e4f;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  justify-content: center;
  align-items: center;

  color: #fff;

  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
`;

const UserIdWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 50%;

  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  font-size: 30px;
`;

const UserActContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;

  padding: 0 2rem;

  justify-content: space-around;
  align-items: center;
`;

const UserActWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  font-size: 20px;
`;

const UserInfo = () => {
  return (
    <InfoWrapper>
      <UserIdWrapper>ID: User0612</UserIdWrapper>
      <UserActContainer>
        <UserActWrapper>
          <img src={NoteImg} alt="" style={{ marginRight: '10px' }} />
          <p style={{ marginRight: '10px' }}>1</p>
        </UserActWrapper>
        <UserActWrapper>
          <img src={HeartImg} alt="" style={{ marginRight: '10px' }} />
          <p style={{ marginRight: '10px' }}>1</p>
        </UserActWrapper>
      </UserActContainer>
    </InfoWrapper>
  );
};

export default UserInfo;
