
function Message(props) {
  if (props.age > 18) {
    return <p>Your age is {props.age}</p>
  }

  return <p>You are very young!</p>
}

export default Message