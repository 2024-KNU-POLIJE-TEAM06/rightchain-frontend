import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './PopupReport.style'; // Import all styles under the 'S' namespace

const Modal = ({ isOpen, onClose, children }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isOpen) return null;

  const handleMinimize = () => {
    setIsMinimized(prevState => !prevState);
  };

  return (
    <S.ModalBackdrop onClick={onClose}>
      <S.ModalContent
        onClick={e => e.stopPropagation()}
        style={{ display: isMinimized ? 'none' : 'flex' }}
      >
        <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
        <S.MinimizeButton onClick={handleMinimize}>−</S.MinimizeButton>
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
        <S.TextList>FINAL_JUDGMENT : https://.....................</S.TextList>
        <S.TextList>CASE_CLOSED : https://.....................</S.TextList>
        <div>{children}</div>
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
