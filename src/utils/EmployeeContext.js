import { createContext } from "react";

const EmployeeContext = createContext({
  sortedField: null,
  employeesSorted: [],
  employees: [],
  onClick: () => undefined
});

export default EmployeeContext;
