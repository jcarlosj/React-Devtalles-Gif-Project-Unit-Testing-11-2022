import { useEffect, useState } from 'react';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    // console.log({ images, isLoading });


    return (
        <>
            <h2>{ category }</h2>
            {   isLoading && <h3>Cargando...</h3> }

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
