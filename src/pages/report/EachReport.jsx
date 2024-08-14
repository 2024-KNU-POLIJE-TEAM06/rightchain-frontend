import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../api/axios';
import Modal from '../../common/modal/PopupReport';
import * as S from './EachReport.style';

const EachReport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportData, setReportData] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const steps = [
    'REPORT_SUBMITTED',
    'CASE_UNDER_REVIEW',
    'REVIEW_RESULT_REPORTED',
    'FINAL_JUDGEMENT',
    'CASE_CLOSED',
  ];

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const reportId = queryParams.get('id');

  const handleLike = async () => {
    try {
      const response = await api.post(`/likes/${reportId}`);
      if (response.status === 201 && !isLiked) {
        setReportData(prevData => ({
          ...prevData,
          likes: prevData.likes + 1,
        }));
        setIsLiked(true);
      } else {
        setReportData(prevData => ({
          ...prevData,
          likes: prevData.likes - 1,
        }));
        setIsLiked(false);
      }
    } catch (error) {
      console.error('Error liking the report:', error);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await api.get(`/reports/${reportId}`);
        setReportData(response.data);
        if (response.data?.chains?.length) {
          setCurrentStep(response.data.chains.length);
        }
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };

    fetchReportData();
  }, [reportId]);

  if (!reportData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <S.ReportBox>
        <S.ProgressBarContainer>
          {steps.map((step, index) => (
            <S.ProgressStep
              key={step}
              active={index + 1 <= currentStep}
              index={index}
            >
              <span>{step}</span>
            </S.ProgressStep>
          ))}
        </S.ProgressBarContainer>
        <S.Title>{reportData.title}</S.Title>
        <S.Status>{reportData.reportType}</S.Status>
        <S.ReportInfoContainer>
          <S.ReportInfo>Author: {reportData.accountName}</S.ReportInfo>
          <S.ReportInfo>
            Date: {reportData.createTime.substring(0, 10)}
          </S.ReportInfo>
        </S.ReportInfoContainer>
        <S.ContentContainer>
          <S.Description>{reportData.content}</S.Description>
        </S.ContentContainer>
      </S.ReportBox>
      <S.BottomSection>
        <S.TextContainer>
          <S.Text>📎 Click and input your file</S.Text>
        </S.TextContainer>
        <S.ButtonContainer>
          <S.BottomButton
            liked={isLiked ? '#f3d2f1' : 'white'}
            onClick={handleLike}
          >
            Like: {reportData.likes}
          </S.BottomButton>
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
