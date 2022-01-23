import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twin.macro'
import { useParams, Link, useNavigate } from 'react-router-dom';

// Components
import ContentPage from '../ui-components/ContentPage'
import TitlePage from '../ui-components/TitlePage'

// Actions
import { deleteProductAction, getDetailProduct } from '../redux/productsDucks';

// Style Components

const ContentActions = tw.div`flex gap-4 justify-end mb-3`
const ContentProduct = tw.div``
const ProductName = tw.p`px-5 text-white font-medium bg-black py-2`
const ContentData = tw.div`flex gap-4 my-3 px-5 py-2 font-medium border-gray-300 border-b`
const DataTitle = tw.p`uppercase`
const DataDetail = tw.p`uppercase text-gray-600`

const DetailProductPage = () => {

    const {id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const detailProduct = useSelector(store => store.products.detailProduct)
    console.log(detailProduct)

    const handleDeleteProduct = (id) => {
        const confirm = window.confirm('¿Estas seguro de eliminar el producto?')
        if(!confirm) return false // Cancelar acción
        dispatch( deleteProductAction(id) )
        navigate('/products')
    }

    React.useEffect( () => {
        dispatch( getDetailProduct(id) )
    },[])


    return (
        <ContentPage>
            {
                detailProduct !== null // Si el producto existe, muestralo.
                ?
                <>
                    <TitlePage title='DETALLES DE PRODUCTOS' />
                    <ContentActions>
                        <Link to={`/products/${detailProduct.id}/update`} className='text-white font-medium px-5 py-3 bg-yellow-500' >Modificar</Link>
                        <button 
                        onClick={ () => handleDeleteProduct(detailProduct.id) } 
                        className='text-white font-medium px-5 py-3 bg-red-600' >Eliminar</button>
                    </ContentActions>

                    <ContentProduct>
                        <ProductName >{detailProduct.name}</ProductName>
                       {
                           detailProduct.file &&
                           <img className='mt-5 w-40 h-40 object-cover' src={`http://localhost:3001/images/${detailProduct.file}`}  alt="name" />
                       }

                        <ContentData >
                            <DataTitle >Nombre:</DataTitle>
                            <DataDetail >{detailProduct.name}</DataDetail>
                        </ContentData>

                        <ContentData >
                            <DataTitle >Stock:</DataTitle>
                            <DataDetail >{detailProduct.stock}</DataDetail>
                        </ContentData>

                        <ContentData >
                            <DataTitle >Precio:</DataTitle>
                            <DataDetail >{detailProduct.price}$</DataDetail>
                        </ContentData>

                        <ContentData >
                            <DataTitle >Categoria:</DataTitle>
                            <DataDetail >{detailProduct.category?.name}</DataDetail>
                        </ContentData>

                        <ContentData >
                            <DataTitle >Fecha de creación:</DataTitle>
                            <DataDetail >{detailProduct.createdAt}</DataDetail>
                        </ContentData>

                        <ContentData >
                            <DataTitle >Ultima vez actualizado:</DataTitle>
                            <DataDetail >{detailProduct.updatedAt}</DataDetail>
                        </ContentData>

                    </ContentProduct>
                </>
                :
                <TitlePage title='Este producto no existe.' />

            }

        </ContentPage>
    )
}

export default DetailProductPage
