import { useState, useEffect } from 'react';

import { getGifs } from '../helpers/get-gifs.helper';


export const useFetchGifs = ( category ) => {

    const
        [ images, setImages ] = useState([]),
        [ isLoading, setIsLoading ] = useState( true );


    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }
    

    useEffect(() => {
        getImages();
    }, [] );                        // No definir dependencias indica a useEffect que se ejecute solo la primera vez con la renderización del componente


    return {
        images,
        isLoading
    }
}
