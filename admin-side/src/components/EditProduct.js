import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateProduct } from "../store/actions/productAction"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default function EditProduct() {

  const { detailProduct } = useSelector((state) => state.product)

  const [name, setName] = useState(detailProduct.name)
  const [description, setDescription] = useState(detailProduct.description)
  const [price, setPrice] = useState(detailProduct.price)
  const [mainImg, setMainImg] = useState(detailProduct.mainImg)
  const [categoryId, setCategory] = useState(detailProduct.Category.id)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = {
    name,
    description,
    price,
    mainImg,
    categoryId,
  }

  const cancelButton = () => {
    navigate("/")
  }

  async function submitHandler(id) {
    try {
      let response = await dispatch(updateProduct(id, data))

      if (response === 'success') {
        MySwal.fire({
          icon: "success",
          text: "Succeed update product"
        })
        navigate('/')
      } else {
        MySwal.fire({
          icon: "error",
          text: "Failed update product"
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div className='min-h-screen w-full flex justify-center items-center bg-white'>
        <div className='relative h-full bg-white p-8 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-34' >
          <div className='py-3'>
            <h1 className="text-2xl">Edit Product</h1>
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
            rows='10'
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
          <select className='my-2 p-1 border-[1px] border-slate-500 rounded-md w-full'
            type='text'
            value={categoryId}
            onChange={(e) => {
              const value = e.target.value
              setCategory(value)
            }
            } >
            <option value={1}>Tops</option>
            <option value={2}>Accessories</option>
            <option value={3}>Cheerings</option>
            <option value={4}>Albums</option>
            <option value={5}>Hats</option>
          </select>
          <button onClick={() => submitHandler(detailProduct.id)} className='my-2 bg-blue-500 hover:bg-blue-700 text-black py-2 px-4 rounded-full w-1/2' type='submit' >Edit Product</button>
          <br />
          <button onClick={cancelButton} className='bg-red-400 hover:bg-red-700 text-black  py-2 px-4 rounded-full w-1/2'>Cancel</button>
        </div>
      </div>
    </>
  )
}