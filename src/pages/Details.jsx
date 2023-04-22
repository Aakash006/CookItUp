import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Details() {
    const params = useParams();
    const [recipe, setRecipe] = useState({})
    useEffect(() => {
        getRecipe();
    }, [params.id]);

    const getRecipe = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        console.log(data);
        setRecipe(data);
    }
    return (
        <div>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} />
        </div>
    )
}

export default Details
