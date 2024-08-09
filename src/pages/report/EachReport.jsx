import React, { useState } from 'react';
import rightChain from '../../asset/title.png';
import Modal from './PopupReport';

import * as S from './EachReport.style'; // Import all styles under the 'S' namespace

const EachReport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.RightChain src={rightChain} alt="Report Title" />
      <S.Hr />
      <S.ReportBox>
        <S.Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </S.Title>
        <S.Status>REPORT_SUBMITTED</S.Status>
        <S.ContentContainer>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </S.Description>
        </S.ContentContainer>
      </S.ReportBox>
      <S.BottomSection>
        <S.TextContainer>
          <S.Text>📎click and input your file </S.Text>
        </S.TextContainer>
        <S.ButtonContainer>
          <S.BottomButton onClick={handleOpenModal}>BlockChain</S.BottomButton>
        </S.ButtonContainer>
      </S.BottomSection>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default EachReport;
