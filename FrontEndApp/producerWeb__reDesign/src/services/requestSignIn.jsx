import axios from "axios";
import { baseUrl } from "../api/serverUrl";

export const requestSignIn = async ({ userId, userPassword }) => {
  try
  {
    const response = await axios.post(`${baseUrl}/members/login`,{
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