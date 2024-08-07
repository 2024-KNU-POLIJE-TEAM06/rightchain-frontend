import styled from 'styled-components';

export const RightChain = styled.img`
    width: 25%;
    align-items: center;
    height: auto;
`;

export const Hr = styled.hr`
    width: 100%;
    border: 0;
    border-top: 1px solid #ddd;
    margin: 30px;
    height: 2px;
    background: #3F7317;
`;

export const ReportBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    padding: 40px;
    box-sizing: border-box;
    width: 95%;
`;

export const Title = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
    color: black;
    margin-bottom: 20px;
    width: 100%;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row; 
    margin-top: 20px;
    width: 100%;
`;

export const Description = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: justify;
    flex: 3;
    margin-right: 20px;
    white-space: pre-wrap;
`;

export const PhotoList = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;

    img {
        width: 100%;
        height: auto;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    width: 95%;
`;

export const BottomButton = styled.button`
    width: 20%;
    height: 60px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700;
    background-color: white;
    color: black;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s ease;
    box-shadow: 0px 4px 4px 0px #00000040;
`;
