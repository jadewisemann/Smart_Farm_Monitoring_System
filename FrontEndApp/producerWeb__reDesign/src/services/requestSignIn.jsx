import AxiosApi from "../api/AxiosApi";
import { setCookie } from "../hooks/reactCookie";
import { refreshTokenLifeTime } from "../constant/refreshTokenLifeTime";

export const requestSignIn = async ({ userId, userPassword }) => {
  try {
      const response = await AxiosApi.post('members/login', {
        userId: userId,
        password: userPassword,
      });
      setCookie('accessToken', response.data.accessToken);
      setCookie('refreshToken', response.data.refreshToken, { expires: new Date(Date.now() + refreshTokenLifeTime) });
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }