import axios from "axios";
import { baseUrl } from "../api/serverUrl";
import MockAdapter from "axios-mock-adapter";



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
    console.log(response)
    return response;
  }
  catch (error)
  {
    console.log(error);
    return error;
  }
  }