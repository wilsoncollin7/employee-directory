import { createContext } from "react";

const EmployeeContext = createContext({
  sortedField: null,
  employeesSorted: [],
  onClick: () => undefined,
});

export default EmployeeContext;
