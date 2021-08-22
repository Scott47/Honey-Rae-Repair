import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")
    const baseUrl = "http://localhost:8088"

    useEffect(
        () => {
            fetch(`${baseUrl}/customers`)
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
            <div>{totalCustomerMessage}</div>
            {
                customers.slice(0, 5).map(
                    (customer) => <h3 key={`customer--${customer.id}`} >{customer.name}</h3>
                )
            }
        </>
    )
}