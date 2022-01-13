import React from 'react'
import tw from 'twin.macro'

const ContentGridTable = tw.div`hidden md:grid py-3 font-medium px-3 border-gray-300 border-b`

const GridTableLg = ({data, gridCols}) => {

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
            <p>{`#${data.id} ${data.name}`}</p>
            <p>{data.stock}</p>
            <p className='text-green-700'>{data.price}$</p>
            <p>{data.category.name}</p>
            <div className='flex justify-between'>
                <p className='text-yellow-600'>Modificar</p>
                <p className='text-red-600'>Eliminar</p>
            </div>
        </ContentGridTable>
        :
        // Imprimir esto si la data son categorias
        <ContentGridTable className={`grid-cols-${gridCols}`}>
            <p>{`#${data.id} ${data.name}`}</p>
            <p>{formatDate(data.createdAt)}</p>
            <p> {formatDate(data.updatedAt)} </p>
            <div className='flex justify-between'>
                <p className='text-yellow-600'>Modificar</p>
                <p className='text-red-600'>Eliminar</p>
            </div>
        </ContentGridTable>
    )
}

export default GridTableLg
