import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {

    



    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products" end>Products</NavLink>
            <NavLink to="/products/new">Add Product</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contactUs">ContactUs</NavLink>
            <NavLink to="/employees">Employees</NavLink>

			{/* <a href="/home">Home</a>
			<a href="/products">Products</a>
			<a href="/about">About</a> */}
        </div>
    );
}

export default Menu;
