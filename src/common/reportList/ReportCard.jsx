import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ReportCard.style';
import likedImage from '../../asset/heart-fill.png';

const ReportCard = ({ title, category, date, author, likes, isCaseClosed }) => {
  const truncatedTitle = title.length > 10 ? `${title.slice(0, 10)}...` : title;

  return (
    <S.MainCard>
      <S.CardTitleBox>{truncatedTitle}</S.CardTitleBox>
      <S.CategoryBox>
        <S.CategoryText>{category}</S.CategoryText>
        <S.DateText>{date}</S.DateText>
      </S.CategoryBox>
      <S.AuthorText>{author}</S.AuthorText>
      <S.BottomContainer>
        <S.BottomBox>
          <img src={likedImage} alt="Liked" />
          <S.LikedText>{likes}</S.LikedText>
        </S.BottomBox>
        {isCaseClosed && <S.CaseBox>Case Closed</S.CaseBox>}
      </S.BottomContainer>
    </S.MainCard>
  );
};

ReportCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  isCaseClosed: PropTypes.bool.isRequired,
};

export default ReportCard;
