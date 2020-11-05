import { createContext } from "react";

const EmployeeContext = createContext({
  sortedField: null,
  searchField: "",
  employeesSorted: [],
  employees: [],
  onClick: () => undefined,
  onChange: () => undefined
});

export default EmployeeContext;
