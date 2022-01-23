import React from 'react'
import tw from 'twin.macro'

import { Link } from 'react-router-dom'

// Components
import ModalImage from './ModalImage'

const ContentGridTable = tw.div`hidden md:grid py-3 font-medium px-3 border-gray-300 border-b`

const GridTableLg = ({data, gridCols}) => {

    const [showModal, setShowModal] = React.useState(false)

    // Función para formatear fecha
    const date = new Date();
    const formatDate = ()=>{
        let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
        return formatted_date;
    }

    return (
        <>
        {
            data.price 
            ?
            // Imprimir esto si la data son productos
            <ContentGridTable className={`grid-cols-${gridCols}`}>
                <p>{`#${data.id} ${data.name}`}</p>
                <p className='cursor-pointer text-blue-600' onClick={() => setShowModal(!showModal)}>Link</p>
                <p>{data.stock}</p>
                <p className='text-green-700'>{data.price}$</p>
                <p>{data.category?.name}</p>
                <Link to={`/products/${data.id}`} className='text-blue-400'>Ver detalles</Link>
            </ContentGridTable>
            :
            // Imprimir esto si la data son categorias
            <ContentGridTable className={`grid-cols-${gridCols}`}>
                <p>{`#${data.id} ${data.name}`}</p>
                <p>{formatDate(data.createdAt)}</p>
                <p> {formatDate(data.updatedAt)} </p>
                <Link to={`/categories/${data.id}`} className='text-blue-400'>Ver detalles</Link>
            </ContentGridTable>
        }

        {/* Modal para abrir las imegenes */}
        <ModalImage file={data.file} setShowModal={setShowModal} showModal={showModal} />
        </>
    )
}

export default GridTableLg
