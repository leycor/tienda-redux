import axios from 'axios'
const PORT = 3001

// Constantes
const initialData = {
    array: [],
    filter:[],
    filterValue: 'todos',
    detailProduct: '',
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
    console.log('GET_PRODUCTS: OBTENIENDO TODOS LOS PRODUCTOS')
    try {
        const result = await axios.get(`http://localhost:${PORT}/api/products`)
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
    console.log('FILTER_PRODUCTS: FILTRAR PRODUCTOS CON EL PARAMETRO', filter)
    
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
    console.log('GET_DETAIL_PRODUCT: BUSCAR PRODUCTO CON ID', id)
    try {
        const result = await axios.get(`http://localhost:${PORT}/api/products/${id}`)

        dispatch({
            type: GET_DETAIL_PRODUCT,
            payload: result.data
        })

    } catch (error) {
        console.log('Error al buscar el producto', error)
    }
}

// Crear producto
export const createProductAction = (formData,setError,setCreatedProduct) => async(dispatch, getState) => {
    console.log('CREATE_PRODUCT: CREAR PRODUCTO', FormData)
    try {
        const response = await axios.post(`http://localhost:${PORT}/api/products`, formData)
        console.log(response.data.error)
        if(response.data.error) return setError(response.data.data)

        dispatch({
            type: CREATE_PRODUCT,
        })

        setCreatedProduct(true)
    } catch (error) {
        console.log('No se pudo crear el producto', error)
    }
}


// Actualizar un producto
export const updateProductAction = (id, inputValue,setError,setUpdateProduct) => async(dispatch, getState) => {
    console.log('UPDATE_PRODUCT: ACTUALIZAR PRODUCTO CON EL ID', inputValue)
    try {
        const response = await axios.put(`http://localhost:${PORT}/api/products/${id}`, inputValue);
        console.log(response.data.error)
        if(response.data.error) return setError(response.data.data)

        dispatch({
            type: UPDATE_PRODUCT,
        })

        setUpdateProduct(true) 
    } catch (error) {
        console.log(error)
    }

}

// Eliminar un producto
export const deleteProductAction = (id) => async(dispatch, getState) => {
    console.log('DELETE_PRODUCT: ELIMINAR PRODUCTO CON EL ID', id)
    try {   
        const response = await axios.delete(`http://localhost:${PORT}/api/products/${id}`)
        console.log(response)
        dispatch({
            type: DELETE_PRODUCT,
        })
    } catch (error) {
        console.log(error)
    }
}