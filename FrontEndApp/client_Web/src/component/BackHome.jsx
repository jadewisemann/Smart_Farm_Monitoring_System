import { useNavigate } from "react-router-dom"

export default function BackHome() {
  const navigate = useNavigate()
  return (
    <button onClick={e => {
      e.preventDefault();
      navigate('/')
    }}>
      <div className="font-extrabold text-6xl mt-4">
        ←
      </div>
    </button>
  )
}
