import React from 'react';
import { ScrollContainer } from './ReportList.style';

const ReportList = () => {
  return (
    <ScrollContainer>
      {[
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ].map((v, i) => (
        <p key={v}>{i}</p>
      ))}
    </ScrollContainer>
  );
};

export default ReportList;
