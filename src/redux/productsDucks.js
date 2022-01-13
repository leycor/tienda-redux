import axios from 'axios'

// Constantes
const initialData = {
    array: [],
}

// TIPOS DE ACCIONES
const GET_PRODUCTS = 'GET_PRODUCTS'

// REDUCERS
export const productsReducer = (state=initialData, action) => {
    
    switch(action.type){
        case GET_PRODUCTS:
            return {...state, array: action.payload }
        default:
            return state
    }

}

// ACCIONES
export const getProductsAction = () => async(dispatch, getState) => {

    try {
        const result = await axios.get('http://localhost:3001/api/products')
        dispatch({
            type: GET_PRODUCTS,
            payload : result.data
        })

    } catch (error) {
        console.log(`Error al obtener productos ${error}`)
    }
}