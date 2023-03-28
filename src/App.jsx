import { useState } from 'react';

import { AddCategory } from './components/AddCategory';


const initialState = [ 'dogs', 'cats' ];


const App = () => {

    const [ categories, setCategories ] = useState( initialState );


    const handleAddNewCategory = () => {
        // Forma 1
        // setCategories([
        //     ...categories,
        //     'fruits'
        // ]);

        // Forma 2
        setCategories( categories => [ 
            ...categories, 'vegetables' 
        ]);
    }


    return (
        <>
            {/* Title */}
            <h1>Gif Proyect App</h1>

            {/* Input */}
            <AddCategory setCategories={ setCategories } />
            <button onClick={ handleAddNewCategory }>Agregar</button>

            {/* Listado de gif */}
            <ol>
                {   categories.map( ( category, index ) => <li key={ index }>{ category }</li> ) }
            </ol>
        </>
    )
}


export default App;