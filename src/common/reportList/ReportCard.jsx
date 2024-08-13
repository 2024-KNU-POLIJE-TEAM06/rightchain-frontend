import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ReportCard.style';
import likedImage from '../../asset/heart-fill.png';

const ReportCard = ({ title, category, date, author, likes }) => {
  const truncatedTitle = title.length > 10 ? `${title.slice(0, 10)}...` : title;

  return (
    <S.MainCard>
      <S.CardTitleBox>{truncatedTitle}</S.CardTitleBox>
      <S.CategoryBox>
        <S.CategoryText>{category}</S.CategoryText>
        <S.DateText>{date}</S.DateText>
      </S.CategoryBox>
      <S.AuthorText>{author}</S.AuthorText>
      <S.BottomBox>
        <img src={likedImage} alt="Liked" />
        <S.LikedText>{likes}</S.LikedText>
      </S.BottomBox>
    </S.MainCard>
  );
};

ReportCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default ReportCard;
