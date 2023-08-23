import { useNavigate } from "react-router-dom";
import SignUpComponent from "../../components/SignUpComponent";
import { getCookie } from "../../hooks/reactCookie";
import { useEffect } from "react";
import Header from "../../components/Header";


const checkLogin = () => {
  let accessToken = getCookie('accessToken')
    return !!accessToken
}

export default function SignUpPage() {
  // check Login
  const isToken = checkLogin();
  const isLogin = isToken;
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogin) {
      console.log('yap');
      navigate('/DashBoardPage');
    }
  }, [isLogin, navigate]);

  return (<>
    <div className="flex flex-col items-center w-screen h-full">
      <Header/> 
      <div className="w-[80vw] h-[80vh] mt-[12vh] flex items-center"> {/* Content Section */}
        <div className="w-full lg:w-[50%] h-full flex flex-col items-center border-2 border-black justify-center px-8" > {/* half page */}
          <SignUpComponent />
        </div>
        <div className="hidden lg:flex border-black border-2 border-l-0 w-[50%] h-full">
          <div className="w-full h-full bg-[url('/img/farmImg2.jpg')] bg-cover" />
        </div>
      </div>
    </div>
  </>)
}
