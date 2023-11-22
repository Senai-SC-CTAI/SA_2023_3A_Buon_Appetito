import { Link } from "react-router-dom";
import LogoWeb from '../../assets/LogoWeb.png'
import imgLogin from '../../assets/imgLogin.png'

export default function Login() {
  return (
    <div className="h-screen w-screen bg-[#FBF7F3]">
      <section className="grid grid-cols-2	h-screen">
        <div className="flex items-center justify-center flex-col">
          <img src={LogoWeb} alt="Logo" />
          <h1 className="text-4xl mb-16 mt-2">
            Buon Appetito
          </h1>
          <div className="w-1/2">
            <h1 className="text-3xl mb-16">
              Login
            </h1>
            <input 
              type="email" 
              placeholder="Email" 
              className='text-xl block bg-transparent w-full py-2 border-b-2 border-[#D5D5D5] focus:outline-none focus:border-[#743C34] transition duration-300 mb-8'
            />
            <input 
              type="password" 
              placeholder="Senha" 
              className='text-xl block bg-transparent w-full py-2 border-b-2 border-[#D5D5D5] focus:outline-none focus:border-[#743C34] transition duration-300 mb-10'
            />
            <div className="mb-6 flex justify-between">
              <p className="text-[#232323]">Lembre-me</p>
              <Link to="" className="text-[#743C34]">Esqueceu a senha?</Link>
            </div>
            <Link to="/funcionario" className=" px-10 py-[12px] bg-[#743C34] text-white text-xl font-medium rounded-lg flex justify-center">
              Entrar
            </Link>
          </div>
        </div>
        <div className="bg-[#777]">
          <img src={imgLogin} alt="" className="w-full h-full object-cover"/>
        </div>
      </section>
    </div>
  )
}
