import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twin.macro'
import { useParams } from 'react-router-dom';

// Components
import ContentPage from '../ui-components/ContentPage'
import TitlePage from '../ui-components/TitlePage'

// Actions
import { getDetailProduct } from '../redux/productsDucks';
import FormUpdateProduct from '../ui-components/FormUpdateProduct';
import { getCategoryAction } from '../redux/categoryDucks';

// Style Components


const UpdateProduct = () => {

    
    const {id } = useParams()
    const dispatch = useDispatch()
    const detailProduct = useSelector(store => store.products.detailProduct)
    const categories = useSelector(store => store.categories.array)
    console.log(detailProduct)


    React.useEffect( () => {
        dispatch( getDetailProduct(id) )
        dispatch( getCategoryAction() ) 

    },[])


    return (
        <ContentPage>
            {
                detailProduct !== null // Si el producto existe, muestralo.
                ?
                <>
                    <TitlePage title='ACTUALIZAR PRODUCTO' />
                    <FormUpdateProduct data={detailProduct} categories={categories} />
                </>
                :
                <TitlePage title='Este producto no existe.' />

            }

        </ContentPage>
    )
}

export default UpdateProduct