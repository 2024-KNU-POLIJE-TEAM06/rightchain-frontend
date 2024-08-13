import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import SearchIconImg from '../asset/search.png';

const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between; // 양쪽 끝에 배치
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 2rem;
  padding-left: 3rem;

  background-color: #2f590f;

  border-radius: 15px;

  color: white;
  font-size: 27px;
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 24px;
`;

const growFromRight = keyframes`
  from {
    transform: translateX(100%) scaleX(0);
  }
  to {
    transform: translateX(0) scaleX(1);
  }
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 0.5rem;
  margin-left: 1rem;
  font-size: 20px;
  border: none;
  outline: none;
  margin-right: 1rem;
  transform-origin: left;
  animation: ${growFromRight} 0.5s ease-in-out;
`;

const SearchContainer = styled.div`
  display: row;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Banner = ({ title }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    if (!isSearchVisible) {
      setIsSearchVisible(true);
    }
  };

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <BannerWrapper>
      {title}
      {title.toLowerCase() === 'search' && (
        <SearchContainer>
          {isSearchVisible && (
            <SearchInput
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Enter search term..."
            />
          )}
          <SearchIcon onClick={handleSearchClick} src={SearchIconImg} />
        </SearchContainer>
      )}
    </BannerWrapper>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Banner;
