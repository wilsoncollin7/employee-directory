import React from "react";
// style
import "./style.css";

function Table() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>(111) 111-111</td>
          <td>email@fakeemail.com</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>(111) 111-111</td>
          <td>email@fakeemail.com</td>
        </tr>
        <tr>
          <td>Collin</td>
          <td>Dean</td>
          <td>(111) 111-111</td>
          <td>email@fakeemail.com</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
