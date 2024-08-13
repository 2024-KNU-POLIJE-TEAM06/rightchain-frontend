import React, { useState } from 'react';
import FiDownload from '../../asset/downloadIcon.png';
import Modal from '../../common/modal/PopupReport';
import { useWrite } from '../../context/WriteContext';
import * as S from './WriteForm.style';
import Button from '../../common/Button';

const WriteForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    form,
    errorMessage,
    onChangeForm,
    onChangeFile,
    validateForm,
    submitForm,
  } = useWrite();
  const { title, content, files } = form;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onClickSubmit = () => {
    if (validateForm()) {
      handleOpenModal();
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.LabelWrapper>Title</S.LabelWrapper>
          <S.TitleInput name="title" value={title} onChange={onChangeForm} />
        </S.TitleWrapper>
        <S.ContentWrapper>
          <S.LabelWrapper>Content</S.LabelWrapper>
          <S.ContentInput
            name="content"
            value={content}
            onChange={onChangeForm}
          />
        </S.ContentWrapper>
        {files.map((fileObj, index) => (
          <S.FileWrapper key={String(fileObj)}>
            <S.LabelWrapper>File {index + 1}</S.LabelWrapper>
            <S.FileContainer>
              <S.FileInput type="file" onChange={e => onChangeFile(e, index)} />
              {fileObj.file && (
                <S.DownloadIconWrapper
                  href={fileObj.fileURL}
                  download={fileObj.file.name}
                >
                  <img
                    src={FiDownload}
                    alt="download"
                    style={{ width: '20px' }}
                  />
                </S.DownloadIconWrapper>
              )}
            </S.FileContainer>
          </S.FileWrapper>
        ))}
        <S.LowContentContainer>
          <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
          <S.ButtonWrapper>
            <Button name="Submit" type="auth" action={onClickSubmit} />
          </S.ButtonWrapper>
        </S.LowContentContainer>
      </S.Wrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type="submit"
        submit={submitForm}
      />
    </>
  );
};

export default WriteForm;
