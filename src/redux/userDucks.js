import axios from 'axios'

// Constantes
const initialData = {
    user: ''
}

// TIPOS DE ACCIONES
const CREATE_USER  = 'CREATE_USER'

// REDUCERS

export const usersReducer = (state=initialData, action) => {
    switch (action.type) {
        case CREATE_USER:
            return state
    
        default:
            return state;
    }
}

// ACCIONES

// Crear usuario
export const userCreatedAction = (user) => async(dispatch, getState) => {
    console.log('Registrar usuario', user)
    try {
        const response = await axios.post(`http://localhost:3001/api/users/register`, user)
        console.log(response)

        dispatch({
            type: CREATE_USER,
        })
    } catch (error) {
        console.log('No se pudo crear el usuario', error)
    }
}

// // Crear producto
// export const createProductAction = (product) => async(dispatch, getState) => {
//     console.log('Crear producto')
//     try {
//         const response = await axios.post(`http://localhost:3001/api/products`, product)
//         console.log(response)

//         dispatch({
//             type: CREATE_PRODUCT,
//         })
//     } catch (error) {
//         console.log('No se pudo crear el producto', error)
//     }
// }