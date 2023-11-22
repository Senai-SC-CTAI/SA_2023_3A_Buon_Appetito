import Delete from '../../components/Delete';
import Edit from '../../components/Edit';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

import Add from '../../components/Add';
import Header from '../../components/Header';



export default function Funcionario() {
  
  return (
    <main className='h-screen w-screen bg-[#FBF7F3]'>
      <Header />

      <section className='flex items-center justify-between mx-44 mt-16'>
        <h1 className='text-8xl text-[#402218]'>
          Funcionários
        </h1>

        <div className='space-x-10'>
          <input 
            type="text" 
            placeholder='Pesquisar...'
            className='bg-[#E7E7E7] rounded-full py-4 px-10'
          />
          <button>
            <Add />
          </button>
        </div>
      </section>
      
      <section className='mx-72 h-3/5 mt-12 bg-white text-center p-2 overflow-y-auto'>

        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-3 text-[#232323] font-medium'>
          <p>
            <PermIdentityIcon  style={{ color: '#232323' }}/> Nome
          </p>
          <p>
            @ Email
          </p>
          <p>
            <LocalPhoneOutlinedIcon /> Telefone
          </p>
          <div>

          </div>
          <div>

          </div>
        </div>

        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060]'>
          <p >
            Lucas S. Aguiar
          </p>
          <p>
            lucas.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
            <Delete />
        </div>

        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060] mt-1'>
          <p >
            Valentina S. Aguiar
          </p>
          <p>
            valentina.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
          <div>
            <Delete />
          </div>
        </div>

        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060] mt-1'>
          <p >
            Valentina S. Aguiar
          </p>
          <p>
            valentina.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
          <div>
            <Delete />
          </div>
        </div>

        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060] mt-1'>
          <p >
            Valentina S. Aguiar
          </p>
          <p>
            valentina.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
          <div>
            <Delete />
          </div>
        </div>

        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060] mt-1'>
          <p >
            Valentina S. Aguiar
          </p>
          <p>
            valentina.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
          <div>
            <Delete />
          </div>
        </div>

        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060] mt-1'>
          <p >
            Valentina S. Aguiar
          </p>
          <p>
            valentina.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
          <div>
            <Delete />
          </div>
        </div>

        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060] mt-1'>
          <p >
            Valentina S. Aguiar
          </p>
          <p>
            valentina.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
          <div>
            <Delete />
          </div>
        </div>

        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060] mt-1'>
          <p >
            Valentina S. Aguiar
          </p>
          <p>
            valentina.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
          <div>
            <Delete />
          </div>
        </div>

        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060] mt-1'>
          <p >
            Valentina S. Aguiar
          </p>
          <p>
            valentina.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
          <div>
            <Delete />
          </div>
          <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060]'>
          <p >
            Lucas S. Aguiar
          </p>
          <p>
            lucas.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
            <Delete />
        </div>
        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060]'>
          <p >
            Lucas S. Aguiar
          </p>
          <p>
            lucas.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
            <Delete />
        </div>
        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060]'>
          <p >
            Lucas S. Aguiar
          </p>
          <p>
            lucas.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
            <Delete />
        </div>
        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060]'>
          <p >
            Lucas S. Aguiar
          </p>
          <p>
            lucas.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
            <Delete />
        </div>
        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060]'>
          <p >
            Lucas S. Aguiar
          </p>
          <p>
            lucas.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
            <Delete />
        </div>
        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060]'>
          <p >
            Lucas S. Aguiar
          </p>
          <p>
            lucas.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
            <Delete />
        </div>
        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060]'>
          <p >
            Lucas S. Aguiar
          </p>
          <p>
            lucas.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
            <Delete />
        </div>
        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060]'>
          <p >
            Lucas S. Aguiar
          </p>
          <p>
            lucas.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
            <Delete />
        </div>
        <div className='bg-white col-span-5 grid grid-cols-[1fr,1fr,1fr,70px,70px] p-2 border-b-[#D5D5D5] border-b text-[#606060]'>
          <p >
            Lucas S. Aguiar
          </p>
          <p>
            lucas.sa@gmail.com
          </p>
          <p>
            +55 (48) 99456-7264
          </p>
          <div>
            <Edit/>
          </div>
            <Delete />
        </div>
        </div>

      </section>
    </main>
  )
}
