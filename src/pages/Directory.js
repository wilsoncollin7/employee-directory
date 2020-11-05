import React, { useState } from "react";
// import components
import CardContainer from "../components/CardContainer/CardContainer";
import Row from "../components/Row/Row";
// import data
import employeesJson from "../Data/employees.json";
// import context
import EmployeeContext from "../utils/EmployeeContext";
import SearchContext from "../utils/SearchContext";

function Directory() {

  const [search, setSearch] = useState("")
  // employee state
  const [employees, setEmployees] = useState({
    sortedField: null,
    employeesSorted: employeesJson,
    onClick: (sortedField) => {
      setEmployees({...employees, sortedField});
    },
  });
  // sorting logic
  if (employees.sortedField !== null) {
    employees.employeesSorted.sort((a, b) => {
      if (a[employees.sortedField] < b[employees.sortedField]) {
        return -1;
      }
      if (a[employees.sortedField] > b[employees.sortedField]) {
        return 1;
      }
      return 0;
    });
  }

  let employeesFiltered = [];
  // filter logic
  if (search.length !== 0) {
    employeesJson.map(employee => {
      const firstName = employee.firstName.toLowerCase();
      const lastName = employee.lastName.toLowerCase();
      if (firstName.includes(search) || lastName.includes(search)) {
        employeesFiltered.push(employee);
      }
      return "all good!";
    })
    employees.employeesSorted = employeesFiltered;
  } else {
    employees.employeesSorted = employeesJson;
  }

  return(
    <div>
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
