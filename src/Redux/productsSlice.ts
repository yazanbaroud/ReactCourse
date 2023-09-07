import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ProductModel from "../Models/ProductModel";

//products state is a productModel[]
//Reducers


function setAll(currentState: ProductModel[], action: PayloadAction<ProductModel[]>): ProductModel[] {
    const newState = action.payload
    return newState

}

function addOne(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
    // currentState.push(action.payload) אסור לעשות כי משנה את האובייקט
    const newState = [...currentState]
    newState.push(action.payload)
    return newState //will replace the old current state with this one ay global state
}


function updateOne(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
    const newState = [...currentState]
    const index = newState.findIndex(p => p.id === action.payload.id)
    if (index >= 0) newState[index] = action.payload
    return newState
}


function deleteOne(currentState: ProductModel[], action: PayloadAction<number>): ProductModel[] {
    const newState = [...currentState]
    const index = newState.findIndex(p => p.id === action.payload)
    if (index >= 0) newState.slice(index, 1)
    return newState
}

//products Slice
const productsSlice = createSlice({
    name: "products",//slice NAME
    initialState: [],
    reducers: {
        setAll,
        addOne,
        updateOne,
        deleteOne
    }
})