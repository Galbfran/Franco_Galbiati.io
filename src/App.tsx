import Header from './componentes/Header'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './componentes/Inicio/Inicio'


function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Inicio/>} />
    </Routes>
      
    </>
  )
}

export default App
