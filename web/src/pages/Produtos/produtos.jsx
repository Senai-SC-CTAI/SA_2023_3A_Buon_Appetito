import Add from "../../components/Add";
import Header from "../../components/Header";

import Produto from "../../components/Produto";


export default function Produtos() {
  return (
    <main className='h-screen w-screen bg-[#FBF7F3]'>
      <Header />
      <section className="mx-44 mt-10 space-y-4">
        <p className="text-[#606060] text-2xl font-light">Valentina Kroth Gil Cardoso</p>
        <h1 className='text-8xl text-[#402218]'>Cardápio Cantina</h1>
        <h3 className="text-[#606060] font-normal text-3xl">Modificar cardápio</h3>
        <div className='space-x-10'>
          <input 
            type="text" 
            placeholder='Pesquisar...'
            className='bg-[#E7E7E7] rounded-full py-4 px-12 text-xl'
          />
          <button>
            <Add />
          </button>
        </div>
      </section>
      <section className="mt-10 w-screen overflow-y-auto bg-[#DDC6BA] rounded-t-[80px]">
        <div className="flex mx-44 justify-between mt-20 items-center">
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </div>
        <div className="flex mx-44 justify-between mt-20">
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </div>
        <div className="flex mx-44 justify-between mt-20">
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </div>
        <div className="flex mx-44 justify-between mt-20">
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </div>
      </section>
    </main>
  )
}
