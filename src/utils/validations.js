import validator from 'validator';

export const validationProduct = (data,file, setError) => {

        // Validaciones ======================================================================
        if(data.name ==='' || data.name.length < 3) return setError( 'El nombre de producto debe ser mayor a 3 caracteres')
        
        if( validator.isNumeric(data.name) ) return setError(('El nombre de producto no puede ser un numero'))


        if( data.stock === '' ) return setError('El stock no puede estar vacio')

        if( !validator.isInt(data.stock) ) return  setError('El campo stock tiene que ser un numero entero')

        if( data.stock < 0 ) return setError('El stock no puede ser un numero negativo')

        if(data.price === '') return setError('El campo precio no puede estar vacio')

        if( !validator.isInt(data.price) ) return setError('El campo precio tiene que ser un numero')

        if(data.price < 1 ) return setError('El precio debe ser mayor a uno')

        if( data.categoryId === '') return setError('El campo categoria se encuentra vacio')

        if(file === null || file === '' ) return setError('Es necesario que el producto tenga una imagen')

        return 'formOkey'
        
        // Validaciones ======================================================================
}