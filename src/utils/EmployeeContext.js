import { createContext } from "react";

const EmployeeContext = createContext({
  employeesSorted: [],
  employees: [],
  onClick: () => undefined
});

export default EmployeeContext;
