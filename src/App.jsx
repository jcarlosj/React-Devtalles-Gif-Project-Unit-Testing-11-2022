import { useState } from 'react';


const initialState = [ 'dogs', 'cats' ];


const App = () => {

    const [ categories, setCategories ] = useState( initialState );

    return (
        <>
            {/* Title */}
            <h1>Gif Proyect App</h1>

            {/* Input */}

            {/* Listado de gif */}
            <ol>
                {   categories.map( ( category, index ) => <li key={ index }>{ category }</li> ) }
            </ol>
        </>
    )
}


export default App;