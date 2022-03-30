import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=oevkH2leXBqB9scIAiy61szmSLgvY44X`
        const resp = await fetch( url );
        const { data } = await resp.json();

        // console.log(data);

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        setImages(gifs);
    }

    // getGifs();

  return (
    <div>
        <h3>{ category }</h3>
        <ol>
            {
                images.map( img => (
                   <GifGridItem 
                        key= { img.id } 
                        {...img} />
                ))
            }
        </ol>
    </div>
  )
}
