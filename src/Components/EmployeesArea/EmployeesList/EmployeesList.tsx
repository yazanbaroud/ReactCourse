import { useEffect, useState } from "react";
import EmployeeModel from "../../../Models/EmployeeModel";
import "./EmployeesList.css";
import employeeService from "../../../Services/EmployeeService";
import useTitle from "../../../Utils/UseTitle";

function EmployeesList(): JSX.Element {

    useTitle("Employees")
    const [employees, setEmployees] = useState<EmployeeModel[]>()


    useEffect(() => {
        employeeService.getAllEmployees()
            .then(employees => setEmployees(employees))
            .catch(err => alert(err))
    }, [])



    return (
        <div className="EmployeesList">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>title</th>
                        <th>country</th>
                        <th>city</th>
                        <th>birthDate</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {employees?.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee?.id}</td>
                            <td>{employee?.firstName}</td>
                            <td>{employee?.lastName}</td>
                            <td>{employee?.title}</td>
                            <td>{employee?.country}</td>
                            <td>{employee?.city}</td>
                            <td>{employee?.birthDate}</td>
                            <td><img src={employee?.imageUrl}></img></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <br />
        </div>
    );
}

export default EmployeesList;
