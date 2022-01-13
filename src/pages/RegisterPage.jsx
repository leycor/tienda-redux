import React from 'react'
import tw from 'twin.macro'

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
    return (
        <ParentContainer>
            <CardContainer>
                    <TitleCard>CREAR CUENTA</TitleCard>

                    <ContentForm>

                        <ContentInput>
                            <LabelForm>Correo electronico</LabelForm>
                            <InputForm type='email' placeholder='Ingresa tu correo electornico'></InputForm>
                        </ContentInput>

                        <ContentInput>
                            <LabelForm>Contraseña</LabelForm>
                            <InputForm type='password' placeholder='Ingresa tu contraseña'></InputForm>
                        </ContentInput>

                        <ContentInput>
                            <LabelForm>Repetir contraseña</LabelForm>
                            <InputForm type='password' placeholder='Ingresa tu contraseña'></InputForm>
                        </ContentInput>

                        <ButtonForm>REGISTRARSE</ButtonForm>
                    </ContentForm>
            </CardContainer>
        </ParentContainer>
    )
}

export default RegisterPage
