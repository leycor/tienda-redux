import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div>
            <p>Hola Mundo</p>
            <Link to='/categories'>Ir a Categorias</Link>
        </div>
    )
}

export default Index
