import { useState } from 'react';


export const AddCategory = ({ onNewValue }) => {
    const [ inputValue, setInputValue ] = useState( '' );


    const handleOnInputChange = ({ target }) => {
        console.log( target.value );
        setInputValue( target.value );
    }

    const handleOnSubmit = ( event ) => {
        event.preventDefault();
        console.log( inputValue );

        if( inputValue.trim().length <= 1 ) return;

        // Cambia el estado del padre
        // setCategories( categories => [
        //     inputValue,
        //     ...categories
        // ]);

        onNewValue( inputValue.trim() ); // Emite un evento al padre y recibe un valor
        setInputValue( '' );
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
