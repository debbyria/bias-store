import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
          <div className="py-8">
            Join Us Now
          </div>
          <div className="flex flex-col space-y-2">
            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-96" placeholder="Username" type='text'
              value={username}
              onChange={(e) => {
                const value = e.target.value
                setUsername(value)
              }} />
            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-96" placeholder="Email"
              type='text'
              value={email}
              onChange={(e) => {
                const value = e.target.value
                setEmail(value)
              }}
            />
            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-96" placeholder="Password"
              type='password'
              value={password}
              onChange={(e) => {
                const value = e.target.value
                setPassword(value)
              }}
            />
            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-96" placeholder="Phone Number"
              type='text'
              value={phoneNumber}
              onChange={(e) => {
                const value = e.target.value
                setPhoneNumber(value)
              }}
            />
            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-96" placeholder="Address"
              type='text'
              value={address}
              onChange={(e) => {
                const value = e.target.value
                setAddress(value)
              }}
            />
          </div>
          <div className="flex flex-col space-y-5 w-full">
            <button className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}