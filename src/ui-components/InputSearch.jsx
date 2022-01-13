import React from 'react'
import tw from 'twin.macro'

const Input = tw.input`focus:outline-none text-center lg:text-left mb-2 px-5 py-2 italic border-black border lg:w-60`

const InputSearch = ({data}) => {

    const [ inputValue, setInputValue ] = React.useState('')
    const [ chooseData, setChooseData ] = React.useState('')

    const handleSearchData = (e) => {
        e.preventDefault();
        const result = data.find( r => r.name.toLocaleLowerCase() === inputValue.toLocaleLowerCase() )
        result !== undefined ? setChooseData(result) : setChooseData('No hay datos con ese nombre')
        setInputValue('')
    }


    return (
        <div>
            <Input
            value={inputValue} 
            autoComplete='false'
            type='text' 
            placeholder='Buscar...'
            onChange={ (e)=> setInputValue(e.target.value)}>
            </Input>

            <button onClick={ handleSearchData } className='bg-black px-5 py-2 border-black border text-white'>Buscar</button>
            { chooseData === 'No hay datos con ese nombre' || chooseData === ''
            ?
            <p>{chooseData}</p>
            :
            <div className='grid bg-gray-300 p-2 mt-3 mb-3'>
                <p className='font-medium'>{`${ chooseData.price ? `El producto ${chooseData.name} ha sido encontrado con el id #${chooseData.id}`: `La categoria ${chooseData.name} ha sido encontrada con el id #${chooseData.id}`}`}</p>
            </div>
            }

        </div>
    )
}

export default InputSearch
