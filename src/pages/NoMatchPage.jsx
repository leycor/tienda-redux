import React from 'react'
import tw from 'twin.macro'

// Style Components
const ParentContainer = tw.div`min-h-screen flex items-center justify-center mx-5`

const NoMatchPage = () => {
    return (
    <ParentContainer>
        <div className=''>
            <p className='text-8xl font-bold text-center'>404</p>
            <p className='text-lg font-medium mt-5 text-center'>Pagina no encontrada</p>
        </div>
    </ParentContainer>
    )
}

export default NoMatchPage
