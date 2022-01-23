import axios from 'axios'
const PORT = 3001

// Constantes
const initialData = {
    login: true,
    token: '',
}

// TIPOS DE ACCIONES
const CREATE_USER  = 'CREATE_USER'
const LOGIN_USER  = 'LOGIN_USER'
const USER_LOGOUT = 'USER_LOGOUT'

// REDUCERS

export const usersReducer = (state=initialData, action) => {
    switch (action.type) {
        case CREATE_USER:
            return state

        case LOGIN_USER:
            return {...state, token: action.payload, login: true}

        case USER_LOGOUT:
            return {...state, token: '', login: false}
    
        default:
            return state;
    }
}

// ACCIONES

// Crear usuario
export const userCreatedAction = (user,setError,navigate) => async(dispatch, getState) => {
    console.log('CREATE_USER: CREAR EL USUARIO', user)
    try {
        const response = await axios.post(`http://localhost:${PORT}/api/users/register`, user)
        if(response.data.error) return setError(response.data.data)
        console.log(response.data)

        dispatch({
            type: CREATE_USER,
        })
        navigate('/login')
    } catch (error) {
        console.log('No se pudo crear el usuario', error)
    }
}

// Loguear usuario
export const userLoginAction = (user,setError, navigate) => async(dispatch, getState) => {
    console.log('LOGIN_USER: LOGUEAR USUARIO', user)
    try {
        const response = await axios.post(`http://localhost:${PORT}/api/users/login`,user)
        console.log(response.data)
        if(response.data.error) return setError(response.data.data)

        dispatch({
            type: LOGIN_USER,
            payload: response.data.data
        })

        navigate('/')

    } catch (error) {
        console.log(error)
    }   
}

export const userLogoutAction = () => async(dispatch, getState) => {
    console.log('USER_LOGOUT: Cerrar sesión')
    dispatch({
        type: USER_LOGOUT,

    })
}
