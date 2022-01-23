import React from 'react';

const ModalImage = ({showModal, file, setShowModal}) => {
  return(
    <div className={`${showModal ? null: 'hidden'} flex-col text-white absolute inset-0 m-auto w-96 h-1/2 w-11/12`}>
    {
        showModal &&
        <img className='object-contain w-full h-full' src={`http://localhost:3001/images/${file}`} alt="name" />
    }
    <p onClick={ () => setShowModal(false)} className=' cursor-pointer mt-3 mx-auto bg-red-500 p-5 w-48 h-10 flex items-center justify-center font-medium'>Cerrar Imagen</p>
    </div>
  );
};

export default ModalImage;
