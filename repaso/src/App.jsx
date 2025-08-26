import { useState } from 'react'
import './App.css'
import Card from './components/ej1'
import Input from './components/ej2'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <h1>Repaso React</h1>
    <h3>Ejecicio 1</h3>
    <Card/>
    <h3>Ejecicio 2</h3>
    <Input/>
    </>
  )
}

export default App
