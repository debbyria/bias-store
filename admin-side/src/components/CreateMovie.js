import { useState } from 'react'

export default function CreateMovie() {
  const [title, setTitle] = useState('')
  // const [slug, setSlug] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const [trailerUrl, setTrailerUrl] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [rating, setRating] = useState('')
  const [genreId, setGenreId] = useState('')
  const [authorId, setAuthorId] = useState('')

  const data = {
    title,
    synopsis,
    trailerUrl,
    imgUrl,
    rating,
    genreId
  }

  async function submitButton() {
    try {
      let response = await fetch('http://localhost:3001/movies', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      console.log(response.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    submitButton()
  }
  return (
    <>
      <h1>Add New Movie</h1>
      <div className='mb-3'>
        <form onSubmit={submitHandler}>
          <input
            placeholder='Title'
            type='text'
            value={title}
            onChange={(e) => {
              const value = e.target.value
              setTitle(value)
            }
            } />
          <br />
          <textarea
            cols='70'
            rows='15'
            placeholder='Synopsis'
            value={synopsis}
            onChange={(e) => {
              const value = e.target.value
              setSynopsis(value)
            }
            }>
          </textarea>
          <br />
          <input
            placeholder='Trailer Url'
            type='text'
            value={trailerUrl}
            onChange={(e) => {
              const value = e.target.value
              setTrailerUrl(value)
            }
            } />
          <br />
          <input
            placeholder='Image Url'
            type='text'
            value={imgUrl}
            onChange={(e) => {
              const value = e.target.value
              setImgUrl(value)
            }
            } />
          <br />
          <input
            placeholder='Rating'
            type='text'
            value={rating}
            onChange={(e) => {
              const value = e.target.value
              setRating(value)
            }
            } />
          <br />
          {/* <select>
            <option disabled selected value=''>Select One</option>
            <option value='1'>Romantic</option>
            <option value='2'>Romantic</option>
          </select> */}
          <input
            placeholder='Genre'
            type='text'
            value={genreId}
            onChange={(e) => {
              const value = e.target.value
              setGenreId(value)
            }
            } />
          <br />
          <button type='submit' >Add Movie</button>
        </form>
      </div>
    </>
  )
}