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
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
const CREATE_PRODUCT = 'CREATE_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

// REDUCERS
export const productsReducer = (state=initialData, action) => {
    
    switch(action.type){
        case GET_PRODUCTS:
            return {...state, array: action.payload }

        case FILTER_PRODUCTS:
            return {...state, filter: action.payload.array, filterValue: action.payload.filter }

        case GET_DETAIL_PRODUCT:
            return {...state, detailProduct: action.payload}

        case UPDATE_PRODUCT:
            return state

        case CREATE_PRODUCT:
            return state

        case DELETE_PRODUCT:
            return state

        default:
            return state
    }

}

// ACCIONES

// Obtener todos los productos
export const getProductsAction = () => async(dispatch, getState) => {
    console.log('Obteniendo todos los productos')
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

// Obtener un producto
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

// Crear producto
export const createProductAction = (product) => async(dispatch, getState) => {
    console.log('Crear producto')
    try {
        const response = await axios.post(`http://localhost:3001/api/products`, product)
        console.log(response)

        dispatch({
            type: CREATE_PRODUCT,
        })
    } catch (error) {
        console.log('No se pudo crear el producto', error)
    }
}


// Actualizar un producto
export const updateProductAction = (id, inputValue) => async(dispatch, getState) => {
    console.log('Actualizar el producto con id', id)
    try {
        const response = await axios.put(`http://localhost:3001/api/products/${id}`, inputValue);
        console.log(response)

        dispatch({
            type: UPDATE_PRODUCT
        })
    } catch (error) {
        console.log(error)
    }

}

// Eliminar un producto
export const deleteProductAction = (id) => async(dispatch, getState) => {
    console.log('Eliminar el producto', id)
    try {   
        const response = await axios.delete(`http://localhost:3001/api/products/${id}`)
        console.log(response)
        dispatch({
            type: DELETE_PRODUCT,
        })
    } catch (error) {
        console.log(error)
    }
}