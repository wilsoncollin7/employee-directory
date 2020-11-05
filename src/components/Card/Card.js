import React, { useContext } from "react";
import SearchContext from "../../utils/SearchContext";
// style
import "./style.css";
// import component
import Table from "../Table/Table";

function Card() {

  const {search, setSearch} = useContext(SearchContext);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h3>Search by name:</h3>
        <input 
          name="name"
          type="text" 
          className="form-control" 
          placeholder="Name"
          onChange={() => setSearch(document.querySelector(".form-control").value)}
        />
        <Table />
      </div>
    </div>
  );
}

export default Card;
