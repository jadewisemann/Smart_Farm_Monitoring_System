import AxiosApi from "../../api/AxiosApi";

import { useEffect } from "react";



export default function FindPassword({userEmail, userId}) {
  async function findPassword() { 
    try {
      const response = await AxiosApi.post('/members/findPw', {
        'email': userEmail,
        'userId': userId
      });
      console.log('response', response)
    } catch (error) {
      error.status === 500
        ? console.log(error.status)
        : {}
      console.error("아아디 찾기 실패:", error);
    }
  }
}