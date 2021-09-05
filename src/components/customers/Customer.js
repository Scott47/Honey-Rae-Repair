import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export const Customer = () => {
    const [customer, setCustomer] = useState({})

    const { customerId } = useParams()

    useEffect(() => {
        return fetch(`${process.env.REACT_APP_BASE_URL}/customers/${customerId}`)
            .then(res => res.json())
            .then(setCustomer)
    }, [customerId])

    return (
        <>
            <div>
                <h5>{customer.name}</h5>
                <p>Email: {customer.email}</p>
            </div>
        </>
    )
}