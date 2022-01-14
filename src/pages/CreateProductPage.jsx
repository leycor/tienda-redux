import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Components
import ContentPage from '../ui-components/ContentPage'
import TitlePage from '../ui-components/TitlePage'

// ui components
import FormCreateProduct from '../ui-components/FormCreateProduct'

// Actions
import { getCategoryAction } from '../redux/categoryDucks';

// Style Components


const CreateProductPage = () => {

    
    const dispatch = useDispatch()
    const categories = useSelector( store => store.categories.array)
    console.log(categories)

    React.useEffect( ()=> {
        dispatch( getCategoryAction() )
    },[])


    return (
        <ContentPage>

            <TitlePage title='CREAR PRODUCTO' />
            <FormCreateProduct categories={categories} />

        </ContentPage>
    )
}

export default CreateProductPage