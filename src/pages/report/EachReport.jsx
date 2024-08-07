import React, { useState } from 'react';
import rightChain from '../../asset/title.png';
import tempImage1 from '../../asset/temp-image-1.png';
import tempImage2 from '../../asset/temp-image-2.png';
import Modal from './PopupReport';

import {
    Hr,
    RightChain,
    ReportBox,
    Title,
    ContentContainer,
    Description,
    PhotoList,
    ButtonContainer,
    BottomButton,
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
                <ContentContainer>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Description>
                    <PhotoList>
                        <img src={tempImage1} alt="Photo 1" />
                        <img src={tempImage2} alt="Photo 2" />
                    </PhotoList>
                </ContentContainer>
            </ReportBox>
            <ButtonContainer>
                <BottomButton onClick={handleOpenModal}>Learn More</BottomButton>
            </ButtonContainer>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}></Modal>
        </>
    );
};

export default EachReport;
