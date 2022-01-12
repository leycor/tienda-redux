import React from 'react'
import tw from 'twin.macro'

// Style Components
const Logo = tw.p`text-white font-medium`
const Header = tw.div`sticky top-0 text-white`
const Nav = tw.nav`h-12 bg-black flex items-center`
const NavContent = tw.div`lg:container lg:mx-auto mx-5 flex justify-between w-full`
const NavLink = tw.div`gap-4 font-medium text-sm hidden md:flex`

const ResponsiveButton = tw.div`flex flex-wrap content-center  w-8 cursor-pointer md:hidden`
const LineResponsiveMenu = tw.div`bg-white w-full h-1`

const ResponsiveMenu = tw.div`z-40 fixed flex gap-3 flex-col px-7 opacity-90 bg-black py-5  h-screen w-64 duration-300 md:-ml-96 text-white`

const Navbar = () => {

    // Estado para mostrar y ocultar el menú responsivo
    const [ toggleState, setToggleState] = React.useState( false )

    // Función que controla el menú responsivo
    const handleToggleResponsiveMenu = () => {
        setToggleState( !toggleState ? true : false)
    }
    
    return (
        <>
        <Header>
            {/* Menú */}
            <Nav>
                <NavContent>
                    <Logo>PANEL ADMINISTRATIVO</Logo>
                    <NavLink>
                        <p>Dashboard</p>
                        <p>Login</p>
                        <p>Register</p>
                    </NavLink>

            {/* Botón de menú responsivo */}
            <ResponsiveButton onClick={ handleToggleResponsiveMenu } >
                <LineResponsiveMenu></LineResponsiveMenu>
                <LineResponsiveMenu className='my-1'></LineResponsiveMenu>
                <LineResponsiveMenu></LineResponsiveMenu>
            </ResponsiveButton>

                </NavContent>
            </Nav>
        </Header>

        {/* Menú Responsivo */}
        <ResponsiveMenu className={ !toggleState ? '-ml-96': null}>
            <p>Dashboard</p>
            <p>Login</p>
            <p>Register</p>
        </ResponsiveMenu>
        </>
    )
}

export default Navbar
