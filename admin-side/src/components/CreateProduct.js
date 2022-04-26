import { useState } from 'react'

export default function CreateMovie() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [mainImg, setMainImg] = useState('')
  const [category, setCategory] = useState('')

  const data = {
    name,
    description,
    price,
    mainImg,
    category
  }

  async function submitButton() {
    try {
      let response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error(response.message)
      }
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    submitButton()
  }
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Add New Product</h1>
      <div className='w-full'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={submitHandler}>
          <input
            placeholder='Name'
            type='text'
            className='form-input rounded-lg focus:outline-none focus:shadow-outline'
            value={name}
            onChange={(e) => {
              const value = e.target.value
              setName(value)
            }
            } />
          <br />
          <textarea
            className='h-32 rounded-lg focus:outline-none focus:shadow-outline'
            cols='70'
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
            className='form-input rounded-lg focus:outline-none focus:shadow-outline'
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
            className='form-input rounded-lg focus:outline-none focus:shadow-outline'
            type='text'
            value={mainImg}
            onChange={(e) => {
              const value = e.target.value
              setMainImg(value)
            }
            } />
          <br />
          <input
            placeholder='Category'
            className='form-input rounded-lg focus:outline-none focus:shadow-outline'
            type='text'
            value={category}
            onChange={(e) => {
              const value = e.target.value
              setCategory(value)
            }
            } />
          <br />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' type='submit' >Add Movie</button>
        </form>
      </div>
    </>
  )
}