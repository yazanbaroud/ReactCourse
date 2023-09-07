import axios from "axios"
import EmployeeModel from "../Models/EmployeeModel"
import appConfig from "../Utils/AppConfig"
import { appStore } from "../Redux/AppState"
import { employeesActions } from "../Redux/EmployeeSlice"

class EmployeeService {

    public async getAllEmployees(): Promise<EmployeeModel[]> {
        let employees = appStore.getState().employees
        if(employees.length === 0){
            const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl)
            employees = response.data
            appStore.dispatch(employeesActions.setAll(employees))
        }
        console.log(employees);
        
        return employees
    }


}

const employeeService = new EmployeeService()
export default employeeService