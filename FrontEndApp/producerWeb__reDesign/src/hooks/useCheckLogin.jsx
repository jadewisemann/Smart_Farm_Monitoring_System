import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isLoginAtom } from '../recoil/isLogInAtom';
import { getCookie } from './reactCookie';

function useCheckLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const LoginAtom = useRecoilValue(isLoginAtom);
  const accessToken = getCookie('accessToken') 
  useEffect(() => {
    console.log('check login');
    LoginAtom || accessToken ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }, [LoginAtom, accessToken]);
  return isLoggedIn;
}

export default useCheckLogin;
