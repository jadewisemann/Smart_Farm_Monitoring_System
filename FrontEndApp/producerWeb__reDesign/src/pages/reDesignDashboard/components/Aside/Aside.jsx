import AxiosApi from "../../../../api/AxiosApi"
import { removeCookie } from "../../../../hooks/reactCookie";
// component
import Item from "./Item"

export default function Aside() {
  async function logOut() {
    try {
      const response = await AxiosApi.post('/members/logout');
      console.log('response', response)
      removeCookie('accessToken'),
      removeCookie('refreshToken')
    } catch (error) {
      console.error("log out error :", error);
    }
  }
  return (<>
    <div className=" w-full h-full  pt-8 flex-col ">
      <Item title={'name'}/>
      <Item title={'home'}/>
      <Item title={'farm'}/>
      <Item title={'setting'} />
      <button onClick={event => {
        event.preventDefault(),
        logOut()
      }}> LOG OUT</button>
    </div>
  </>
  )
}
