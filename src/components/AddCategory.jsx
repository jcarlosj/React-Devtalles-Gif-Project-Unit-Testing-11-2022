import { useState } from 'react';


export const AddCategory = () => {
    const [ inputValue, setInputValue ] = useState( '' );


    const handleOnInputChange = ({ target }) => {
        console.log( target.value );
        setInputValue( target.value );
    }

    const handleOnSubmit = ( event ) => {
        event.preventDefault();
        console.log( inputValue );
    }


    return (
        <form onSubmit={ handleOnSubmit }>
            <input 
                type="text"
                placeholder="Buscar"
                value={ inputValue }
                onChange={ handleOnInputChange }
            />
        </form>
    ) 
}
