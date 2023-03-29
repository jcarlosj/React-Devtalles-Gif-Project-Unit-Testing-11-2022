// Buena practica: La funcion ya NO estará re-procesandose junto con el cambio del componente puesto que esta aislada del mismo
export const getGifs = async ( search_term ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=41kSedYo8fgY6Ofp5SH6snPYPBMrz8FL&q=${ search_term }&limit=9`;

    const
        response = await fetch( url ),
        { data } = await response.json();

    // console.log( data  );

    const gifs = data.map( obj_img => ({
        id: obj_img.id,
        title: obj_img.title,
        url: obj_img.images.downsized_medium.url
    }));

    // console.log( gifs );

    return gifs;
}