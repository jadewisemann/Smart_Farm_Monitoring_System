import axios from "axios";
import { baseUrl } from "../api/serverUrl";
import MockAdapter from "axios-mock-adapter";
import { setCookie } from "../hooks/reactCookie";



export const requestSignIn = async ({ userId, userPassword }) => {
  
  const instance = axios.create();
  const mock = new MockAdapter(instance);
  const mockResponseData = {
    refreshToken: "example-refresh-token",
    accessToken: "example-access-token",
  };
  mock.onPost(`${baseUrl}/members/login`).reply(200, mockResponseData);

  try
  {
    // const response = await axios.post(`${baseUrl}/members/login`,{
    const response = await instance.post(`${baseUrl}/members/login`,{
      userId: userId,
      password: userPassword,
    });
    setCookie('accessToken', response.data.accessToken)
    setCookie('refreshToken', response.data.refreshToken)
    return response;
  }
  catch (error)
  {
    console.log(error);
    return error;
  }
  }