import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  // Get the Data
  // fetch it with axios

  const fetchEmployees = async () => {
    const response = await axios.get("https://swapi.dev/api/people");
    debugger;
  };

  // Store the data in State somehow
  // rely on useState ie component state

  // Display the data in the jsx return statement
  // use .map() to create an array with jsx in it

  useEffect(() => {
    fetchEmployees();
  }, []);

  return <div data-cy="employee-list">EmployeeList</div>;
};

export default EmployeeList;
