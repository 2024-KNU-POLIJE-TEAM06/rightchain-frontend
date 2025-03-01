import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    setCategory('all');
    setSearchKeyword('');
  }, [navigate]);

  const onChangeCategory = categoryName => {
    setCategory(categoryName);
  };

  const searchValue = useMemo(
    () => ({
      category,
      searchKeyword,
      setSearchKeyword,
      setCategory,
      onChangeCategory,
    }),
    [category, searchKeyword],
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
