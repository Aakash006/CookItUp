import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
function Category() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <NavLink to={"/cuisine/italian"}>
                        <FaPizzaSlice />
                        <h4>Italian</h4>
                    </NavLink>
                </Grid>
                <Grid item xs={6} md={4}>
                    <NavLink to={"/cuisine/american"}>
                        <FaHamburger />
                        <h4>American</h4>
                    </NavLink>
                </Grid>
            </Grid>
        </div>
    )
}

export default Category
