import React, { useState } from "react";
// import components
import CardContainer from "../components/CardContainer/CardContainer";
import Row from "../components/Row/Row";
import employeesJson from "../Data/employees.json";
import EmployeeContext from "../utils/EmployeeContext";
import SearchContext from "../utils/SearchContext";

function Directory() {

  const [search, setSearch] = useState("")

  const [employees, setEmployees] = useState({
    sortedField: null,
    employeesSorted: employeesJson,
    onClick: (sortedField) => {
      setEmployees({...employees, sortedField});
    },
  });

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

  console.log(search)

  let employeesFiltered = [];

  if (search.length !== 0) {
    employeesJson.map(employee => {
      if (employee.firstName.includes(search) || employee.lastName.includes(search)) {
        console.log("included")
        employeesFiltered.push(employee);
      } else {
        console.log("not included")
      }
    })
    employees.employeesSorted = employeesFiltered
  } else {
    console.log("no search")
    employees.employeesSorted = employeesJson
  }

  

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
