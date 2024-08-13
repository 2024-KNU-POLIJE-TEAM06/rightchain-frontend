import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import * as S from './PopupReport.style'; // Import all styles under the 'S' namespace

const Modal = ({ isOpen, onClose, type, submit }) => {
  if (!isOpen) return null;

  const render =
    type === 'block' ? (
      <S.ModalBackdrop onClick={onClose}>
        <S.ModalContent onClick={e => e.stopPropagation()}>
          <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
          <S.TitleBox>Block Chain Wallet</S.TitleBox>
          <S.TextList>
            REPORT_SUBMITTED : https://.....................
          </S.TextList>
          <S.TextList>
            CASE_UNDER_REVIEW : https://.....................
          </S.TextList>
          <S.TextList>
            REVIEN_RESULT_REPORTE : https://.....................
          </S.TextList>
          <S.TextList>
            FINAL_JUDGMENT : https://.....................
          </S.TextList>
          <S.TextList>CASE_CLOSED : https://.....................</S.TextList>
        </S.ModalContent>
      </S.ModalBackdrop>
    ) : (
      <S.ModalBackdrop onClick={onClose}>
        <S.ModalContent onClick={e => e.stopPropagation()}>
          <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
          <S.TitleBox>Are you sure you want to submit?</S.TitleBox>
          <S.TextList>
            This service is blockchain-based and
            <S.RedText> cannot be modified or deleted. </S.RedText>
            Please carefully check and submit any changes you wish to make.
          </S.TextList>
          <S.ButtonContainer>
            <S.ButtonWrapper>
              <Button type="page" name="more check" action={onClose} />
            </S.ButtonWrapper>
            <S.ButtonWrapper>
              <Button type="auth" name="submit" action={submit} />
            </S.ButtonWrapper>
          </S.ButtonContainer>
        </S.ModalContent>
      </S.ModalBackdrop>
    );

  return render;
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
};

export default Modal;
