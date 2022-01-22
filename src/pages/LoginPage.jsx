import React from 'react'
import tw from 'twin.macro'
import LoginForm from '../ui-components/LoginForm'


// Style Component
const ParentContainer = tw.div`min-h-screen flex items-center justify-center mx-5`
const CardContainer = tw.div`border-gray-300 border w-96 shadow-lg bg-white `
const TitleCard = tw.p`bg-black h-12 text-white flex items-center justify-center font-medium`


const LoginPage = () => {

    const [error, setError] = React.useState('')

    

    return (
        <ParentContainer>
            <CardContainer>
                    <TitleCard>INGRESA TUS CREDENCIALES</TitleCard>
                        <p className='mt-10 font-medium text-center uppercase text-red-600 text-sm'>{error}</p>
                    <LoginForm setError={setError} />
            </CardContainer>
        </ParentContainer>
    )
}

export default LoginPage
