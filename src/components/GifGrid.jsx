import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/get-gifs.helper';


export const GifGrid = ({ category }) => {

    const [ images, setImages ] = useState([]);


    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages( newImages );
    }
    
    useEffect(() => {
        getImages();
    }, [] );                        // No definir dependencias indica a useEffect que se ejecute solo la primera vez con la renderización del componente


    return (
        <>
            <h2>{ category }</h2>
            <ol>
            {   images.map( ({ id, title }) => 
                    <li key={ id }>{ title }</li> 
                ) 
            }
            </ol>
        </>
    )
}
