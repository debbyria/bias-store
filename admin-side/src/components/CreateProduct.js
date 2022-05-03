import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProduct, fetchProducts } from '../store/actions/productAction'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default function CreateProduct({ showModal, setShowModal }) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [mainImg, setMainImg] = useState('')
  const [categoryId, setCategory] = useState('')
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')

  const data = {
    name,
    description,
    price,
    mainImg,
    image1,
    image2,
    categoryId
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function submitButton() {
    try {
      let response = await dispatch(addProduct(data))

      if (response === 'success') {
        MySwal.fire({
          icon: "success",
          text: "Succeed add new product"
        })

        navigate("/")
        setShowModal(false)

        setName('')
        setDescription('')
        setPrice('')
        setMainImg('')
        setCategory('')
        setImage1('')
        setImage2('')
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

  const submitHandler = (e) => {
    e.preventDefault()
    submitButton()
  }
  return (
    <>
      {showModal ? (
        <div className='min-h-screen overflow-y-auto overflow-x-hidden w-full backdrop-contrast-50 flex justify-center items-center fixed md:inset-0 md:h-full h-modal z-50 outline-none focus:outline-none'>
          <form className='relative h-full bg-white p-8 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-34' onSubmit={submitHandler}>
            <div className='py-3'>
              <h1>Add New Product</h1>
            </div>
            <input
              placeholder='Name'
              type='text'
              className='my-2 h-auto p-1 border-[1px] border-slate-500 rounded-md w-full'
              value={name}
              onChange={(e) => {
                const value = e.target.value
                setName(value)
              }
              } />
            <textarea
              className='my-2 h-auto border-[1px] border-slate-500 rounded-md'
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
            <input
              placeholder='Price'
              className='my-2 p-1 border-[1px] border-slate-500 rounded-md w-full'
              type='text'
              value={price}
              onChange={(e) => {
                const value = e.target.value
                setPrice(value)
              }
              } />
            <input
              placeholder='Image Url'
              className='my-2 p-1 border-[1px] border-slate-500 rounded-md w-full'
              type='text'
              value={mainImg}
              onChange={(e) => {
                const value = e.target.value
                setMainImg(value)
              }
              } />
            <input
              placeholder='Image Url 1'
              className='my-2 p-1 border-[1px] border-slate-500 rounded-md w-full'
              type='text'
              value={image1}
              onChange={(e) => {
                const value = e.target.value
                setImage1(value)
              }
              } />
            <input
              placeholder='Image Url 2'
              className='my-2 p-1 border-[1px] border-slate-500 rounded-md w-full'
              type='text'
              value={image2}
              onChange={(e) => {
                const value = e.target.value
                setImage2(value)
              }
              } />
            <select className='my-2 p-1 border-[1px] border-slate-500 rounded-md w-full'
              type='text'
              value={categoryId}
              onChange={(e) => {
                const value = e.target.value
                setCategory(value)
              }
              } >
              <option disabled value={""}>Select One Category</option>
              <option value={1}>Tops</option>
              <option value={2}>Accessories</option>
              <option value={3}>Cheerings</option>
              <option value={4}>Albums</option>
              <option value={5}>Hats</option>
            </select>
            <button className='my-2 bg-blue-500 hover:bg-blue-700 text-black py-2 px-4 rounded-full w-full' type='submit' >Add New Product</button>
            <button onClick={() => setShowModal(false)} className='bg-red-400 hover:bg-red-700 text-black  py-2 px-4 rounded-full w-full'>Cancel</button>
          </form>
        </div>
      ) : null}
    </>
  )
}