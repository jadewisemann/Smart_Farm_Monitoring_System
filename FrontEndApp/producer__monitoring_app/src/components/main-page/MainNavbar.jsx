export default function MainNavbar() {
  return (
    <>
      <nav className=" w-full flex flex-col items-center bg-yellow-500 rounded-t-3xl min-h-16">
        <div className="w-full max-w-3xl px-3 bg-yellow-500 rounded-t-3xl">
          <div className="flex justify-between">
            <div className="main-nav-right-section flex space-x-1">
              home  profile
              bread crumble
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}