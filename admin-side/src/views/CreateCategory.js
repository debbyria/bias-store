import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../store/actions/categoryAction";
import { useNavigate } from "react-router-dom";

export default function CreateCategory({ showModal, setShowModal }) {

  const [name, setName] = useState('')

  const data = {
    name
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function submitButton() {
    setShowModal(false)
    dispatch(addCategory(data))
    navigate("/categories")
  }

  return (
    <>
      {showModal ? (
        <div className='backdrop-contrast-50 min-h-screen flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
          <form className='bg-white p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-34' onSubmit={submitButton}>
            <div className='py-5'>
              <h1>Add New Category</h1>
            </div>
            <input
              placeholder='Name'
              type='text'
              className='p-3 border-[1px] border-slate-500 rounded-md w-full'
              value={name}
              onChange={(e) => {
                const value = e.target.value
                setName(value)
              }
              } />
            <br />
            <button className='bg-blue-400 hover:bg-blue-700 text-black  py-2 px-4 rounded-full w-full' type='submit' >Add New Category</button>
            <br />
            <button onClick={() => setShowModal(false)} className='bg-red-400 hover:bg-red-700 text-black  py-2 px-4 rounded-full w-full'>Cancel</button>
          </form>
        </div>

      ) : null}
    </>
  )
}