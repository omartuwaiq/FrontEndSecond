import React, { Component } from "react";
import axios from "axios";
import "./ListEmoloyees.css";

export class ListEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }
  componentDidMount() {
    axios.get("api/v1/employees").then((response) => {
      console.log(response.data);
      this.setState({ employees: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1>this is it</h1>
        {this.state.employees.map((employee) => (
          <ul key={employee.id}>
            <li> {employee.firstName} </li>
            <li> {employee.lastName}</li>
            <li> {employee.department}</li>
            <li>
              <img src={employee.pic}></img>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default ListEmployees;
