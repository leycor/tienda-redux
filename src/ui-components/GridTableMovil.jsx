import React from 'react'
import tw from 'twin.macro'

const ContentGridTable = tw.div`grid grid-cols-2  bg-black text-white text-sm font-medium mb-5 md:hidden`
const Title = tw.p`bg-black p-2 flex items-center justify-center border-gray-300 border-b`
const Detail = tw.p`bg-white p-2 text-black border-gray-300 border-b`

const GridTableMovil = ({data,gridCols}) => {

        // Función para formatear fecha
        const date = new Date();
        const formatDate = ()=>{
            let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
            return formatted_date;
        }

    return (
        data.price
        ? 
        // Imprimir esto si la data son productos
        <ContentGridTable className={`grid-cols-${gridCols}`}>
                <Title >Nombre</Title>
                    <Detail >{`#${data.id} ${data.name}`} </Detail>

                <Title >Stock</Title>
                    <Detail > { data.stock} </Detail>

                <Title >Precio</Title>
                    <Detail className='text-green-600' > { data.price}$ </Detail>

                <Title >Categoria</Title>
                    <Detail > { data.category.name} </Detail>

                <Title >Acciones</Title>
                    <Detail >Ver detalles</Detail>
        </ContentGridTable>

        :
        // Imprimir esto si la data son categorias
        <ContentGridTable>
                <Title >Nombre</Title>
                    <Detail >{`#${data.id} ${data.name}`} </Detail>

                <Title >Creación</Title>
                    <Detail > { formatDate(data.createdAt) } </Detail>

                <Title >Actualización</Title>
                    <Detail > { formatDate(data.updatedAt)} </Detail>

                <Title >Acciones</Title>
                    <Detail >Ver detalles</Detail>
        </ContentGridTable>
    )
}

export default GridTableMovil
