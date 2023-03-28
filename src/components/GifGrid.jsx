import { getGifs } from '../helpers/get-gifs.helper';


export const GifGrid = ({ category }) => {

    // Mala Práctica: Invocar funciones dentro del cuerpo de un Functional Component
    getGifs( category );


    return (
        <>
            <h2>{ category }</h2>
        </>
    )
}
