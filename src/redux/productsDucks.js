import axios from 'axios'

// Constantes
const initialData = {
    array: [],
    filter:[],
    filterValue: 'todos',
    detailProduct: null,
}

// TIPOS DE ACCIONES
const GET_PRODUCTS = 'GET_PRODUCTS'
const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
const GET_DETAIL_PRODUCT = 'GET_DETAIL_PRODUCT'

// REDUCERS
export const productsReducer = (state=initialData, action) => {
    
    switch(action.type){
        case GET_PRODUCTS:
            return {...state, array: action.payload }

        case FILTER_PRODUCTS:
            return {...state, filter: action.payload.array, filterValue: action.payload.filter }

        case GET_DETAIL_PRODUCT:
            return {...state, detailProduct: action.payload}
        default:
            return state
    }

}

// ACCIONES

// Obtener todos los productos
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

// Filtrar productos
export const filterProductAction = ( filter ) => async( dispatch, getState) => {
    console.log('La acción tomó como parametro', filter)
    
    const products = getState().products.array
    const result = products.filter( product => product.category.name.toLocaleLowerCase() === filter.toLocaleLowerCase() )

    dispatch({
        type:FILTER_PRODUCTS,
        payload: {
            filter: filter,
            array: filter === 'todos' ? [] : result
        }
    })
}

export const getDetailProduct = (id) => async(dispatch, getState) => {
    console.log('Estoy buscando producto con el id', id)
    try {
        const result = await axios.get(`http://localhost:3001/api/products/${id}`)

        dispatch({
            type: GET_DETAIL_PRODUCT,
            payload: result.data
        })

    } catch (error) {
        console.log('Error al buscar el producto', error)
    }
}