const Description = ({ text, classStyle }) => {
  return (
    <p className={`sm:text-base text-sm text-white font-normal ${classStyle}`}>{text}</p>
  )
}

export default Description