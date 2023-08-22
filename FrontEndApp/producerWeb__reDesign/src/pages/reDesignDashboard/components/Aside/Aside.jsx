import { useNavigate } from "react-router-dom";
import AxiosApi from "../../../../api/AxiosApi"
import { removeCookie } from "../../../../hooks/reactCookie";
// component

export default function Aside() {
  const errorMsg = "Log out Fail"
  const navigate = useNavigate()
  async function logOut() {
    try {
      const response = await AxiosApi.post('/members/logout');
      console.log('response', response)
      removeCookie('accessToken'),
      removeCookie('refreshToken')
    } catch (error) {
      console.error("log out error :", error);
      alert(errorMsg)
    }
  }
 
  return (<>
    <div className=" w-full h-full pl-4 pt-8 flex-col">
      <div className="w-full h-full flex flex-col items-center ">
        {/* add device */}
        <button className="bg-red-100 flex justify-center items-center rounded-xl w-16 h-16" onClick={e=> {e.preventDefault(); navigate('/addDevice')}}> </button>
        <div className="text-lg font-extrabold text-center leading-6 mt-2 mb-6 uppercase">add <br />device </div>
        {/* manage farm */}
        <button className="bg-red-100 flex justify-center items-center rounded-xl w-16 h-16" onClick={e=> {e.preventDefault(); navigate('/farmtable')}}> </button>
        <div className="text-lg font-extrabold text-center leading-6 mt-2 mb-6 uppercase">manage <br />farm </div>
        {/* log out */}
        <button className="bg-red-100 flex justify-center items-center rounded-xl w-16 h-16" onClick={e=> {e.preventDefault(); logOut()}}> </button>
        <div className="text-lg font-extrabold text-center leading-6 mt-2 mb-6 uppercase">log out </div>
      </div>
    </div>
  </>
  )
}
