import axios from "axios";
import ProductModel from "../Models/ProductModel";
import appConfig from "../Utils/AppConfig";

// npm i axios

class ProductsService {

    public async getAllProducts(): Promise<ProductModel[]> {
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl)        
        const products = response.data;
        return products;
    }

    public async getOneProducts(id: number): Promise<ProductModel> {
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id)
        const product = response.data;
        return product;
    }

}

const productsService = new ProductsService();

export default productsService;
