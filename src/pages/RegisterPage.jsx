import React from 'react'
import validator from 'validator';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import tw from 'twin.macro'
import { userCreatedAction } from '../redux/userDucks';

// Style Component
const ParentContainer = tw.div`min-h-screen flex items-center justify-center mx-5`
const CardContainer = tw.div`border-gray-300 border w-96 shadow-lg bg-white `
const TitleCard = tw.p`bg-black h-12 text-white flex items-center justify-center font-medium`
const ContentForm = tw.div`px-8  py-12`
const LabelForm = tw.p`text-sm mb-2 font-medium`
const ContentInput = tw.div`mb-4`
const InputForm = tw.input`focus:outline-none italic w-full h-8 border-black border text-sm pl-3`
const ButtonForm = tw.button`w-full py-2 bg-black text-white font-medium`

const RegisterPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = React.useState('')
    const [inputValue, setInputValue ] = React.useState({
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const { email, password, passwordConfirm } = inputValue

    // Capturar valor de los input
    const handleChangeInput = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }

    const handleSendForm = () =>{

        // Validaciones
        if(email === '') return setError('El email no puede estar vacio')
        if(!validator.isEmail(email)) return setError('Email invalido')

        if(password.length < 5 || passwordConfirm.length < 5) return setError('La contraseña tiene que tener un minimo de 5 caracteres')
        if(password !== passwordConfirm ) return setError('Las contraseñas no coinciden')

        dispatch( userCreatedAction(inputValue,setError,navigate) )
        // navigate('/login')
    }

    return (
        <ParentContainer>
            <CardContainer>
                    <TitleCard>CREAR CUENTA</TitleCard>
                    <ContentForm>
                    {
                        error !== '' && <p className='mb-4 font-medium text-center uppercase text-red-600 text-sm'>{error}</p>
                    }
                        <ContentInput>
                            <LabelForm>Correo electronico</LabelForm>
                            <InputForm
                            value={email}
                            name='email'
                            type='email' 
                            placeholder='Ingresa tu correo electornico'
                            onChange={ (e) => handleChangeInput(e)}
                            ></InputForm>
                        </ContentInput>

                        <ContentInput>
                            <LabelForm>Contraseña</LabelForm>
                            <InputForm
                            value={password}
                            name='password' 
                            type='password' 
                            placeholder='Ingresa tu contraseña'
                            onChange={ (e) => handleChangeInput(e)}
                            ></InputForm>
                        </ContentInput>

                        <ContentInput>
                            <LabelForm>Repetir contraseña</LabelForm>
                            <InputForm
                            value={passwordConfirm}
                            name='passwordConfirm'
                            type='password' 
                            placeholder='Ingresa tu contraseña'
                            onChange={ (e) => handleChangeInput(e)}
                            ></InputForm>
                        </ContentInput>

                        <ButtonForm onClick={ handleSendForm }>REGISTRARSE</ButtonForm>
                    </ContentForm>
            </CardContainer>
        </ParentContainer>
    )
}

export default RegisterPage
