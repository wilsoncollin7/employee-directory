import React, { useState } from "react";
// import components
import CardContainer from "../components/CardContainer/CardContainer";
import Row from "../components/Row/Row";
import employeesJson from "../Data/employees.json";
import EmployeeContext from "../utils/EmployeeContext";

function Directory() {

  const [employees, setEmployees] = useState({
    sortedField: null,
    searchField: "",
    employeesSorted: [],
    onClick: (sortedField) => {
      setEmployees({...employees, sortedField});
    },
    onChange: (searchField) => {
      setEmployees({...employees, searchField})
    }
  });

  let sortedEmployees = [...employeesJson];

  if (employees.sortedField !== null) {
    sortedEmployees.sort((a, b) => {
      if (a[employees.sortedField] < b[employees.sortedField]) {
        return -1;
      }
      if (a[employees.sortedField] > b[employees.sortedField]) {
        return 1;
      }
      return 0;
    });
  }

  employees.employeesSorted = sortedEmployees;

  return(
    <div>
      <h1>Employees</h1>
      <EmployeeContext.Provider value={employees}>
        <Row>
          <CardContainer />
        </Row>
      </EmployeeContext.Provider>
    </div>
  );
}

export default Directory;
