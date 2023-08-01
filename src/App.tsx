import Header from './componentes/Header'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './componentes/Inicio/Inicio'
import Calculadora from './componentes/Calculadora/Calculadora'
import ToDoList from './componentes/ToDoList/ToDoList'
import FetchDatos from './componentes/FetchDatos/FetchDatos'


function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Inicio/>} />
      <Route path='/calculadora' element={<Calculadora/>} />
      <Route path='/todolist' element={<ToDoList/>} />
      <Route path='/fetchdatos' element={<FetchDatos/>} />
    </Routes>
    </>
  )
}

export default App
