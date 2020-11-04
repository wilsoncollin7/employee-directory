import React, { useContext, useState } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
// style
import "./style.css";

function Table() {

  const { employees } = useContext(EmployeeContext);

  const [sortedField, setSortedField] = useState(null);

  let sortedEmployees = [...employees];

  if (sortedField !== null) {
    sortedEmployees.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  }
  
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col"><button type="button" onClick={() => setSortedField("firstName")}>First Name</button></th>
          <th scope="col"><button type="button" onClick={() => setSortedField("lastName")}>Last Name</button></th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map(employee => (
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
