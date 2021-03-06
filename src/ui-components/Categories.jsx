import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Acciones
import { getCategoryAction } from '../redux/categoryDucks'

const Categories = () => {

    const dispatch = useDispatch()

    const categories = useSelector(store => store.categories.array)
    console.log(categories)
    return (
        <div>
            <p>Categorias</p>
            <button onClick={ ()=> dispatch( getCategoryAction() ) }>Obtener Categorias</button>
            <Link to='/'>Ir a Inicio</Link>
        </div>
    )
}

export default Categories
