import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsServices";
import "./EditProduct.css";
import { useEffect, useState } from "react";

function EditProduct(): JSX.Element {

    const { register, handleSubmit, formState, setValue, watch } = useForm<ProductModel>()
    const navigate = useNavigate()
    const params = useParams<{ id: string }>()

    // const [image, setImage] = useState<string>()

    useEffect(() => {
        const id = +params.id
        productsService.getOneProduct(id)
            .then(product => {
                setValue("id", product.id)
                setValue("name", product.name)
                setValue("price", product.price)
                setValue("stock", product.stock)
                setValue("imageUrl", product.imageUrl)
                // setImage(product.imageUrl)
                console.log(product);
                

            })
            .catch(err => alert(err.message))
    },[])

    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0]
            await productsService.updateProduct(product)
            alert("product has been updated")
            navigate("/products")
        }
        catch (err: any) {
            alert(err.message)
        }
    }

    return (
        <div className="EditProduct">
            <form onSubmit={handleSubmit(send)}>

                <input type="hidden"  {...register("name")} />

                <h2>Edit Product</h2>

                <label>Name</label>
                <input type="text"  {...register("name", ProductModel.nameValidation)} />

                <span className="err">{formState.errors.name?.message}</span>

                <label>Price</label>
                <input type="number" step="0.01" {...register("price", ProductModel.priceValidation)} />
                <span className="err">{formState.errors.price?.message}</span>

                <label>Stock</label>
                <input type="number" {...register("stock", ProductModel.stockValidation)} />
                <span className="err">{formState.errors.stock?.message}</span>

                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image")} />

                <img src={watch("imageUrl")} />
                {/* <span className="err">{formState.errors.image?.message}</span> */}


                <button>Update</button>
            </form>
        </div>
    );
}

export default EditProduct;
