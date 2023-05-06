import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&cuisine=${name}`
    );
    const data = await api.json();
    setCuisine(data.results);
  };

  return (
    <div>
      <Grid
        container
        columns={{ xs: 4, md: 4 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {cuisine.map((item) => {
          return (
            <Card className="cuisine-card">
              <Link className="card-link" to={"/details/" + item.id}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    className="recipe-title"
                    gutterBottom
                    variant="p"
                    component="div"
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
}

export default Cuisine;
