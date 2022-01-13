import axios from "axios"

// CONSTANTES
const initialData = {
    array: [],
}


// TIPOS DE ACCIONES
const GET_CATEGORY = 'GET_CATEGORY'

// REDUCTORES
export const categoryReducer = (state=initialData, action) => {

    switch(action.type){
        case GET_CATEGORY:
            return {...state, array: action.payload }
        default:
            return state
    }
}

// ACCIONES
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