import { useEffect, useState } from "react";
import "./ProductList.css";
import productsService from "../../../Services/ProductsServices";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";
import useTitle from "../../../Utils/UseTitle";
import Spinner from "../../SharedArea/Spinner/Spinner";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import TotalProducts from "../TotalProducts/TotalProducts";

function ProductList(): JSX.Element {

    useTitle("Products")


    // const [allProducts, setAllProducts] = useState<ProductModel[]>([])
    const allProducts = useSelector((appState: AppState) => appState.products)

    useEffect(() => {
        productsService.getAllProducts()
        // .then(products => {
        //     setAllProducts(products)})
        .catch(err => alert(err.message))
    },[])

    return (
        <div className="ProductList">
            <TotalProducts />

            {allProducts.length === 0 && <Spinner />}

			{allProducts.map((p) => <ProductCard key={p.id} product={p}/>)}
        </div>
    );
}

export default ProductList;
