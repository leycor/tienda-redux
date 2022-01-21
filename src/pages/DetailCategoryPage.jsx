import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twin.macro'
import { useParams, Link, useNavigate } from 'react-router-dom';

// Components
import ContentPage from '../ui-components/ContentPage'
import TitlePage from '../ui-components/TitlePage'

// Actions
import { deleteCategoryAction, getDetailCategoryAction } from '../redux/categoryDucks';

// Style Components

const ContentActions = tw.div`flex gap-4 justify-end mb-3`
const ContentProduct = tw.div``
const ProductName = tw.p`px-5 text-white font-medium bg-black py-2`
const ContentData = tw.div`flex gap-4 my-3 px-5 py-2 font-medium border-gray-300 border-b`
const DataTitle = tw.p`uppercase`
const DataDetail = tw.p`uppercase text-gray-600`

const DetailCategoryPage = () => {  

    const navigate = useNavigate()

    const {id } = useParams()
    const detailCategory = useSelector(store => store.categories.detailCategory)

    const dispatch = useDispatch()

    const handleDeleteCategory = (id) => {
        const confirm = window.confirm('¿Estas seguro de eliminar la categoria?')
        if(!confirm) return false // Cancelar acción
        dispatch( deleteCategoryAction(id) )
        navigate('/categories')
    }

    React.useEffect( () => {
        dispatch( getDetailCategoryAction(id) )
    },[])


    return (
        <ContentPage>
            {
                detailCategory !== null // Si el producto existe, muestralo.
                ?
                <>
                    <TitlePage title='DETALLES DE CATEGORIAS' />
                    <ContentActions>
                        <Link to={`/categories/${detailCategory.id}/update`} className='text-white font-medium px-5 py-3 bg-yellow-500' >Modificar</Link>
                        <button
                        onClick={ () => handleDeleteCategory(detailCategory.id) }  
                        className='text-white font-medium px-5 py-3 bg-red-600' >Eliminar</button>
                    </ContentActions>

                    <ContentProduct>
                        <ProductName >{detailCategory.name}</ProductName>

                        <ContentData >
                            <DataTitle >Nombre:</DataTitle>
                            <DataDetail >{detailCategory.name}</DataDetail>
                        </ContentData>

                        <ContentData >
                            <DataTitle >Fecha de creación:</DataTitle>
                            <DataDetail >{detailCategory.createdAt}</DataDetail>
                        </ContentData>

                        <ContentData >
                            <DataTitle >Ultima vez actualizado:</DataTitle>
                            <DataDetail >{detailCategory.updatedAt}</DataDetail>
                        </ContentData>

                    </ContentProduct>
                </>
                :
                <TitlePage title='Esta categoria no existe' />

            }

        </ContentPage>
    )
}

export default DetailCategoryPage
