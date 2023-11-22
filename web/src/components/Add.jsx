import { useState } from 'react';
import Modal from 'react-modal';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export default function Add() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      opacity: 1,
      transform: `translateY(${modalIsOpen ? '0%' : '100%'})`,
      transition: 'transform 0.3s ease-in-out',
      width: '700px',
      height: '600px',
      margin: 'auto',
      borderRadius: '10px',
      backgroundColor: '#FEFEFE',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.35)',
    },
  };

    return (
        <div>
          <button onClick={openModal}> <AddCircleRoundedIcon style={{ color: '#743C34', fontSize: '70px'}}/> </button>
    
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Exemplo Modal"
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                transition: 'background-color 0.9s ease-in-out',
              },
              content: customStyles.content,
            }}
          >
            <div>

              <h1 className='text-4xl font-normal text-center text-[#151515]'>
                Adicionar Funcionário
              </h1>

            <p className='text-2xl text-[#414141] mt-10'>Nome</p>
            <input className='p-4 bg-[#F5EFEC] border-2 border-[#D5D5D5] rounded-[10px] w-[400px] mt-1 text-[#515151]' type="text"/>
            <p className='text-2xl text-[#414141] mt-10'>Email</p>
            <input className='p-4 bg-[#F5EFEC] border-2 border-[#D5D5D5] rounded-[10px] w-[400px] mt-1 text-[#515151]' type="text"/>
            <p className='text-2xl text-[#414141] mt-10'>Telefone</p>
            <input className='p-4 bg-[#F5EFEC] border-2 border-[#D5D5D5] rounded-[10px] w-[400px] mt-1 text-[#515151]' type="text"/>

            <div className='mt-10 space-x-12'>
              <button  className='w-[400px] h-[50px] bg-[#743C34] text-white text-lg border-[#743C34] border-2 font-medium rounded-lg'
              onClick={closeModal}>
                Adicionar
              </button>
            </div>
            </div>
          </Modal>
        </div>
      );
    }
