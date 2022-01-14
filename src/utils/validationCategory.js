import validator from 'validator';

export const validationCategory = (data, setError) => {

        // Validaciones ======================================================================
        if(data.name ==='' || data.name.length < 3) return setError( 'El nombre de producto debe ser mayor a 3 caracteres')
        
        if( validator.isNumeric(data.name) ) return setError(('El nombre de producto no puede ser un numero'))

        return 'formOkey'
        
        // Validaciones ======================================================================
}