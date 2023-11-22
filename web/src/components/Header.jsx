import { Link } from 'react-router-dom'

import LogoWeb from '../assets/LogoWeb.png'

export default function Header() {
  return (
    <section className='h-[100px] w-screen bg-[#FCFCFC]'>
        <div className='h-full flex justify-between items-center mx-44'>
            <div>
                <img className='cursor-pointer' src={LogoWeb} alt="Logo" />
            </div>
            <div className='space-x-10'>
            <Link to='/login' className='px-10 py-[10px] bg-[#BEA497] text-white text-xl font-medium rounded-lg'>
                Sair
            </Link>
            </div>
        </div>
    </section>
  )
}
