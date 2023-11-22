import { Link } from 'react-router-dom'
import LogoWeb from '../assets/LogoWeb.png'

export default function Navbar() {
  return (
      <main className='h-[100px] w-screen bg-[#FCFCFC]'>
          <section className='h-full flex justify-between items-center mx-32'>
              <div>
                  <img className='cursor-pointer' src={LogoWeb} alt="Logo" />
              </div>
              <div className='space-x-10'>
                <Link to="/login" className='px-10 py-[10px] bg-[#BEA497] text-white text-xl font-medium rounded-lg'>Entrar</Link>
                  <Link to="/register" className='px-6 py-[10px] bg-[#402218] text-white text-xl font-medium rounded-lg'>Cadastrar</Link>
              </div>
          </section>
      </main>
  )
}
