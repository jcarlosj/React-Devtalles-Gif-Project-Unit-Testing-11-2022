import { useState } from 'react';


export const AddCategory = () => {
    const [ inputValue, setInputValue ] = useState( '' );


    const handleOnInputChange = ({ target }) => {
        console.log( target.value );
        setInputValue( target.value );
    }


    return (
        <>
            <input 
                type="text"
                placeholder="Buscar"
                value={ inputValue }
                onChange={ ( event ) => handleOnInputChange( event ) }
            />
        </>
    )
}
