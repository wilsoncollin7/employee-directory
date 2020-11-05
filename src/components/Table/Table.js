import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
// style
import "./style.css";

function Table() {

  const employees = useContext(EmployeeContext);

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col"><button type="button" onClick={() => employees.onClick("firstName")}>First Name</button></th>
          <th scope="col"><button type="button" onClick={() => employees.onClick("lastName")}>Last Name</button></th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {employees.employeesSorted.map(employee => (
          <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
