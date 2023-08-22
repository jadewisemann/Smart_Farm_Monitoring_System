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
        <button className=" flex border-4 border-black justify-center items-center rounded-xl w-16 h-16 mb-4" onClick={e => { e.preventDefault(); navigate('/addDevice') }}>
        <div className="text-sm font-extrabold  text-center leading-6 uppercase">add <br />device </div>
        </button>
        {/* manage farm */}
        <button className="border-4 border-black flex justify-center items-center rounded-xl w-16 h-16 mb-4" onClick={e => { e.preventDefault(); navigate('/farmtable') }}>
        <div className="text-sm font-extrabold text-center leading-6  uppercase">set <br />farm </div>
        </button>
        {/* log out */}
        <button className="border-4 border-black flex justify-center items-center rounded-xl w-16 h-16" onClick={e => { e.preventDefault(); logOut() }}>
        <div className="text-sm font-extrabold text-center leading-6  uppercase">log out </div>
        </button>
      </div>
    </div>
  </>
  )
}
