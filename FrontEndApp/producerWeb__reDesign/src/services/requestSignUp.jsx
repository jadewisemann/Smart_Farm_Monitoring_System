import axios from "axios";
import { baseUrl } from "../api/serverUrl";
import MockAdapter from "axios-mock-adapter";

export const requestSignUp = async ({ userId, userPassword, userEmail }) => {

  const instance = axios.create();
  const mock = new MockAdapter(instance);
  const mockResponseData = {};
  mock.onPost(`${baseUrl}/members/login`).reply(200, mockResponseData);
  try
  {
    // const response = await axios.post(`${baseUrl}/members/signup`, {
    const response = await instance.post(`${baseUrl}/members/signup`, {
      userId: userId,
      email: userEmail,
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