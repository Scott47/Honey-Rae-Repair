import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { retrieveOneEmployee } from '../ApiManager'

export const Employee = () => {
    const [employee, setEmployee] = useState({})
    const { employeeId } = useParams()

    useEffect(() => retrieveOneEmployee(employeeId).then(setEmployee), [employeeId])

    return (
        <>
            <h2>{employee.name}</h2>
            <p>Specialty: {employee.specialty}</p>
        </>
    )
}