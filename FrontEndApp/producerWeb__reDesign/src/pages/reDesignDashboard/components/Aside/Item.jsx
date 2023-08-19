export default function Item({title, action}) {
  return (
    <>
      <div className="w-full ">
        <div className="w-fit ml-auto">
          <button className="bg-red-100 flex justify-center items-center rounded-xl w-16 h-16"
            onClick={(event) => {
              event.preventDefault();
              action
            }}>
          </button>
          <div className="text-xl font-extrabold ">{title}</div>
        </div>
      </div>
    </>
    )
}
 