import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

// Actions
import { getCategoryAction } from '../redux/categoryDucks'
import { getProductsAction } from '../redux/productsDucks'


// Components
import ContentPage from '../ui-components/ContentPage'
import FilterProduct from '../ui-components/FilterProduct'
import GridTableLg from '../ui-components/GridTableLg.jsx'
import GridTableMovil from '../ui-components/GridTableMovil'
import InputSearch from '../ui-components/InputSearch'
import TitlePage from '../ui-components/TitlePage'

// Style Components
const ContentSearchAndCreate = tw.div`flex flex-col mb-4`
const TitleGridTable = tw.div`hidden md:grid grid-cols-5 bg-black p-3 text-white font-medium text-xs md:text-sm`

const AllProductsPage = () => {

    const dispatch = useDispatch()
    const products = useSelector( store => store.products.array )
    const filterProducts = useSelector( store => store.products.filter )
    const categories = useSelector( store => store.categories.array )

    // Obtener datos de store al iniciar el componente
    React.useEffect( ()=>{
        dispatch( getProductsAction() )
        dispatch( getCategoryAction() )
    },[])

    console.log(products)
    return (
        <ContentPage>
            <ContentSearchAndCreate>
                <Link to='/products/create' className='px-5 py-3 text-white bg-blue-600 font-medium text-sm mb-5 lg:mb-10 lg:w-60'>CREAR PRODUCTO</Link>
                <TitlePage title='Nombre de de producto'></TitlePage>

                {/* Buscador */}
                <InputSearch data={products} />

                {/* Filtrar Productos */}
                <FilterProduct data={categories} />
            </ContentSearchAndCreate>

            <TitleGridTable>
                <p>Nombre</p>
                <p>Stock</p>
                <p>Precio</p>
                <p>Categoria</p>
                <p>Acciones</p>
            </TitleGridTable>

            {/* Contenido de tabla para pantallas LG */}
            {

                filterProducts.length === 0 

                ? // Si el array de filtros está vacio imprime todos los productos
                products.map( (product) => (
                    <GridTableLg key={product.id} data={product} gridCols={5} />
                ))
                
                : // Si el array de filtros tiene datos entonces imprimelo
                filterProducts.map( (product) => (
                    <GridTableLg key={product.id} data={product} gridCols={5} />
                ))
            }



            {/* Contenido de la tabla para pantallas Moviles*/}
            {
                filterProducts.length === 0
                ? // Si el array de filtros está vacio imprime todos los productos
                products.map( (product) => (
                    <GridTableMovil key={product.id} data={product} gridCols={2} />
                ) )
                
                : // Si el array de filtros tine datos, entonces imprimelo.
                filterProducts.map( (product) => (
                    <GridTableMovil key={product.id} data={product} gridCols={2} />
                ) )
            }

        </ContentPage>
    )
}

export default AllProductsPage
