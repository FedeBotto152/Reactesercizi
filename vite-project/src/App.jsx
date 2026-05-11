import './App.css'
import Welcome from './components/Welcome'

function App() {
  return (
    <Welcome
      name={<strong>Federico</strong>}
      age={23}
    />
  )
}

export default App


