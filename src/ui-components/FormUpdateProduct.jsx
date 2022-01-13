import axios from "axios"
import React from 'react'
import { useDispatch } from 'react-redux'
import validator from 'validator';
import { useNavigate } from "react-router-dom"
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

    const dispatch = useDispatch()
    const navigate = useNavigate(); 
    const [error, setError] = React.useState('')
    const [inputValue, setInputValue ] = React.useState({
        name: '',
        stock: '',
        price: '',
        categoryId: '',

    })

    const { name, stock, price, categoryId} = inputValue

    // Guarda valor de input en el estado
    const handleChangeInput = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value})
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
            dispatch( updateProductAction(data.id, inputValue) )
            navigate(`/products/`)
            // try {
            //     const response = await axios.put(`http://localhost:3001/api/products/${data.id}`, inputValue);
            //     console.log(response)
            //     setInputValue({name: '', stock:'', price:'', categoyId:''})
            //     navigate(`/products/${data.id}`)
            // } catch (error) {
            //     console.log(error)
            // }
        }
        // Validaciones ======================================================================

    }

    return (
        <ContentProduct>
            <ProductName >{data.name}</ProductName>
            <p className='text-yellow-600 text-center my-3'>*** Todos los campos estan vacios, tienes que completar nuevamente para modificar el producto ***</p>
            <p className='text-red-600 text-center my-3 font-medium'> {error} </p>

            <ContentData >
                <DataTitle >Nombre:</DataTitle>
                {/* <DataDetail >{detailProduct.name}</DataDetail> */}
                <DataDetail
                name='name'
                placeholder={data.name}
                value={name}
                onChange={ (e)=> handleChangeInput(e)} 
                type='text' />
            </ContentData>

            <ContentData >
                <DataTitle >Stock:</DataTitle>
                <DataDetail
                name='stock'
                placeholder={data.stock}
                value={stock}
                onChange={ (e)=> handleChangeInput(e)} 
                type='number' />
            </ContentData>

            <ContentData >
                <DataTitle >Precio:</DataTitle>
                <DataDetail
                name='price'
                placeholder={data.price}
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

            <div className='flex justify-end pt-5'>
                <button onClick={ (e) => handleSendForm(e) } className='text-white font-medium px-5 py-3 bg-green-600' >Actualizar</button>
            </div>

        </ContentProduct>
    )
}

export default FormUpdateProduct
