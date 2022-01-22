import axios from "axios"
const PORT = 3001


// CONSTANTES
const initialData = {
    array: [],
    detailCategory: ''
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
    console.log('GET_CATEGORY: OBTENIENDO TODAS LAS CATEGORIAS')

    try {
        const result = await axios.get(`http://localhost:${PORT}/api/category`)
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
    console.log('GET_DETAIL_CATEGORY: OBTENIENDO CATEGORIA CON EL ID', id)
    try{
        const result = await axios.get(`http://localhost:${PORT}/api/category/${id}`)
        dispatch({
            type: GET_DETAIL_CATEGORY,
            payload: result.data
        })
    } catch(error){
        console.log('Error al buscar la categoria')
    }
}


// Actualizar Categoria
export const updateCategoryAction = (id, data,setError,setCategoryCreated) => async(dispatch, getState)=> {
    console.log('UPDATE_CATEGORY: ACTUALIZAR CATEGORIA CON EL ID', id)
    try {   
        const response = await axios.put(`http://localhost:${PORT}/api/category/${id}`, data)
        console.log(response.data.error)
        // Si en la petición obtengo como respuesta un error, envio el mensaje al componente para avisar al usuario
        if(response.data.error) return setError(response.data.data)

        dispatch({
            type: UPDATE_CATEGORY,
        })
        
        setCategoryCreated(true)
    } catch (error) {
        console.log('No se pudo actualizar la categoria')
    }
}

// Crear categoria
export const createCategoryAction = (category, setError, setCategoryCreated) => async(dispatch, getState) => {
    console.log('CREATE_CATEGORY: CREAR LA CATEGORIA', category)
    try {
        const response = await axios.post(`http://localhost:${PORT}/api/category`, category)
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
    console.log('DELETE_CATEGORY: ELIMINAR CATEGORIA CON EL ID', id)
    try {   
        const response = await axios.delete(`http://localhost:${PORT}/api/category/${id}`)
        console.log(response)
        dispatch({
            type: DELETE_CATEGORY,
        })
    } catch (error) {
        console.log(error)
    }
}