import React, { useState } from 'react';
import rightChain from '../../asset/title.png';
import Modal from './PopupReport';

import {
    Hr,
    RightChain,
    ReportBox,
    Title,
    ContentContainer,
    Description,
    PhotoList,
    BottomSection,
    ButtonContainer,
    BottomButton,
    TextContainer,
    Text,
    Status
} from './EachReport.style';

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
            <RightChain src={rightChain} alt="Report Title" />
            <Hr />
            <ReportBox>
                <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Title>
                <Status>REPORT_SUBMITTED</Status>
                <ContentContainer>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Description>
                </ContentContainer>
            </ReportBox>
            <BottomSection>
                <TextContainer>
                    <Text>📎click and input your file </Text>
                </TextContainer>
                <ButtonContainer>
                    <BottomButton onClick={handleOpenModal}>BlockChain</BottomButton>
                </ButtonContainer>
            </BottomSection>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}></Modal>
        </>
    );
};

export default EachReport;
