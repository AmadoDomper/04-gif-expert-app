import React from 'react'

export const GifGrid = ({ category }) => {

    const getGifs = async() => {
        const url = 'http://api.giphy.com/v1/gifs/search?q=Dragon+Ball&limit=10&api_key=oevkH2leXBqB9scIAiy61szmSLgvY44X'
        const resp = await fetch( url );
        const { data } = await resp.json();

        console.log(data);

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
    }

    getGifs();

  return (
    <div>
        <h3>
            { category }
        </h3>
    </div>
  )
}
