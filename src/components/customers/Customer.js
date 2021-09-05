import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { retrieiveOneCustomer } from '../ApiManager'

export const Customer = () => {
    const [customer, setCustomer] = useState({})
    const { customerId } = useParams()

    useEffect(() => retrieiveOneCustomer().then(setCustomer), [customerId])

    return (
        <>
            <div>
                <h5>{customer.name}</h5>
                <p>Email: {customer.email}</p>
            </div>
        </>
    )
}