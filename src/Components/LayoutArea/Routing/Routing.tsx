import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import ContactUs from "../../AboutArea/ContactUs/ContactUs";
import EmployeesList from "../../EmployeesArea/EmployeesList/EmployeesList";
import Home from "../../HomeArea/Home/Home";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import Page404 from "../Page404/Page404";
import "./Routing.css";
import { Suspense, lazy } from "react";
import Spinner from "../../SharedArea/Spinner/Spinner";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import Top3 from "../../ProductsArea/Top3/Top3";
import OutOfStock from "../../ProductsArea/OutOfStock/OutOfStock";

function Routing(): JSX.Element {

    const LazyAbout = lazy(() => import("../../AboutArea/About/About"))

    return (
        <div className="Routing">
            <Routes>
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/top3" element={<Top3 />} />
                <Route path="/products/outOfStock" element={<OutOfStock />} />
                <Route path="/products/details/:id" element={<ProductDetails />} />
                <Route path="/products/edit/:id" element={<EditProduct />} />
                <Route path="/products/new" element={<AddProduct />} />

                {/* Eager Loading */}
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/about" element={
                    <Suspense fallback={<Spinner />}>
                        <LazyAbout />
                    </Suspense>
                } />

                <Route path="/employees" element={<EmployeesList />} />
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
