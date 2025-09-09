import { useState } from 'react'
import './App.css'
import Card from './components/ej1'
import Input from './components/ej2'
import Guardar from './components/ej3'
import Color from './components/ej4'
import Formulario from './components/ej5'
import ListaNombres from './components/ej6'
import ListaProductos from './components/ej7'
import Saludo from './components/ej8'
import FiltrarFrutas from './components/ej9'
import TotalPrecios from './components/ej10'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <h1>Repaso React</h1>
    <h3>Ejercicio 1</h3>
    <Card/>
    <h3>Ejercicio 2</h3>
    <Input/>
    <h3>Ejercicio 3</h3>
    <Guardar/>
    <h3>Ejercicio 4</h3>
    <Color/>
    <h3>Ejercicio 5</h3>
    <Formulario/>
    <h3>Ejercicio 6</h3>
    <ListaNombres/>
    <h3>Ejercicio 7</h3>
    <ListaProductos/>
    <h3>Ejercicio 8</h3>
    <Saludo nombre="Ana" />
     <Saludo nombre="Lucas" />
    <Saludo nombre="Martina" />
    <h3>Ejercicio 9</h3>
    <FiltrarFrutas/>
    <h3>Ejercicio 10</h3>
    <TotalPrecios/>
    </>
  )
}

export default App
