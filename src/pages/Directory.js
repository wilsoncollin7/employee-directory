import React, { useState } from "react";
// import components
import CardContainer from "../components/CardContainer/CardContainer";
import Row from "../components/Row/Row";
import employeesJson from "../Data/employees.json";
import EmployeeContext from "../utils/EmployeeContext";

function Directory() {

  const [employees, setEmployees] = useState({
    sortedField: null,
    employeesSorted: [],
    onClick: (sortedField) => {
      setEmployees({...employees, sortedField});
      console.log(sortedField)
    },
  });

  // let sortedEmployees = [...employees];

  // if (employeesState.sortedField !== null) {
  //   sortedEmployees.sort((a, b) => {
  //     if (a[employeesState.sortedField] < b[employeesState.sortedField]) {
  //       return -1;
  //     }
  //     if (a[employeesState.sortedField] > b[employeesState.sortedField]) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }

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
