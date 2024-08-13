import styled from 'styled-components';

export const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border: 2px solid #ccc;
  border-radius: 15px;
  padding: 20px 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 카드 사이의 간격 */
`;

export const MainCard = styled.div`
  width: calc(50% - 20px); /* 두 개씩 배치되도록 카드 크기 설정 */
  box-sizing: border-box; /* 패딩과 보더를 포함한 크기 계산 */
  margin-bottom: 20px;
`;

// 나머지 스타일 컴포넌트들...
