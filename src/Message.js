const Message = (props) => {
  // Imprime un h1 con el mensaje que le pasemos como prop
  return (
    <p style={{ color: props.color }}> {props.message} </p>
  )
}

export default Message;