import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getEmployees } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [employeeSpecialties, setEmployeeSpecialties] = useState("")
    
    useEffect(() => getEmployees().then((employees) => setEmployees(employees)), [])
    useEffect(() => {
        const specialties = employees.map(emp => emp.specialty).join(", ")
        setEmployeeSpecialties(specialties)
    }, [employees])

    return (
        <>
            <h2>Employees</h2>
            <div>Specialties: {employeeSpecialties}</div>
            {
                employees.map(
                    (employee) => <h3 key={`employee--${employee.id}`}>
                        <Link to={`/employees/${employee.id}`}>{employee.name}</Link></h3>
                )
            }
        </>
    )
}