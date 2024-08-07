import React, { useState } from 'react';
import { ModalBackdrop, ModalContent, CloseButton, MinimizeButton, TitleBox, TextList } from './PopupReport.style';

const Modal = ({ isOpen, onClose, children }) => {
    const [isMinimized, setIsMinimized] = useState(false);

    if (!isOpen) return null;

    const handleMinimize = () => {
        // setIsMinimized(prevState => !prevState);
    };

    return (
        <ModalBackdrop onClick={onClose}>
            <ModalContent
                onClick={(e) => e.stopPropagation()}
                style={{ display: isMinimized ? 'none' : 'flex' }}
            >
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <MinimizeButton onClick={handleMinimize}>−</MinimizeButton>
                <TitleBox>Block Chain Wallet</TitleBox>
                <TextList>REPORT_SUBMITTED : https://.....................</TextList>
                <TextList>CASE_UNDER_REVIEW : https://.....................</TextList>
                <TextList>REVIEN_RESULT_REPORTE : https://.....................</TextList>
                <TextList>FINAL_JUDGMENT  : https://.....................</TextList>
                <TextList>CASE_CLOSED  : https://.....................</TextList>
                <div>{children}</div>
            </ModalContent>
        </ModalBackdrop>
    );
};

export default Modal;
