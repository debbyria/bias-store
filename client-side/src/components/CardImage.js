export default function CardImage({ image }) {
  return (
    <>
      <img className="w-full" alt="image of a girl posing" src={image.imgUrl} />
    </>
  )
}