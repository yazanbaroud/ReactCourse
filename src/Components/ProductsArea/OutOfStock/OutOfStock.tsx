import { useEffect, useState } from "react";
import "./OutOfStock.css";
import productsService from "../../../Services/ProductsServices";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";

function OutOfStock(): JSX.Element {

    const [products, setProduct] = useState<ProductModel[]>([])

    useEffect(() => {
        productsService.getOutOfStockProducts()
        .then(product => setProduct(product))
        .catch(error => alert(error.message))
    }, [])

    return (
        <div className="OutOfStock">
			{products.map(p => <ProductCard key={p?.id} product={p} />)}
        </div>
    );
}

export default OutOfStock;
