export default function Item({title, action}) {
  return (
    <div className=" w-[6wv] h-[6vw] px-4 py-2">
      <button className="bg-red-100 flex justify-center items-center rounded-3xl w-full h-full"
        onClick={(event) => {
          event.preventDefault();
          action
        }}>
        <div className="text-xl font-extrabold ">{title}</div>
      </button>
    </div>
    )
}
 