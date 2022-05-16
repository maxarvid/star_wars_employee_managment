import React, { useState } from 'react'


const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  // Get the Data
  // fetch it with axios

  const fetchEmployees = () => {
    const response = axios.get('url goes here')
  }

  // Store the data in State somehow
  // rely on useState ie component state

  // Display the data in the jsx return statement
  // use .map() to create an array with jsx in it

  return (
    <div>EmployeeList</div>
  )
}

export default EmployeeList