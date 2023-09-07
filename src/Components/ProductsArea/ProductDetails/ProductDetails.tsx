import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import productsService from "../../../Services/ProductsServices";
import ProductModel from "../../../Models/ProductModel";
import { NavLink } from "react-router-dom";
import useTitle from "../../../Utils/UseTitle";
import { error } from "console";

function ProductDetails(): JSX.Element {

    const navigate = useNavigate()
    useTitle("Product Details")

    const params = useParams<{ id: string }>()

    const [product, setProduct] = useState<ProductModel>()

    async function deleteProduct() {
        try {
            const sure = window.confirm("are you sure?")
            if(!sure) return
            await productsService.deleteProduct(product.id)
            alert("product has been deleted")
            navigate("/products")
        }
        catch (err: any) {
            alert(err.message)
        }
    }

    useEffect(() => {
        const id = +params.id
        productsService.getOneProduct(id)
            .then(product => setProduct(product))
            .catch(err => alert(err.message))
    }, [])

    return (
        <div className="ProductDetails">
            <h3>Name: {product?.name}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Stock: {product?.stock}</h3>
            <img src={product?.imageUrl} />
            <br />



            <NavLink to="/products">back</NavLink>
            <span> | </span>
            <NavLink to={"/products/edit/" + product?.id}>Edit</NavLink>
            <span> | </span>
            <NavLink to="#" onClick={deleteProduct}>Delete</NavLink>
        </div>
    );
}

export default ProductDetails;
