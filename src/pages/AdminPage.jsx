import React from 'react'
import tw from 'twin.macro'

// Components
import ContentPage from '../ui-components/ContentPage'
import TitlePage from '../ui-components/TitlePage'

// Style Components
const TitleMenuPage = tw.p`bg-black px-6 py-2 text-white font-medium mb-3`
const ContentTable = tw.div`px-6 font-medium`
const ContentElementTable = tw.div`flex justify-between mb-3 border-gray-300 border-b py-3`
const NameElementTable = tw.p``
const ButtonElementTable = tw.button`cursor-pointer text-blue-600`


const AdminPage = () => {
    return (
        <ContentPage>
            <TitlePage title='SITIO ADMINISTRATIVO' />
                <TitleMenuPage >Gestor de mini mercado</TitleMenuPage>

                <ContentTable className='px-6 font-medium'>
                    <ContentElementTable>
                        <NameElementTable>Categorias (5)</NameElementTable>
                        <ButtonElementTable>Ver detalles</ButtonElementTable>
                    </ContentElementTable>

                    <ContentElementTable >
                        <NameElementTable>Productos (5)</NameElementTable>
                        <ButtonElementTable >Ver detalles</ButtonElementTable>
                    </ContentElementTable>
                </ContentTable>

        </ContentPage>
    )
}

export default AdminPage
