import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, [isLoggedIn, navigate]);

  const login = () => {
    localStorage.setItem('accessToken', 'test');
    setIsLoggedIn(true);
  };
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };
  const authValue = useMemo(
    () => ({ isLoggedIn, login, logout }),
    [isLoggedIn, login, logout],
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
