import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReportCard from './ReportCard';
import * as S from './ReportList.style';

const ReportList = () => {
  const storedData = localStorage.getItem('reportData');
  const ReportData = storedData ? JSON.parse(storedData) : [];
  const navigate = useNavigate();

  const onClickCard = id => {
    navigate(`/each-report?id=${id}`);
  };

  return (
    <S.ScrollContainer>
      <S.Wrapper>
        {ReportData.map(v => (
          <S.MainCard
            key={`${v.title}-${v.date}`}
            onClick={() => onClickCard(v.id)}
          >
            <ReportCard
              key={v.id}
              title={v.title}
              category={v.category}
              date={v.date}
              author={v.author}
              desc={v.desc}
              likes={v.likes}
            />
          </S.MainCard>
        ))}
      </S.Wrapper>
    </S.ScrollContainer>
  );
};

export default ReportList;
