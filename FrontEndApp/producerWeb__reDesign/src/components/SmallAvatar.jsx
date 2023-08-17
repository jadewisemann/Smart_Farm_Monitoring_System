import { useAuth } from "../context/AuthContext"

export default function SmallAvatar() {
  const {userInfo} = useAuth()
  return (
    <div>SmallAvatar</div>
  )
}
