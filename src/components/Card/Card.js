import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
// style
import "./style.css";
// import component
import Table from "../Table/Table";

function Card() {

  const employees = useContext(EmployeeContext);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h3>Search by name:</h3>
        <input 
          name="name"
          type="text" 
          className="form-control" 
          placeholder="Name"
        />
        <Table />
      </div>
    </div>
  );
}

export default Card;
