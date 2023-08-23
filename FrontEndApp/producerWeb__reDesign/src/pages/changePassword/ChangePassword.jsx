import AxiosApi from "../../api/AxiosApi";

import { useEffect } from "react";



export default function ChangePassword() {
  
  useEffect(() => {
    changePassword();
  }, []);

  async function changePassword() { 
    try {
      const response = await AxiosApi.get('/members/check/findPw', {
        "oldPassword" : "adminadmin",
        "newPassword" : "12345678"
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