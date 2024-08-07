import React from 'react';
import {
  MainCard,
  CardTitleBox,
  CategoryBox,
  PictureText,
  DateText,
  AuthorText,
  DescText,
  BottomBox,
  LikedText,
  ScrollContainer,
} from './MyReportList.style';
import likedImage from '../../asset/heart-fill.png';


const reportData = [
  { id: 1, title: "Report 1", picture: "picture1.jpg", date: "2024-08-05", author: "Author 1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", likes: 200 },
  { id: 2, title: "Report 2", picture: "picture2.jpg", date: "2024-08-06", author: "Author 2", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", likes: 150 },
  { id: 3, title: "Report 3", picture: "picture3.jpg", date: "2024-08-06", author: "Author 3", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", likes: 157 },
  { id: 4, title: "Report 4", picture: "picture4.jpg", date: "2024-08-06", author: "Author 4", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", likes: 190 },
  { id: 5, title: "Report 5", picture: "picture5.jpg", date: "2024-08-06", author: "Author 5", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", likes: 157 },
  { id: 6, title: "Report 6", picture: "picture6.jpg", date: "2024-08-06", author: "Author 6", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", likes: 190 },
];

const MyReportItem = ({ title, picture, date, author, desc, likes }) => {
  return (
    <MainCard>
      <CardTitleBox>{title}</CardTitleBox>
      <CategoryBox>
        <PictureText>{picture}</PictureText>
        <DateText>{date}</DateText>
      </CategoryBox>
      <AuthorText>{author}</AuthorText>
      <DescText>{desc}</DescText>
      <BottomBox>
        <img src={likedImage} alt="Liked" />
        <LikedText>{likes}+</LikedText>
      </BottomBox>
    </MainCard>
  );
};

const MyReportList = () => {
  return (
    <ScrollContainer>
      {reportData.map((report) => (
        <MyReportItem
          key={report.id}
          title={report.title}
          picture={report.picture}
          date={report.date}
          author={report.author}
          desc={report.desc}
          likes={report.likes}
        />
      ))}
    </ScrollContainer>
  );
};

export default MyReportList;
