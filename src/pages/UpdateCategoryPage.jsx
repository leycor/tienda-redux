import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

// Components
import ContentPage from '../ui-components/ContentPage'
import TitlePage from '../ui-components/TitlePage'

// Actions
import FormUpdateCategory from '../ui-components/FormUpdateCategory';
import { getDetailCategoryAction } from '../redux/categoryDucks';

// Style Components


const UpdateCategoryPage = () => {

    
    const {id } = useParams()
    const dispatch = useDispatch()
    const detailCategory = useSelector(store => store.categories.detailCategory)
    console.log(detailCategory)


    React.useEffect( () => {
        dispatch( getDetailCategoryAction(id))

    },[])


    return (
        <ContentPage>
            {
                detailCategory !== null // Si el producto existe, muestralo.
                ?
                <>
                    <TitlePage title='ACTUALIZAR CATEGORIA' />
                    <FormUpdateCategory data={detailCategory} />
                </>
                :
                <TitlePage title='Esta categoria no existe.' />

            }

        </ContentPage>
    )
}

export default UpdateCategoryPage
