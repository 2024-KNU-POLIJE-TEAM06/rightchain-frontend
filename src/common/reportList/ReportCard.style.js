import styled from 'styled-components';

export const ScrollContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 30px;
  row-gap: 20px;
  overflow-y: scroll;
  padding: 10px;
  height: 100vh;
`;

export const MainCard = styled.div`
  background: #d6e8c7;
  box-shadow: 0px 4px 4px 2px #00000040;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  padding-bottom: 60px;
  width: 100%;
  height: auto;
  position: relative;
`;

export const CardTitleBox = styled.div`
  background: #a1c188;
  width: 70%;
  height: 50px;
  position: relative;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
`;

export const CategoryBox = styled.div`
  background: #d6e8c7;
  width: 95%;
  height: auto;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  border-radius: 8px;
  padding: 0;
  box-sizing: border-box;
`;

export const CategoryText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 19.5px;
  text-align: center;
  color: #000;
`;

export const DateText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-align: right;
  color: #6e9154;
`;

export const AuthorText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 300;
  text-align: right;
  color: #6e9154;
  width: 100%;
  text-align: right;
  padding: 10px;
  border-radius: 8px;
  color: #6e9154;
`;

export const DescText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: center;
  color: #000;
  margin-bottom: 10px;
`;

export const BottomBox = styled.div`
  background: #729e4f;
  width: 30%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  box-sizing: border-box;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const LikedText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -1px;
  text-align: left;
  margin-left: 10px;
`;
