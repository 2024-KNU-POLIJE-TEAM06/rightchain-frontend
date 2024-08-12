import styled from 'styled-components';

export const ScrollableContainer = styled.div`
  width: 769px; 
  height: 300px; 
  top: 200px;
  left: 200px; 
  border: 1px solid #000000; 
  border-radius: 12px;  
  overflow-y: scroll; 
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
  position: absolute;
`;

export const MainCard = styled.div`
  background: #D6E8C7;
  box-shadow: 0px 4px 4px 2px #00000040;
  width: 360px;
  height: 265px;
  margin-inline-end: 10px;
  margin-bottom: 20px;
  border-radius: 12px;
  position: relative;
`;
export const CardTitleBox = styled.span`
  width: 253px;
height: 44px;
top: 20px;
left: 53px;
padding: 4px 0px 4px 0px;
gap: 0px;
border-radius: 0.5rem;
opacity: 0px;
background: #A1C188;
position: absolute;
`;

export const TextTitle = styled.p`
width: 53px;
height: 36px;
top: -10px;
left: 100px;
gap: 0px;
opacity: 0px;
font-family: Poppins;
font-size: 24px;
font-weight: 700;
line-height: 36px;
text-align: center;
color: #FFFFFF;
position: absolute;
`;

export const CardCategory = styled.p`
width: 117px;
height: 36px;
top: 80px;
left: 200px;
gap: 0px;
opacity: 0px;
font-family: Poppins;
font-size: 24px;
font-weight: 700;
line-height: 36px;
text-align: right;
color: #6E9154;
position: absolute;
`;

export const Date = styled.p`
width: 94px;
height: 23px;
top: 121px;
left: 221px;
gap: 0px;
opacity: 0px;
font-family: Poppins;
font-size: 15px;
font-weight: 700;
line-height: 22.5px;
text-align: right;
color: #6E9154;
position: absolute;
`;

export const Likeborder =styled.div`
width: 98px;
height: 39px;
top: 210px;
left: 17px;
gap: 0px;
border-radius: 0.5rem;
opacity: 0px;
background: #729E4F;
position: absolute;
`;

export const Liketitle = styled.p`
width: 48px;
height: 7px;
top: -5px;
left: 23px;
gap: 0px;
opacity: 0px;
font-family: Poppins;
font-size: 7px;
font-weight: 400;
line-height: 7.5px;
text-align: center;
color: #2F590F;
position: absolute;
`;

export const NumberLike = styled.p`
width: 48px;
height: 28px;
top: -16px;
left: 33px;
gap: 0px;
opacity: 0px;
font-family: Poppins;
font-size: 20px;
font-weight: 700;
line-height: 30px;
letter-spacing: -1px;
text-align: left;
color: #EAF7CE;
position: absolute;
`;

export const LogoHeart = styled.img`
width: 15.3px;
height: 15px;
top: 14px;
left: 16px;
gap: 0px;
opacity: 0px;
position: absolute;
`;

export const Author = styled.p`
width: 37px;
height: 17px;
top: 143px;
left: 276px;
gap: 0px;
opacity: 0px;
font-family: Poppins;
font-size: 11px;
font-weight: 300;
line-height: 16.5px;
text-align: right;
color: #6E9154;
position: absolute;
`;