import { useEffect, useState, React } from 'react'
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Details() {
    const params = useParams();
    const [recipe, setRecipe] = useState({});
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        console.log("here")
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
            <span><h3 className="title">{recipe.title}</h3></span>
            <img src={recipe.image} />
            <Box className="tabs-sec" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs indicatorColor="primary" textColor="primary"value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Instructions" {...a11yProps(0)} />
                    <Tab label="Ingredients" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel className="summary" value={value} index={0}>
                <span dangerouslySetInnerHTML={{__html: recipe.summary}}></span>
                <span dangerouslySetInnerHTML={{__html: recipe.instructions}}></span>
            </TabPanel>
            <TabPanel className="summary" value={value} index={1}>
                <ul>{recipe.extendedIngredients?.map((ingredient)=>
                    <li key={ingredient.id}>{ingredient.original}</li>
                )}</ul>
            </TabPanel>
        </div>
    )
}

export default Details
