import axios from "axios";
import { baseUrl } from "../api/serverUrl";

export const useRequestSignUp = async ({ userId, userPassword,  userEmail}) => {
  try {
      const response = await axios.post(`${baseUrl}/members/signup`, {
        userId: userId,
        email: userEmail,
        password: userPassword,
      });
      console.log(response)
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }