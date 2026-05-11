import Age from "./Age"
import Message from "./Message"

function Welcome(props) {
  return (
    <div>
      <p>Welcome, {props.name}!</p>

      {props.age > 18 && <Age age={props.age} />}

      {props.age && <Age age={props.age} />}

      {props.age > 18 && props.age < 65 && (
        <Age age={props.age} />
      )}

      {props.age > 18 && props.name === "John" && (
        <Age age={props.age} />
      )}

      {props.age < 65 && <Age age={props.age} />}

      <Message age={props.age} />
    </div>
  )
}

export default Welcome