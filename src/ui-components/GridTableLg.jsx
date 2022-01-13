import React from 'react'
import tw from 'twin.macro'

const ContentGridTable = tw.div`hidden md:grid py-3 font-medium px-3 border-gray-300 border-b`

const GridTableLg = ({name, createdAt, updatedAt, id, gridCols}) => {

    // Función para formatear fecha
    const date = new Date();
    const formatDate = ()=>{
        let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
        return formatted_date;
    }
    
    return (
        <ContentGridTable className={`grid-cols-${gridCols}`}>
            <p>{name}</p>
            <p>{formatDate(createdAt)}</p>
            <p> {formatDate(updatedAt)} </p>
            <div className='flex justify-between'>
                <p className='text-yellow-600'>Modificar</p>
                <p className='text-red-600'>Eliminar</p>
            </div>
        </ContentGridTable>
    )
}

export default GridTableLg
