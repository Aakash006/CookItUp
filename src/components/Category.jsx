import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
function Category() {
    return (
        <div class="categories">
            <NavLink className="link" to={"/cuisine/italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink className="link" to={"/cuisine/american"}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
        </div>
    )
}

export default Category
