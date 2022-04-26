import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function postLogin() {
    try {
      let response = await fetch('http://localhost:3001 ')
      console.log(response)
      if (!response.ok) {
        throw new Error(response.message)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const loginHandler = (e) => {
    e.preventDefault()
    postLogin()
  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
          <div className="py-8">
            Bias Store
          </div>
          <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Email" type='text'
            value={email}
            onChange={(e) => {
              const value = e.target.value
              setEmail(value)
            }} />
          <div className="flex flex-col space-y-1">
            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Password"
              type='password'
              value={password}
              onChange={(e) => {
                const value = e.target.value
                setPassword(value)
              }}
            />
          </div>
          <div className="flex flex-col space-y-5 w-full">
            <button onClick={loginHandler} className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">Log in</button>
            <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
              <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
            </div>
            <button className="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )

}