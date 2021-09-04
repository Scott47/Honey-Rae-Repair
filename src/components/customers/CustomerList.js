import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")
    
    useEffect(
        () => {
            fetch(`${process.env.REACT_APP_BASE_URL}/customers`)
                .then(res => res.json())
                .then(
                    (customers) => setCustomers(customers)
                )
        },
        []
    )

    useEffect(() => customers.length === 1 ?
        updateMessage("You have 1 customer")
        : updateMessage(`You have ${customers.length} customers`),
        [customers]
    )
    
    return (
        <>
        <h2>Customers</h2>
            <div>{totalCustomerMessage}</div>
            {
                customers.slice(0, 5).map(
                    (customer) => <h3 key={`customer--${customer.id}`} >{customer.name}</h3>
                )
            }
        </>
    )
}