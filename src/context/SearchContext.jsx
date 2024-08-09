import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [category, setCategory] = useState('');

  const onChangeCategory = categoryName => {
    setCategory(categoryName);
  };

  const searchValue = useMemo(
    () => ({
      category,
      onChangeCategory,
    }),
    [category],
  );

  return (
    <SearchContext.Provider value={searchValue}>
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSearch = () => useContext(SearchContext);
