import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BannerWrapper = styled.div`
  display: flex;
  justify-content: start;
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

const Banner = ({ title }) => {
  return <BannerWrapper>{title}</BannerWrapper>;
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Banner;
