// Modal.jsx
import React from 'react';
import { ModalBackdrop, ModalContent, CloseButton, TitleBox, TextList } from './PopupReport.style';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <ModalBackdrop onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <TitleBox>Title</TitleBox>
                <TextList>https:// link 1</TextList>
                <TextList>https:// link 2</TextList>
                <TextList>https:// link 3</TextList>
                <TextList>https:// link 4</TextList>
                <div>{children}</div>
            </ModalContent>
        </ModalBackdrop>
    );
};

export default Modal;
