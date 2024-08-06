import React from 'react';
import * as S from './Landing.style';

const Landing = () => {
    return (
        <div>
            <S.Container>
                <S.Logo src="logo.jpeg" alt="logo"/>
                <S.Button href="">About Us</S.Button>
                <S.Button href="howtouse">How To Use</S.Button>
                <S.Button href="">Sign In</S.Button>
                <S.Description>
                    Comprehensive case management platform to ensure the
                    reliability of all parties involved in the process.
                </S.Description>
                <S.Description1>
                    By utilizing blockchain technology, the platform
                    ensures data immutability, thereby preventing data
                    manipulation. It enhances transparency and
                    reliability of the processing procedures by
                    showing users unaltered data.
                </S.Description1>
            </S.Container>
        </div>
    );
};

export default Landing;
