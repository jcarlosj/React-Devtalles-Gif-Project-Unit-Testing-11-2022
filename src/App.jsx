import { useState } from 'react';

import { AddCategory, GifGrid } from './components';


const initialState = [];


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
        <main className="container">
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
                        category={ category } 
                    />
                ))
            }
        </main>
    )
}


export default App;