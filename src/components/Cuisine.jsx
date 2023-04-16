import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    const getCuisine = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&cuisine=${name}`);
        const data = await api.json();
    }

    return (
        <div>
            <p>Cuisine {params.type}</p>
        </div>
    )
}

export default Cuisine
