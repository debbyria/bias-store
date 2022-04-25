import { useState } from 'react'

export default function CreateMovie() {
  const [title, setTitle] = useState('')
  // const [slug, setSlug] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const [trailerUrl, setTrailerUrl] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [rating, setRating] = useState(0)
  const [genreId, setGenreId] = useState(0)
  const [authorId, setAuthorId] = useState(0)

  return (
    <>
      <h1>Add New Movie</h1>
      <div className='mb-3'>
        <form>
          <input
            placeholder='Title'
            type='text'
            value={title}
            onChange={setTitle} />
          <br />
          <textarea
            cols='70'
            rows='15'
            placeholder='Synopsis'
            value={synopsis}
            onChange={setSynopsis}>
          </textarea>
          <br />
          <input
            placeholder='Trailer Url'
            type='text'
            value={trailerUrl}
            onChange={setTrailerUrl} />
          <br />
          <input
            placeholder='Image Url'
            type='text'
            value={imgUrl}
            onChange={setImgUrl} />
          <br />
          <input
            placeholder='Rating'
            type='text'
            value={rating}
            onChange={setRating} />

        </form>
      </div>
    </>
  )
}