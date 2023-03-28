import { useState } from 'react';

import { AddCategory } from './components/AddCategory';


const initialState = [ 'dogs', 'cats' ];


const App = () => {

    const [ categories, setCategories ] = useState( initialState );


    const handleAddNewCategory = ( newCategory ) => {

        if( categories.includes( newCategory ) ) return;

        setCategories([
            newCategory,
            ...categories
        ]);
    }


    return (
        <>
            {/* Title */}
            <h1>Gif Proyect App</h1>

            {/* Input */}
            <AddCategory
                // setCategories={ setCategories } 
                onNewValue={ event => handleAddNewCategory( event )  }
            />
            <button onClick={ handleAddNewCategory }>Agregar</button>

            {/* Listado de gif */}
            <ol>
                {   categories.map( ( category, index ) => <li key={ index }>{ category }</li> ) }
            </ol>
        </>
    )
}


export default App;