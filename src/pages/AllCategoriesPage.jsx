import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twin.macro'

// Actions
import { getCategoryAction } from '../redux/categoryDucks'


// Components
import ContentPage from '../ui-components/ContentPage'
import GridTableLg from '../ui-components/GridTableLg.jsx'
import TitlePage from '../ui-components/TitlePage'

// Style Components
const ContentSearchAndCreate = tw.div`flex flex-col mb-4`
const TitleGridTable = tw.div`hidden md:grid grid-cols-4 bg-black p-3 text-white font-medium text-xs md:text-sm`

const AllCategoriesPage = () => {

    const dispatch = useDispatch()
    const categories = useSelector( store => store.categories.array )

    // Obtener datos de store al iniciar el componente
    React.useEffect( ()=>{
        dispatch( getCategoryAction() )
    },[])

    console.log(categories)
    return (
        <ContentPage>
            <TitlePage title='Nombre de la categoria'></TitlePage>
            <ContentSearchAndCreate>
                <button className='px-5 py-3 text-white bg-blue-600 font-medium text-sm mb-5 lg:mb-10 lg:w-60'>CREAR CATEGORIA</button>
                <input type='text' className='focus:outline-none text-center lg:text-left mb-2 px-5 py-2 italic border-black border lg:w-60' placeholder='Buscar...'></input>
            </ContentSearchAndCreate>

            <TitleGridTable>
                <p>Nombre</p>
                <p>Creación</p>
                <p>Actualización</p>
                <p>Acciones</p>
            </TitleGridTable>

            {/* Contenido de tabla para pantallas LG */}
            {
                categories.map( ({id, name, createdAt, updatedAt}) => (
                    <GridTableLg key={id} id={id} name={name} createdAt={createdAt} updatedAt={updatedAt} />
                ))
            }
            {/* <GridTableLg name='Vegetaless' created='20/20/20' updated='20/20/20' /> */}

            {/* Mostrar Tabla en Movil */}
            <div className='grid grid-cols-2 bg-black text-white text-sm font-medium mb-5 md:hidden'>
                <p className='bg-black p-2 flex items-center justify-center border-gray-300 border-b'>Nombre</p>
                <p className='bg-white p-2 text-black border-gray-300 border-b'>Carnes Molida Picada</p>
                <p className='bg-black p-2 flex items-center justify-center border-gray-300 border-b'>Creación</p>
                <p className='bg-white p-2 text-black border-gray-300 border-b'>20/02/1995</p>
                <p className='bg-black p-2 flex items-center justify-center border-gray-300 border-b'>Actualización</p>
                <p className='bg-white p-2 text-black border-gray-300 border-b'>20/02/1995</p>
                <p className='bg-black p-2 flex items-center justify-center border-gray-300 border-b'>Acciones</p>
                <p className='bg-white p-2 text-black border-gray-300 border-b'>Modificar || Eliminar</p>
            </div>

        </ContentPage>
    )
}

export default AllCategoriesPage
