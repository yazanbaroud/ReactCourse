import { useEffect, useState } from "react";
import "./ProductList.css";
import productsService from "../../../Services/ProductsServices";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";
import useTitle from "../../../Utils/UseTitle";
import Spinner from "../../SharedArea/Spinner/Spinner";

function ProductList(): JSX.Element {

    useTitle("Products")
    const [allProducts, setAllProducts] = useState<ProductModel[]>([])

    useEffect(() => {
        productsService.getAllProducts()
        .then(products => {
            console.log(products);
            
            setAllProducts(products)})
        .catch(err => alert(err.message))
    },[])

    return (
        <div className="ProductList">
            {allProducts.length === 0 && <Spinner />}

			{allProducts.map((p) => <ProductCard key={p.id} product={p}/>)}
        </div>
    );
}

export default ProductList;
