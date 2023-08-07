import { Avatar } from "@mui/material";

export default function UserAvatar() {
  return (<>
    <div className="flex items-center">
      <Avatar/>
      <div className="my-0 ml-4 font-mono text-3xl font-extrabold bg-yellow-300 ">username</div>
    </div>
  </>)
}
