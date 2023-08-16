import { setCookie } from "../hooks/reactCookie";
import { refreshTokenLifeTime } from "../constant/refreshTokenLifeTime";
import axios from "axios";
import { useSetRecoilState } from "recoil";

import { baseUrl } from "../api/serverUrl";

import { isLoginAtom } from "../recoil/isLogInAtom";
import {  useLocation, useNavigate } from "react-router-dom";

export const useRequestSignIn = async ({ userId, userPassword }) => {
  const setAccessToken = useSetRecoilState(isLoginAtom)
  const from = location?.state?.redirectedFrom?.pathname || "/";
  const location = useLocation()
  const navigate = useNavigate()

  try {
      const response = await axios.post(`${baseUrl}/members/login`, {
        userId: userId,
        password: userPassword,
      });
      setCookie('accessToken', response.data.accessToken);
      setCookie('refreshToken', response.data.refreshToken, { expires: new Date(Date.now() + refreshTokenLifeTime) });
      response.status === 200 ? setAccessToken(true) : {}
      navigate(from);

      console.log(response)
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }