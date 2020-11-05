import React, { useState } from "react";
// import components
import CardContainer from "../components/CardContainer/CardContainer";
import Row from "../components/Row/Row";
import employeesJson from "../Data/employees.json";
import EmployeeContext from "../utils/EmployeeContext";
import SearchContext from "../utils/SearchContext";

function Directory() {

  const [search, setSearch] = useState({
    searchField: ""
  })

  const [employees, setEmployees] = useState({
    sortedField: null,
    employeesSorted: [],
    onClick: (sortedField) => {
      setEmployees({...employees, sortedField});
    },
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
        <SearchContext.Provider value={{search, setSearch}}>
          <Row>
            <CardContainer />
          </Row>
        </SearchContext.Provider>
      </EmployeeContext.Provider>
    </div>
  );
}

export default Directory;
