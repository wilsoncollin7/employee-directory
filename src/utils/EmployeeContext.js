import { createContext } from "react";

const EmployeeContext = createContext({
  sortedField: null,
  searchField: "",
  employeesSorted: [],
  employees: [],
  onClick: () => undefined,
  handleInputChange: () => undefined
});

export default EmployeeContext;
