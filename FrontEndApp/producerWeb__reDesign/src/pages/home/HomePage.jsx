// component
import Header from "../../components/Header";
import Content from "./Content";

// hooks



export default function HomePage() {


  return (<> 
    <div className="flex flex-col items-center w-screen h-full">
        <Header/> 
        <Content/>
    </div>
  </>)
}
