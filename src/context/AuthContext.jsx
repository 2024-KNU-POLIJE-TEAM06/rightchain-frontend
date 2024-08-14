import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getIsLoggedIn = async () => {
      try {
        const { status, data } = await api.get(`account/status`);
        setIsLoggedIn(status === 200);
        if (status === 200) {
          setUserId(data.substring(22));
        }
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };

    getIsLoggedIn();
  }, [isLoggedIn, navigate]);

  const login = () => {
    window.location.href = `http://localhost:53000/oauth2/authorization/google?redirect_uri=http://localhost:3000/`;
    setIsLoggedIn(true);
  };

  const logout = () => {
    const postLogout = async () => {
      try {
        const { status } = await api.post(`account/logout`);
        if (status === 200) {
          setIsLoggedIn(false);
          setUserId(null);
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };

    postLogout();
  };

  const authValue = useMemo(
    () => ({ isLoggedIn, userId, login, logout }),
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
