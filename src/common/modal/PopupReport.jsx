import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import api from '../../api/axios';
import * as S from './PopupReport.style'; // Import all styles under the 'S' namespace

const Modal = ({ isOpen, onClose, blockData, type, submit }) => {
  const [hoveredAddress, setHoveredAddress] = useState(null);
  const [walletInfo, setWalletInfo] = useState(null);

  const handleAddressClick = async address => {
    try {
      const response = await api.get(`wallets?address=${address}`);
      setWalletInfo(response.data);
      setHoveredAddress(address);
    } catch (error) {
      console.error('Error fetching wallet info:', error);
    }
  };

  if (!isOpen) return null;

  const render =
    type === 'block' ? (
      <S.ModalBackdrop onClick={onClose}>
        <S.ModalContent onClick={e => e.stopPropagation()}>
          <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
          <S.TitleBox>Block Chain Wallet</S.TitleBox>
          {blockData.map(chain => (
            <S.ChainTextList
              onClick={() => handleAddressClick(chain.address)}
              key={chain.address}
            >
              {chain.progressStatus}: <p>{chain.address}</p>
              {hoveredAddress === chain.address && walletInfo && (
                <S.Tooltip>
                  <div>Wallet name: {chain.progressStatus}</div>
                  <div>Address: {walletInfo.address}</div>
                  <div>Balance: {walletInfo.balance}</div>
                  <div>Transactions: {walletInfo.transactions}</div>
                  <div>Count transaction: {walletInfo.countTransaction}</div>
                  <div>First transaction: {walletInfo.firstTransaction}</div>
                  <div>Last transaction: {walletInfo.lastTransaction}</div>
                </S.Tooltip>
              )}
            </S.ChainTextList>
          ))}
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
  blockData: PropTypes.arrayOf(
    PropTypes.shape({
      walletName: PropTypes.string.isRequired,
      progressStatus: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Modal;
