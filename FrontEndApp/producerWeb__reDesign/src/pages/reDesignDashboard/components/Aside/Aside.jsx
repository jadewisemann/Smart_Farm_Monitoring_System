// component
import Item from "./Item"

export default function Aside() {
  return (<>
    <div className=" w-full h-full pt-2 flex-col">
      <Item title={'name'}/>
      <Item title={'home'}/>
      <Item title={'farm'}/>
      <Item title={'setting'}/>
    </div>
  </>
  )
}
