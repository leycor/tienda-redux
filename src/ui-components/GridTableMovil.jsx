import React from 'react'
import tw from 'twin.macro'

const ContentGridTable = tw.div`grid  bg-black text-white text-sm font-medium mb-5 md:hidden`
const Title = tw.p`bg-black p-2 flex items-center justify-center border-gray-300 border-b`
const Detail = tw.p`bg-white p-2 text-black border-gray-300 border-b`

const GridTableMovil = ({name, createdAt, updatedAt, id, gridCols}) => {

        // Función para formatear fecha
        const date = new Date();
        const formatDate = ()=>{
            let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
            return formatted_date;
        }

    return (
        <ContentGridTable className={`grid-cols-${gridCols}`}>
                <Title >Nombre</Title>
                    <Detail >{ name } </Detail>

                <Title >Creación</Title>
                    <Detail > { formatDate(createdAt) } </Detail>

                <Title >Actualización</Title>
                    <Detail > { formatDate(updatedAt)} </Detail>

                <Title >Acciones</Title>
                    <Detail >Modificar || Eliminar</Detail>
        </ContentGridTable>
    )
}

export default GridTableMovil
