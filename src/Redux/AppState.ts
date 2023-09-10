import { configureStore } from "@reduxjs/toolkit"
import ProductModel from "../Models/ProductModel"
import { productReducer } from "./productsSlice"
import UserModel from "../Models/UserModel"
import { authReducers } from "./AuthSlice"
import EmployeeModel from "../Models/EmployeeModel"
import { employeesReducer } from "./EmployeeSlice"
import logActions from "./Middleware"
import logger from "redux-logger"

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
    },
    // middleware: [logActions]
    middleware: [logger]
})