import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [ employeeSpecialties, setEmployeeSpecialties] = useState("")
    useEffect(
        () => {
            fetch(`${process.env.REACT_APP_BASE_URL}/employees`)
                .then(res => res.json())
                .then(
                    (employees) => setEmployees(employees)
                )
        },
        []
    )
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
                    (employee) => <h3 key={`employee--${employee.id}`} >{employee.name}</h3>
                )
            }
        </>
    )
}