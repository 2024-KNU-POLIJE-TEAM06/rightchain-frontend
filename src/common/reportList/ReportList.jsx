import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSearch } from '../../context/SearchContext';
import api from '../../api/axios';
import ReportCard from './ReportCard';
import * as S from './ReportList.style';

const ReportList = ({ type }) => {
  const [ReportData, setReportData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const navigate = useNavigate();
  const { category, searchKeyword } = useSearch() || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = [];
        switch (type) {
          case 'topLiked': {
            const topLikedResponse = await api.get('/reports/top-liked');
            data = topLikedResponse?.data?.content || [];
            break;
          }
          case 'myReport': {
            const myReportResponse = await api.get('/reports/my-reports');
            data = myReportResponse?.data?.content || [];
            break;
          }
          case 'myLikes': {
            const myLikesResponse = await api.get('/reports/my-likes');
            data = myLikesResponse?.data?.content || [];
            break;
          }
          default: {
            const topLikedResponse = await api.get('/reports/top-liked');
            data = topLikedResponse?.data?.content || [];
            break;
          }
        }
        setOriginalData(Array.isArray(data) ? data : []);
        setReportData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching report data:', error);
        setOriginalData([]);
        setReportData([]);
      }
    };

    fetchData();
  }, [type]);

  useEffect(() => {
    if (type === 'topLiked') return;

    const filteredData = originalData.filter(v => {
      const matchesCategory = category === 'all' || v.reportType === category;
      const matchesSearch =
        !searchKeyword ||
        v.title.toLowerCase().includes(searchKeyword.toLowerCase());

      return matchesCategory && matchesSearch;
    });
    setReportData(filteredData);
  }, [searchKeyword, category, originalData, type]);

  const onClickCard = id => {
    navigate(`/each-report?id=${id}`);
  };

  return (
    <S.ScrollContainer>
      <S.Wrapper>
        {ReportData.map(v => (
          <S.MainCard
            key={`${v.title}-${v.createTime}`}
            onClick={() => onClickCard(v.reportId)}
          >
            <ReportCard
              key={v.id}
              title={v.title}
              category={v.reportType}
              date={v.createTime.substring(0, 10)}
              author={v.accountName}
              likes={v.likes}
              isCaseClosed={v.chains.length === 5}
            />
          </S.MainCard>
        ))}
      </S.Wrapper>
    </S.ScrollContainer>
  );
};

ReportList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ReportList;
