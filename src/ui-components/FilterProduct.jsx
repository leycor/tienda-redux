import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { filterProductAction } from '../redux/productsDucks'


const FilterProduct = ({data}) => {

    const dispatch = useDispatch()
    const filterValue = useSelector(store => store.products.filterValue)
    console.log('Me ejecuté', filterValue)

    const handleFilterProduct = (e) => {
        console.log(e.target.value)
        dispatch( filterProductAction(e.target.value) )
    }

    return (
        <div>
            <p className='my-3 font-medium'>Filtrar porductos por categoria</p>
            <select onChange={ (e)=> handleFilterProduct(e)} className='px-6 py-2 border-black border w-full md:w-96' name="categoryProduct">
                <option value='todos'>Todos</option>
                    {
                        data.map( category => ( 
                            <option
                            key={category.id} 
                            name={category.name}
                            value={category.name}
                            >{category.name}
                            </option> 
                        ))
                    }
                </select>
        </div>
    )
}

export default FilterProduct
