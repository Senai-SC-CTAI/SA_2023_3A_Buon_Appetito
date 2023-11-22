import { Routes, Route } from 'react-router-dom'
import  Home  from "./pages/Home/home"
import  Funcionario  from "./pages/Funcionario/funcionario"
import  Login  from "./pages/Login/login"
import  Register  from "./pages/Register/register"
import  Produtos  from "./pages/Produtos/produtos"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/funcionario" element={<Funcionario />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/produtos" element={<Produtos />}/>
      </Routes>
  )
}

export default App
