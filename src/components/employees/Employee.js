import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export const Employee = () => {
    const [ employee, setEmployee ] = useState({})

    const { employeeId } = useParams()

    useEffect(() => {
        return fetch(`${process.env.REACT_APP_BASE_URL}/employees/${employeeId}`)
        .then(res => res.json())
        .then(setEmployee)
    }, [employeeId])

    return (
        <>
            <h2>{employee.name}</h2>
            <p>Specialty: {employee.specialty}</p>
        </>
    )
}