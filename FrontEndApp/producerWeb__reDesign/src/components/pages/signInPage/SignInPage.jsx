import SignInInsidePage from "../../feature/signin/signinInsidePage"

export default function SignInPage() {
  return (<>
    <div className="w-[80vw] h-[80vh]  flex items-center"> {/* Content Section */}
      <div className="w-full lg:w-[50%] h-full flex flex-col items-center border-2 border-black justify-center px-8" > {/* half page */}
        <SignInInsidePage />
      </div>
      <div className="hidden lg:flex border-black border-2 border-l-0 w-[50%] h-full">
      </div>
    </div>
  </>)
}