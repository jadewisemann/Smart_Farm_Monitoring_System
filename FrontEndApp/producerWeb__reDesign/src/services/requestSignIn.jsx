// library
import axios from "axios";
// constant
import { refreshTokenLifeTime } from "../constant/refreshTokenLifeTime";
import { baseUrl } from "../api/serverUrl";
// hooks
import { setCookie } from "../hooks/reactCookie";

export const requestSignIn = async ({ userId, userPassword }) => {
  try
  {
    const response = await axios.post(`${baseUrl}/members/login`,{
      userId: userId,
      password: userPassword,
    });

    response.status === 200 &&(
      setCookie('accessToken', response.data.accessToken),
      setCookie('refreshToken', response.data.refreshToken, { expires: new Date(Date.now() + refreshTokenLifeTime) })
    )

    console.log(response)
    return response;
  }
  catch (error)
  {
    console.log(error);
    error.status = 200;
    return error;
  }
  }