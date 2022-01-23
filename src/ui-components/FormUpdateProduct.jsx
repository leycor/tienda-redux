import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import tw from 'twin.macro'

// Funciones utilitarias
import { validationProduct } from '../utils/validations'
import { updateProductAction } from "../redux/productsDucks";

// Actions


// Style Components
const ContentProduct = tw.div``
const ProductName = tw.p`px-5 text-white font-medium bg-black py-2`
const ContentData = tw.div`flex gap-4 my-3 px-5 py-2 font-medium border-gray-300 border-b`
const DataTitle = tw.p`uppercase`
const DataDetail = tw.input`text-gray-600 focus:outline-none w-full p-1 px-2 italic`

const FormUpdateProduct = ({data, categories}) => {
    console.log('Ejecutando componente UpdateProduct')
    const [file, setFile ] = React.useState(null)
    const [updateProduct, setUpdateProduct ] = React.useState(false)
    const dispatch = useDispatch()
    const [error, setError] = React.useState('')
    const [inputValue, setInputValue ] = React.useState({
        name: '' ,
        stock: '',
        price: '',
        categoryId: '',

    })

    const { name, stock, price, categoryId } = inputValue

    React.useEffect( () => {
        if(data){
            setInputValue({...inputValue, name: data.name.toString() , stock: data.stock.toString() , price: data.price.toString() })
        }

    },[data] )


    // Guarda valor de input en el estado
    const handleChangeInput = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }

    // Capturar valores de la imagen
    const handleChangeFile = (e) => {
        setFile(e.target.files[0])
    }


    // Enviar actualizaciones
    const handleSendForm = async(e) => {
        e.preventDefault()
        console.log(inputValue)

        // Validaciones ======================================================================
        if(validationProduct(inputValue, setError) === 'formOkey'){
            // Enviar actualizaciones a la DB
            const resUpdate = window.confirm('¿Estas seguro que desea actualizar el producto?')
            if(resUpdate !== true) return false // Confirmación aceptada

            const formData = new FormData()
            formData.append('file', file)
            formData.append('name', name)
            formData.append('stock', stock)
            formData.append('price', price)
            formData.append('categoryId', categoryId)

            dispatch( updateProductAction(data.id, formData,setError,setUpdateProduct) )
            // navigate(`/products/${data.id}`)
        }
        // Validaciones ======================================================================

    }

    return (
        <ContentProduct>
            <ProductName >{data.name}</ProductName>
            <p className='text-yellow-600 text-center my-3'>*** Todos los campos estan vacios, tienes que completar nuevamente para modificar el producto ***</p>
            {
                updateProduct ?
                <Link to={`/products/${data.id}`} className='text-green-600 text-center my-3 font-medium'>El producto ha sido actualizado, click aquí para ir a su detalle</Link>
                :<p className='text-red-600 text-center my-3 font-medium'> {error} </p>
            }


            <ContentData >
                <DataTitle >Nombre:</DataTitle>
                {/* <DataDetail >{detailProduct.name}</DataDetail> */}
                <DataDetail
                name='name'
                placeholder='Nombre del producto'
                value={name}
                onChange={ (e)=> handleChangeInput(e)} 
                type='text' />
            </ContentData>

            <ContentData >
                <DataTitle >Stock:</DataTitle>
                <DataDetail
                name='stock'
                placeholder='Cantidad en stock'
                value={stock}
                onChange={ (e)=> handleChangeInput(e)} 
                type='number' />
            </ContentData>

            <ContentData >
                <DataTitle >Precio:</DataTitle>
                <DataDetail
                name='price'
                placeholder='Precio del producto'
                value={price}
                onChange={ (e)=> handleChangeInput(e)} 
                type='number' />
            </ContentData>

            <ContentData >
                <DataTitle >Categoria:</DataTitle>
                <select
                onChange={ (e)=> handleChangeInput(e)}
                className='text-gray-600 focus:outline-none w-full p-1 px-2 italic' name="categoryId">
                    <option name='categoryId' value=''></option>
                    {
                        categories.map( category => 
                            <option
                            key={category.id} name='categoryId' value={category.id}>{category.name}</option>
                        )
                    }
                </select>
                {/* <DataDetail >{detailProduct.category.name}</DataDetail> */}
            </ContentData>

            
            <ContentData >
                <DataTitle >Imagen:</DataTitle>
                <DataDetail
                name='file'
                placeholder='file'
                type='file'
                onChange={ handleChangeFile }  
                />
            </ContentData>

            <div className='flex justify-end pt-5'>
                <button onClick={ (e) => handleSendForm(e) } className='text-white font-medium px-5 py-3 bg-green-600' >Actualizar</button>
            </div>

        </ContentProduct>
    )
}

export default FormUpdateProduct
