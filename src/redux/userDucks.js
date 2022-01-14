import axios from 'axios'

// Constantes
const initialData = {
    user: '',
    login: '',
}

// TIPOS DE ACCIONES
const CREATE_USER  = 'CREATE_USER'
const LOGIN_USER  = 'LOGIN_USER'

// REDUCERS

export const usersReducer = (state=initialData, action) => {
    switch (action.type) {
        case CREATE_USER:
            return state

        case LOGIN_USER:
            return {...state, login: action.payload}
    
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

// Loguear usuario
export const userLoginAction = (user) => async(dispatch, getState) => {
    console.log('Logueando con', user)
    try {
        const response = await axios.post(`http://localhost:3001/api/users/login`,user)
        console.log(response.data)
        if(response.data !== 'Datos incorrectos'){
            dispatch({
                type: LOGIN_USER, 
                payload: true
            })
        } else {
            dispatch({
                type: LOGIN_USER,
                payload: 'Datos incorrectos'
            })
        }
    } catch (error) {
        console.log(error)
    }   
}
