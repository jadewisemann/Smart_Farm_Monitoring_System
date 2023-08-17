import { createContext, useState, useContext, useEffect } from 'react';
import { getCookie, setCookie,removeCookie } from '../hooks/reactCookie';
import { refreshTokenLifeTime } from "../constant/refreshTokenLifeTime";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userInfo, setUserInfo] = useState('')

  useEffect(() => {
    const accessToken = getCookie('accessToken');
    setIsLoggedIn(!!accessToken);
  }, []);

  const logIn = (response) => {
    setCookie('accessToken', response.data.accessToken);
    setCookie('refreshToken', response.data.refreshToken, { expires: new Date(Date.now() + refreshTokenLifeTime) })
    setIsLoggedIn(true)
  };
  
  const logOut = () => {
    removeCookie('accessToken');
    removeCookie('refreshToken');
    setIsLoggedIn(false);
  };

  const setCurrentUser = (response) => {
    setUserInfo(response)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut, userInfo, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
