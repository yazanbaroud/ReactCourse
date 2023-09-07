import { NavLink } from "react-router-dom";
import "./Menu.css";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";

function Menu(): JSX.Element {

    const user = useSelector((appState: AppState)=> appState.user)



    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products" end>Products</NavLink>
            <NavLink to="/products/new">Add Product</NavLink>
            {
                user && user.role === "Admin" &&
                <NavLink to="/products/top3">Top 3 Products</NavLink>
                
            }
            {
                user && user.role === "Admin" &&
                <NavLink to="/products/outOfStock">Out Of Stock Products</NavLink>
                
            }
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contactUs">ContactUs</NavLink>
            <NavLink to="/employees">Employees</NavLink>
            <TotalProducts />

			{/* <a href="/home">Home</a>
			<a href="/products">Products</a>
			<a href="/about">About</a> */}
        </div>
    );
}

export default Menu;
