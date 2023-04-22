import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Searched() {
    const params = useParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        getResults(params.term);
    }, [params.term]);


    const getResults = async (term) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${term}`);
        const data = await api.json();
        setResults(data.results);
    }
    return (
        <div>
            <Grid container columns={{ xs: 4, md: 4 }} direction="row"
                justifyContent="center"
                alignItems="center">
                {results.map((item) => {
                    return (
                        <Card className="cuisine-card">
                            <Link to={'/details/' + item.id}>

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
                            </Link>
                        </Card>)
                })}
            </Grid>
        </div>
    )
}

export default Searched
