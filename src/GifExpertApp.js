import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';


const GifExpertApp = () => {

    // const categories = ['One punch','Samurai X','Dragon Ball','DB Z Kaie'];
    const [categories, setCategories] = useState(['One punch','Samurai X','Dragon Ball','DB Z Kaie']);

    // const HandleAdd = () => {
    //     // setCategories([...categories, 'HunterXHunter']);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    //     console.log(categories);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;