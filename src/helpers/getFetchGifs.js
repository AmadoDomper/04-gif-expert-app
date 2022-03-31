
    export const getFetchGifs = async( category ) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=oevkH2leXBqB9scIAiy61szmSLgvY44X`
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;
    }
