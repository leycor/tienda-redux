import axios from "axios"


// CONSTANTES
const initialData = {
    array: [],
    detailCategory: null
}


// TIPOS DE ACCIONES
const GET_CATEGORY = 'GET_CATEGORY'
const GET_DETAIL_CATEGORY = 'GET_DETAIL_CATEGORY'
const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
const CREATE_CATEGORY = 'CREATE_CATEGORY'
const DELETE_CATEGORY = 'DELETE_CATEGORY'

// REDUCTORES
export const categoryReducer = (state=initialData, action) => {

    switch(action.type){
        case GET_CATEGORY:
            return {...state, array: action.payload }
            
        case GET_DETAIL_CATEGORY:
            return {...state, detailCategory: action.payload }

        case UPDATE_CATEGORY:
            return state

        case DELETE_CATEGORY:
            return state

        case CREATE_CATEGORY:
            return state

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
    console.log('Actualizando una categoria con el id', id)
    try {   
        const response = await axios.put(`http://localhost:3001/api/category/${id}`, data)
        console.log(response)

        dispatch({
            type: UPDATE_CATEGORY,
        })
    } catch (error) {
        console.log('No se pudo actualizar la categoria')
    }
}

// Crear categoria
export const createCategoryAction = (category, setError, setCategoryCreated) => async(dispatch, getState) => {

    console.log('Petición POST para crear la categoria', category)
    try {
        const response = await axios.post(`http://localhost:3001/api/category`, category)
        console.log(response.data.error)

        // Si en la petición obtengo como respuesta un error, envio el mensaje al componente para avisar al usuario
        if(response.data.error) return setError(response.data.data)

        console.log(response.data.data)

        dispatch({
            type: CREATE_CATEGORY,
            payload: response.data
        })

        setCategoryCreated(true)
        
    } catch (error) {
        console.log('Error al hacer la petición POST para crear  una nueva categoria')
    }
}

// Eliminar Categoria
export const deleteCategoryAction = (id) => async(dispatch, getState) => {
    console.log('Eliminar categoria', id)
    try {   
        const response = await axios.delete(`http://localhost:3001/api/category/${id}`)
        console.log(response)
        dispatch({
            type: DELETE_CATEGORY,
        })
    } catch (error) {
        console.log(error)
    }
}