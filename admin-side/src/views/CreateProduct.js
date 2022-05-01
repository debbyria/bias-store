import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../store/actions/productAction'

export default function CreateProduct() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [mainImg, setMainImg] = useState('')
  const [category, setCategory] = useState('')
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')

  const data = {
    name,
    description,
    price,
    mainImg,
    image1,
    image2,
    category
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function submitButton() {
    dispatch(addProduct(data))
    navigate("/")
  }

  const submitHandler = (e) => {
    e.preventDefault()
    submitButton()
  }
  return (
    <>

      <div className='min-h-screen flex justify-center items-center bg-white'>
        <form className='p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-34' onSubmit={submitHandler}>
          <div className='py-5'>
            <h1>Add New Product</h1>
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
          <textarea
            className='h-32 border-[1px] border-slate-500 rounded-md'
            cols='60'
            rows='15'
            placeholder='Description'
            value={description}
            onChange={(e) => {
              const value = e.target.value
              setDescription(value)
            }
            }>
          </textarea>
          <br />
          <input
            placeholder='Price'
            className='p-3 border-[1px] border-slate-500 rounded-md w-full'
            type='text'
            value={price}
            onChange={(e) => {
              const value = e.target.value
              setPrice(value)
            }
            } />
          <br />
          <input
            placeholder='Image Url'
            className='p-3 border-[1px] border-slate-500 rounded-md w-full'
            type='text'
            value={mainImg}
            onChange={(e) => {
              const value = e.target.value
              setMainImg(value)
            }
            } />
          <br />
          <input
            placeholder='Image Url 1'
            className='p-3 border-[1px] border-slate-500 rounded-md w-full'
            type='text'
            value={image1}
            onChange={(e) => {
              const value = e.target.value
              setImage1(value)
            }
            } />
          <br />
          <input
            placeholder='Image Url 2'
            className='p-3 border-[1px] border-slate-500 rounded-md w-full'
            type='text'
            value={image2}
            onChange={(e) => {
              const value = e.target.value
              setImage2(value)
            }
            } />
          <br />
          <select className='p-3 border-[1px] border-slate-500 rounded-md w-full'
            type='text'
            value={category}
            onChange={(e) => {
              const value = e.target.value
              setCategory(value)
            }
            } >
            <option disabled selected value={""}>Select One Category</option>
            <option value={1}>Tops</option>
            <option value={2}>Accessories</option>
            <option value={3}>Cheerings</option>
            <option value={4}>Albums</option>
            <option value={5}>Hats</option>
          </select>
          <br />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full' type='submit' >Add New Product</button>
        </form>
      </div>
    </>
  )
}