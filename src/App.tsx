import Header from './componentes/Header'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './componentes/Inicio/Inicio'
import Calculadora from './componentes/Calculadora/Calculadora'


function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Inicio/>} />
      <Route path='/calculadora' element={<Calculadora/>} />
    </Routes>
      
    </>
  )
}

export default App
