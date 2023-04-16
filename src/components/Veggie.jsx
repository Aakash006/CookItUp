import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

function Veggie() {

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        if (localStorage.getItem('veggie')) {
            setVeggie(JSON.parse(localStorage.getItem('veggie')))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&diet=vegetarian`);
            const data = await api.json();
            console.log(data.recipes);
            setVeggie(data.recipes);
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
        }
    }
    return (
        <div >
            <h3>Vegetarian picks</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                drag: 'free',
                pagination: false,
                gap: '10px'
            }}>
                {veggie.map((item) => {
                    return (
                        <SplideSlide>
                            <Card className="recipe-card">
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={item.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="p" component="div">
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}

export default Veggie;
