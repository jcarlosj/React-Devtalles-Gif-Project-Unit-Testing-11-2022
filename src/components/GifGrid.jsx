import { useEffect, useState } from 'react';

import { GifItem } from './GifItem';
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
            <div className="card-grid">
            {   images.map( ( dataImage ) => 
                    <GifItem
                        key={ dataImage.id } 
                        { ...dataImage } 
                    /> 
                ) 
            }
            </div>
        </>
    )
}
