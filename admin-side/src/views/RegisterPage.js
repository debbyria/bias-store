import {
  // useEffect, 
  useState
} from "react"
import { useDispatch } from "react-redux"
// import { fetchProducts } from "../store/actions/productAction"
import { postRegisterUser } from "../store/actions/userAction"
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  // const { userData } = useSelector((state) => state.userData)
  const dispatch = useDispatch()

  let data = {
    username,
    email,
    password,
    phoneNumber,
    address
  }

  const navigate = useNavigate()

  function registerUser() {

    dispatch(postRegisterUser(data))
    navigate("/login")
  }

  // useEffect(() => {
  //   dispatch(fetchProducts())
  // }, [])

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-4 w-1/2">
          <div className="py-8">
            Join Us Now
          </div>
          <div className="flex flex-col space-y-4 w-10/12">
            <input className="p-3 border-[1px] border-slate-500 rounded-md w-full" placeholder="Username" type='text'
              value={username}
              onChange={(e) => {
                const value = e.target.value
                setUsername(value)
              }}
            />
            <input className="p-3 border-[1px] border-slate-500 rounded-md w-full" placeholder="Email"
              type='text'
              value={email}
              onChange={(e) => {
                const value = e.target.value
                setEmail(value)
              }}
            />
            <input className="p-3 border-[1px] border-slate-500 rounded-md w-full" placeholder="Password"
              type='password'
              value={password}
              onChange={(e) => {
                const value = e.target.value
                setPassword(value)
              }}
            />
            <input className="p-3 border-[1px] border-slate-500 rounded-md w-full" placeholder="Phone Number"
              type='text'
              value={phoneNumber}
              onChange={(e) => {
                const value = e.target.value
                setPhoneNumber(value)
              }}
            />
            <input className="p-3 border-[1px] border-slate-500 rounded-md w-full" placeholder="Address"
              type='text'
              value={address}
              onChange={(e) => {
                const value = e.target.value
                setAddress(value)
              }}
            />
          </div>
          <div className="flex flex-col space-y-5 w-10/12">
            <button onClick={() => registerUser()} className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}