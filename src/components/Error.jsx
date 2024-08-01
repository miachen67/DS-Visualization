const Error = ({text}) => {
  if (text == null){
    return null
  }
  return (
    <h2 className="error">{text}</h2>
  )
}

export default Error