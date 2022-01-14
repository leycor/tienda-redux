import React from 'react'
import validator from 'validator';
import { useDispatch } from 'react-redux'
import tw from 'twin.macro';



// Actions
import { userLoginAction } from '../redux/userDucks';

// Style Component
const ContentForm = tw.div`px-8  py-12`
const LabelForm = tw.p`text-sm mb-2 font-medium`
const ContentInput = tw.div`mb-4`
const InputForm = tw.input`focus:outline-none italic w-full h-8 border-black border text-sm pl-3`
const ButtonForm = tw.button`w-full py-2 bg-black text-white font-medium`


const LoginForm = ({setError}) => {

    const dispatch = useDispatch()
    // const users = useSelector(store => store.users)
    // console.log(users)

    const [inputValue, setInputValue ] = React.useState({
        email: '',
        password: '',
    })

    const { email, password } = inputValue

    // Capturar valor de los input
    const handleChangeInput = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }

    const handleSendForm = () =>{

        // Validaciones
        if(email === '' || password === '' ) return setError('Los campos no pueden estar vacios')
        if(!validator.isEmail(email)) return setError('Email invalido')

        dispatch( userLoginAction(inputValue) )
        // navigate('/login')
    }
    
    return (
        <ContentForm>
            <ContentInput>
                <LabelForm>Correo electronico</LabelForm>
                <InputForm
                onChange={(e)=> handleChangeInput(e) }
                value={email}
                name='email' 
                type='email' 
                placeholder='Ingresa tu correo electornico'></InputForm>
            </ContentInput>

            <ContentInput>
                <LabelForm>Contraseña</LabelForm>
                <InputForm
                onChange={(e)=> handleChangeInput(e) }
                value={password}
                name='password' 
                type='password' 
                placeholder='Ingresa tu contraseña'></InputForm>
            </ContentInput>

            <ButtonForm onClick={ handleSendForm }>INGRESAR</ButtonForm>
        </ContentForm>
    )
}

export default LoginForm
