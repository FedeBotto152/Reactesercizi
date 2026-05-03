
import './App.css'

function Message() {
  return <p>What a beautiful day!</p>
}

function Hello() {
  return (
    <>
      <h2>Hello, World!</h2>
      <Message />
    </>
  )
}

function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Message />
    </div>
  )
}

export default App
