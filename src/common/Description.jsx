const Description = ({ text, classStyle }) => {
  return (
    <p className={`sm:text-base text-sm leading-7 text-white font-normal font-space-grotesk ${classStyle}`}>{text}</p>
  )
}

export default Description