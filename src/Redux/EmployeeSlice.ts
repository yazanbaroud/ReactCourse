import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import EmployeeModel from "../Models/EmployeeModel";

//products state is a productModel[]
//Reducers


function setAll(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel[]>): EmployeeModel[] {
    const newState = action.payload;
    return newState;
}


// Products Slice:
const employeesSlice = createSlice({
    name: "employees", // Slice name
    initialState: [],
    reducers: { setAll }
});

// Export all actions (each reducer will create its own action):
export const employeesActions = employeesSlice.actions;

// Export Reducer:
export const employeesReducer = employeesSlice.reducer;