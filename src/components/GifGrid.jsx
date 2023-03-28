export const GifGrid = ({ category }) => {

    // Mala practica: La funcion estará re-procesandose junto con el cambio del componente
    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=41kSedYo8fgY6Ofp5SH6snPYPBMrz8FL&q=${ category }&limit=20`;

        const
            response = await fetch( url ),
            { data } = await response.json();

        // console.log( data  );

        const gifs = data.map( obj_img => ({
            id: obj_img.id,
            title: obj_img.title,
            url: obj_img.images.downsized_medium.url
        }));

        console.log( gifs );
    }

    getGifs();


    return (
        <>
            <h2>{ category }</h2>
        </>
    )
}
