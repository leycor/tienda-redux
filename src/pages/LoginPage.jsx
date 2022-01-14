import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import tw from 'twin.macro'
import LoginForm from '../ui-components/LoginForm'


// Style Component
const ParentContainer = tw.div`min-h-screen flex items-center justify-center mx-5`
const CardContainer = tw.div`border-gray-300 border w-96 shadow-lg bg-white `
const TitleCard = tw.p`bg-black h-12 text-white flex items-center justify-center font-medium`


const LoginPage = () => {

    const navigate = useNavigate()
    const [error, setError] = React.useState('')
    const {login} = useSelector(store => store.users)
    console.log(login)

    React.useEffect( ()=> {
        login === true && navigate('/')
    })
    

    return (
        <ParentContainer>
            <CardContainer>
                    <TitleCard>INGRESA TUS CREDENCIALES</TitleCard>
                    {
                        login !== '' ?<p className='mt-10 font-medium text-center uppercase text-red-600 text-sm'>{login}</p>
                        :error !== '' && <p className='mt-10 font-medium text-center uppercase text-red-600 text-sm'>{error}</p>
                    }
                    <LoginForm setError={setError} />
            </CardContainer>
        </ParentContainer>
    )
}

export default LoginPage
