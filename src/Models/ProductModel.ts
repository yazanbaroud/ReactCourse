import { RegisterOptions } from "react-hook-form";

class ProductModel {
    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string;
    public image: File;

    public static nameValidation: RegisterOptions<ProductModel, "name"> = {
        required: { value: true, message: "Missing Name" },
        minLength: { value: 2, message: "name too short" },
        maxLength: { value: 20, message: "name too long" }
    }

    public static priceValidation: RegisterOptions<ProductModel, "price"> = {
        required: { value: true, message:"missing price" },
        min: { value: 0, message:"min is 0" },
        max: { value: 1000, message:"max is 1000" },
    }

    public static stockValidation: RegisterOptions<ProductModel, "stock"> = {
        required: { value: true, message:"missing stocks" },
        min: { value: 0, message:"min is 0" },
        max: { value: 1000, message:"max is 1000" },
    }

    
    public static imageValidation: RegisterOptions<ProductModel, "image"> = {
        required: { value: true, message:"missing image" },
    }
}

export default ProductModel;
