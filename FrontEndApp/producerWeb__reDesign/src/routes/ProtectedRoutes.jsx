import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoginAtom } from "../recoil/isLogInAtom";
import { useEffect } from "react";
import { getCookie } from "../hooks/reactCookie";

const ProtectedRoute = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const currentLocation = useLocation();


  const accessToken = getCookie('accessToken');
  
  accessToken ? setIsLogin(true) : setIsLogin(false);

  console.log(isLogin);

  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate
      to={"/signin"}
      replace
      state={{ redirectedFrom: currentLocation }}
      />
  );
};

export default ProtectedRoute;
