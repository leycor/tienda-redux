import axios from "axios"

// CONSTANTES
const initialData = {
    array: [],
    detailCategory: null
}


// TIPOS DE ACCIONES
const GET_CATEGORY = 'GET_CATEGORY'
const GET_DETAIL_CATEGORY = 'GET_DETAIL_CATEGORY'

// REDUCTORES
export const categoryReducer = (state=initialData, action) => {

    switch(action.type){
        case GET_CATEGORY:
            return {...state, array: action.payload }
        case GET_DETAIL_CATEGORY:
            return {...state, detailCategory: action.payload }
        default:
            return state
    }
}

// ACCIONES

// Obtener todas las categorias
export const getCategoryAction = () => async(dispatch, getState) => {

    try {
        const result = await axios.get('http://localhost:3001/api/category')
        dispatch({
            type: GET_CATEGORY,
            payload : result.data
        })

    } catch (error) {
        console.log(`Error al obtener categorias ${error}`)
    }
}


// Obtener detalles de una categoria
export const getDetailCategoryAction = (id) => async(dispatch, getState) => {
    console.log('Obtener, categoria coon el id', id)
    try{
        const result = await axios.get(`http://localhost:3001/api/category/${id}`)
        dispatch({
            type: GET_DETAIL_CATEGORY,
            payload: result.data
        })
    } catch(error){
        console.log('Error al buscar la categoria')
    }
}


// Actualizar Categoria
export const updateCategoryAction = (id, data) => async(dispatch, getState)=> {
    console.log('Actualizando una categoria')
}