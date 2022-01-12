import React from 'react'
import tw from 'twin.macro'

// Style Components
const Logo = tw.p`text-white font-medium`

const Navbar = () => {
    return (
        <header className='mb-8'>
            <nav className='h-12 bg-black flex items-center'>
                <div className='lg:container lg:mx-auto mx-5'>
                    <Logo className='text-white font-medium'>PANEL ADMINISTRATIVO</Logo>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
