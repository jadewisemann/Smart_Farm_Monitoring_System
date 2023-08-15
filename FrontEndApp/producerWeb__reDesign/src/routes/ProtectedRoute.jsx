import { Outlet,Navigate, useLocation, } from "react-router-dom";
import { getCookie } from "../hooks/reactCookie";

export const ProtectedRoute = () => {
  // const isLogin = !!getCookie('accessToken')
  const isLogin = true
  const currentLocation = useLocation();
  
  return isLogin
    ? <Outlet />
    : <Navigate to="/" replace state={{redirectedFrom:currentLocation}}/>

}
