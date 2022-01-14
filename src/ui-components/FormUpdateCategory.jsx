import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import tw from 'twin.macro'

// Funciones utilitarias
import { updateCategoryAction } from "../redux/categoryDucks"
import { validationCategory } from "../utils/validationCategory"

// Actions


// Style Components
const ContentProduct = tw.div``
const ProductName = tw.p`px-5 text-white font-medium bg-black py-2`
const ContentData = tw.div`flex gap-4 my-3 px-5 py-2 font-medium border-gray-300 border-b`
const DataTitle = tw.p`uppercase`
const DataDetail = tw.input`text-gray-600 focus:outline-none w-full p-1 px-2 italic`

const FormUpdateCategory = ({data, categories}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate(); 
    const [error, setError] = React.useState('')
    const [inputValue, setInputValue ] = React.useState({
        name: '',
    })

    const { name } = inputValue

    // Guarda valor de input en el estado
    const handleChangeInput = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }

    // Enviar actualizaciones
    const handleSendForm = async(e) => {
        e.preventDefault()
        console.log(inputValue)

        // Validaciones ======================================================================
        if(validationCategory(inputValue, setError) === 'formOkey'){
            // Enviar actualizaciones a la DB
            const resUpdate = window.confirm('¿Estas seguro que desea actualizar la categoria?')
            if(resUpdate !== true) return false // Confirmación aceptada
            dispatch( updateCategoryAction(data.id, inputValue))
            navigate(`/categories`)

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

            <div className='flex justify-end pt-5'>
                <button onClick={ (e) => handleSendForm(e) } className='text-white font-medium px-5 py-3 bg-green-600' >Actualizar</button>
            </div>

        </ContentProduct>
    )
}

export default FormUpdateCategory
