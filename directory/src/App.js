import logo from './logo.svg';
import './App.css';
import TableRow from "./components/TableRow";
import React, { Component } from "react";
import API from "./utils/API.js";
import Search from "./components/Search";
import Header from "./components/Header";

class App extends Component {
  state = {
    employeeInfo: [],
    keyword: "",
    originalInfo: [],
    sortType: "Ascending",
  }

  handleOnChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });

    let newEmployees = this.state.originalInfo.filter(employee => {
      return employee.name.first.toLowerCase().includes(value.toLowerCase())
    });

    this.setState({
      employeeInfo: newEmployees
    });
  }


  onSortChange = () => {
    if (this.state.sortType === "Ascending") {
      this.Descending();
      this.setState({
        sortType: "Descending",
      });
    }
    else if (this.state.sortType === "Descending") {
      this.Ascending();
      this.setState({
        sortType: "Ascending",
      });
    };
  }

  Ascending = () => {
    let newEmployeeOrder = this.state.originalInfo.sort((a, b) => {
          let fa = a.name.last.toLowerCase();
          let fb = b.name.last.toLowerCase();
  
          if (fa > fb) {
            return -1;
          }
        });
    this.setState({
      employeeInfo: newEmployeeOrder
    });
  }

  Descending = () => {
    let newEmployeeOrder = this.state.originalInfo.sort((a, b) => {
          let fa = a.name.last.toLowerCase();
          let fb = b.name.last.toLowerCase();
    
          if (fa < fb) {
            return -1;
          }
        });
    this.setState({
      employeeInfo: newEmployeeOrder
    });
  }

  componentDidMount() {
    API.getRandomUsers().then(employees => {
      this.setState({
        employeeInfo: employees.data.results,
        originalInfo: employees.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <Header />
        <Search handleOnChange={this.handleOnChange} keyword={this.state.keyword} />
        <TableRow employeeInfo={this.state.employeeInfo} onSortChange={this.onSortChange} />
      </>
    );
  };
}

export default App;
