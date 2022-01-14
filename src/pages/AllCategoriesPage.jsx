import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twin.macro'

// Actions
import { getCategoryAction } from '../redux/categoryDucks'


// Components
import ContentPage from '../ui-components/ContentPage'
import GridTableLg from '../ui-components/GridTableLg.jsx'
import GridTableMovil from '../ui-components/GridTableMovil'
import InputSearch from '../ui-components/InputSearch'
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
            <ContentSearchAndCreate>
                <button className='px-5 py-3 text-white bg-blue-600 font-medium text-sm mb-5 lg:mb-10 lg:w-60'>CREAR CATEGORIA</button>
                <TitlePage title='Nombre de la categoria'></TitlePage>

                {/* Buscador */}
                <InputSearch data={categories} />

            </ContentSearchAndCreate>

            <TitleGridTable>
                <p>Nombre</p>
                <p>Creación</p>
                <p>Actualización</p>
                <p>Acciones</p>
            </TitleGridTable>

            {/* Contenido de tabla para pantallas LG */}
            {
                categories.length > 0 && // Muestra contenido si hay categorias
                categories.map( (category) => (
                    <GridTableLg key={category.id} data={category} gridCols={4} />
                ))
            }

            {/* Contenido de la tabla para pantallas Moviles*/}
            {
                categories.length > 0 && /// Muestra contenido si hay categorias
                categories.map( (category) => (
                    <GridTableMovil key={category.id} data={category} gridCols={2} />
                ) )
            }

        </ContentPage>
    )
}

export default AllCategoriesPage
