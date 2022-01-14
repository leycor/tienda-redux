import React from 'react'

// Components
import ContentPage from '../ui-components/ContentPage'
import TitlePage from '../ui-components/TitlePage'

// ui components
import FormCreateCategory from '../ui-components/FormCreateCategory'


// Style Components


const CreateCategoryPage = () => {

    return (
        <ContentPage>

            <TitlePage title='CREAR CATEGORIA' />
            <FormCreateCategory />
            {/* <FormCreateProduct /> */}

        </ContentPage>
    )
}

export default CreateCategoryPage
