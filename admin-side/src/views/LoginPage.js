import { useState } from "react";
import { useDispatch } from "react-redux";
import { postLoginUser } from "../store/actions/userAction";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let data = {
    email,
    password
  }

  async function loginHandler(e) {
    try {
      e.preventDefault()
      const response = await dispatch(postLoginUser(data))

      if (response === 'success') {
        MySwal.fire({
          icon: "success",
          title: 'Succeed Login',
        })
        navigate("/")
      } else {
        MySwal.fire({
          icon: "error",
          text: response
        })
      }
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
          <div className="py-8 text-xl brand-h1">
            Bias Store
          </div>
          <div>
            Sign In to Your Account
          </div>
          <input className="p-3 border-[1px] border-slate-500 rounded-md w-80" placeholder="Email" type='text'
            value={email}
            onChange={(e) => {
              const value = e.target.value
              setEmail(value)
            }} />
          <div className="flex flex-col space-y-1">
            <input className="p-3 border-[1px] border-slate-500 rounded-md w-80" placeholder="Password"
              type='password'
              value={password}
              onChange={(e) => {
                const value = e.target.value
                setPassword(value)
              }}
            />
          </div>
          <div className="flex flex-col space-y-5 w-full">
            <button onClick={loginHandler} className="w-full rounded-3xl p-3 text-white font-bold transition duration-200">Log in</button>
          </div>
        </div>
      </div>
    </>
  )

}