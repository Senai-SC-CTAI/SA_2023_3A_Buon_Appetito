import { useState } from 'react';
import Modal from 'react-modal';

import { DeleteOutline } from '@mui/icons-material'


export default function Delete() {
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
      width: '400px',
      height: '220px',
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
          <button onClick={openModal}> <DeleteOutline style={{ color: '#923123'}}/> </button>
    
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
              <h1 className='text-4xl font-normal text-center text-[#151515]'>
                Deseja remover <br/> este funcionário?
              </h1>
            <div className='mt-10 space-x-12'>
              <button className='w-[100px] py-[8px] bg-transparent text-[#8F8F8F] text-lg border-[#A07964] border-2 font-medium rounded-lg' 
              onClick={closeModal}>
                Excluir
              </button>
              <button  className='w-[100px] h-[50px] bg-[#743C34] text-white text-lg border-[#743C34] border-2 font-medium rounded-lg'
              onClick={closeModal}>
                Não
              </button>
            </div>
          </Modal>
        </div>
      );
    }
