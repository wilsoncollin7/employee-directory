import React, { useState } from "react";
// import components
import CardContainer from "../components/CardContainer/CardContainer";
import Row from "../components/Row/Row";
import employees from "../Data/employees.json";
import EmployeeContext from "../utils/EmployeeContext";

function Directory() {

  const [employeesState, setEmployeesState] = useState({
    employeesSorted: [],
    employees: employees
  })

  return(
    <div>
      <h1>Employees</h1>
      <EmployeeContext.Provider value={employeesState}>
        <Row>
          <CardContainer />
        </Row>
      </EmployeeContext.Provider>
    </div>
  )
}

export default Directory;
