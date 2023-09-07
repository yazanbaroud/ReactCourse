import { configureStore } from "@reduxjs/toolkit"
import ProductModel from "../Models/ProductModel"
import { productReducer } from "./productsSlice"
import UserModel from "../Models/UserModel"
import { authReducers } from "./AuthSlice"
import EmployeeModel from "../Models/EmployeeModel"
import { employeesReducer } from "./EmployeeSlice"

//טיפוס אומר מה יש בגלובל
export type AppState = {
    products: ProductModel[],
    user: UserModel,
    employees: EmployeeModel[]
}

export const appStore = configureStore<AppState>({
    reducer: {
        products: productReducer,
        user: authReducers,
        employees: employeesReducer
    }
})