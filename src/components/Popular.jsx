import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    if (localStorage.getItem("popular")) {
      setPopular(JSON.parse(localStorage.getItem("popular")));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
      );
      const data = await api.json();
      console.log(data.recipes);
      setPopular(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
    }
  };
  return (
    <div>
      <span>
        <h3 className="title">Popular picks</h3>
      </span>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          drag: "free",
          pagination: false,
          gap: "10px",
        }}
      >
        {popular.map((item) => {
          return (
            <SplideSlide>
              <Card className="recipe-card">
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
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Popular;
