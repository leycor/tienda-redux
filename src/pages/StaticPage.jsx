import React from 'react';
import axios from 'axios'

const StaticPage = () => {

    const [ file, setFile ] = React.useState(null)

    console.log(file)

    const handleSendForm = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        try {
            const response = await axios.post(`http://localhost:3001/api/products/upload`,formData )
            console.log(response)
            console.log(file)
        } catch (error) {
            
        }
        
    }

    const handleChangeFile = (e) => {
        setFile(e.target.files[0])
    }
  return (
      <form onSubmit={ handleSendForm }>
          <input onChange={ handleChangeFile }  type="file" name="file" id="" placeholder='Imagen' />
          <input type="submit" value="Enviar" />
      </form>
  );
};

export default StaticPage;
