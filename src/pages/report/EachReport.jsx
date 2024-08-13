import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from '../../common/modal/PopupReport';
import * as S from './EachReport.style';

const EachReport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const reportId = queryParams.get('id');

  const reportData = localStorage.getItem('reportData');
  const parsedData = JSON.parse(reportData);
  const selectedReport = parsedData[reportId - 1];

  if (!selectedReport) {
    return <div>Report not found</div>;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.ReportBox>
        <S.Title>{selectedReport.title}</S.Title>
        <S.ReportInfoContainer>
          <S.ReportInfo>Author : {selectedReport.author}</S.ReportInfo>
          <S.ReportInfo>Date : {selectedReport.date}</S.ReportInfo>
        </S.ReportInfoContainer>
        <S.ContentContainer>
          <S.Description>{selectedReport.content}</S.Description>
        </S.ContentContainer>
        <S.StatusContainer>
          <S.Status>{selectedReport.category}</S.Status>
          <S.Status>REPORT_SUBMITTED</S.Status>
        </S.StatusContainer>
      </S.ReportBox>
      <S.BottomSection>
        <S.TextContainer>
          <S.Text>📎click and input your file </S.Text>
        </S.TextContainer>
        <S.ButtonContainer>
          <S.BottomButton>Like : {selectedReport.likes}</S.BottomButton>
          <S.BottomButton onClick={handleOpenModal}>BlockChain</S.BottomButton>
        </S.ButtonContainer>
      </S.BottomSection>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type="block"
        submit={() => {}}
      />
    </>
  );
};

export default EachReport;
