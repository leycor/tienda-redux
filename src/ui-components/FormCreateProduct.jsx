import React from 'react'
import { useDispatch } from 'react-redux'
import { Link  } from "react-router-dom"
import tw from 'twin.macro'

// Funciones utilitarias
import { validationProduct } from '../utils/validations'

// Actions
import { createProductAction } from '../redux/productsDucks'


// Style Components
const ContentProduct = tw.div``
const ProductName = tw.p`px-5 text-white font-medium bg-black py-2`
const ContentData = tw.div`flex gap-4 my-3 px-5 py-2 font-medium border-gray-300 border-b`
const DataTitle = tw.p`uppercase`
const DataDetail = tw.input`text-gray-600 focus:outline-none w-full p-1 px-2 italic`

const FormCreateProduct = ({categories}) => {

    const dispatch = useDispatch()
    const [error, setError] = React.useState('')
    const [file, setFile ] = React.useState(null)
    const [createdProduct, setCreatedProduct ] = React.useState(false)
    const [inputValue, setInputValue ] = React.useState({
        name: '',
        stock: '',
        price: '',
        categoryId: '',

    })

    const { name, stock, price, categoryId } = inputValue

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
        if(validationProduct(inputValue, file, setError) === 'formOkey'){
            // Enviar actualizaciones a la DB
            const resUpdate = window.confirm('¿Estas seguro que desea crear el producto?')
            
            if(resUpdate !== true) return false // Confirmación aceptada
            
            const formData = new FormData()
            formData.append('file', file)
            formData.append('name', name)
            formData.append('stock', stock)
            formData.append('price', price)
            formData.append('categoryId', categoryId)

            dispatch( createProductAction(formData,setError,setCreatedProduct) )
            setInputValue({name: '', stock: '', price: '', categoryId: ''})
        }
        // Validaciones ======================================================================

    }

    return (
        <ContentProduct>
            <ProductName >Crear nuevo producto</ProductName>
            <p className='text-yellow-600 text-center my-3'>*** Todos los campos son obligatorios***</p>
            {
                createdProduct ?
                <Link to='/products' className='text-green-600 text-center my-3 font-medium'>El producto ha sido creado, click aquí para ver lista de productos</Link>
                :<p className='text-red-600 text-center my-3 font-medium'> {error} </p>
            }

            <ContentData >
                <DataTitle >Nombre:</DataTitle>
                {/* <DataDetail >{detailProduct.name}</DataDetail> */}
                <DataDetail
                name='name'
                placeholder='Nombre de producto'
                value={name}
                onChange={ (e)=> handleChangeInput(e)} 
                type='text' />
            </ContentData>

            <ContentData >
                <DataTitle >Stock:</DataTitle>
                <DataDetail
                name='stock'
                placeholder='Stock'
                value={stock}
                onChange={ (e)=> handleChangeInput(e)} 
                type='number' />
            </ContentData>

            <ContentData >
                <DataTitle >Precio:</DataTitle>
                <DataDetail
                name='price'
                placeholder='Precio'
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
                <button onClick={ (e) => handleSendForm(e) } className='text-white font-medium px-5 py-3 bg-green-600' >CREAR</button>
            </div>

        </ContentProduct>
    )
}

export default FormCreateProduct
