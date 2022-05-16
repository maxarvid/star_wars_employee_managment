import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const response = await axios.get("https://swapi.dev/api/people");
    setEmployees(response.data.results);
  };

  const employeeList = employees.map((employee) => {
    return (
      <li key={employee.name}>
        <h3>{employee.name}</h3>
      </li>
    );
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
  <ul data-cy="employee-list">{employeeList}</ul>
  );
};

export default EmployeeList;
