import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


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

            {/* Listado de gif */}  
            {   categories.map( ( category, index ) => (
                    <GifGrid
                        key={ category } 
                        title={ category } 
                    />
                ))
            }
        </>
    )
}


export default App;