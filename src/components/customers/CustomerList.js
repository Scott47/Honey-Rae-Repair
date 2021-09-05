import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(() => getCustomers().then((customers) => setCustomers(customers)), [])

    useEffect(() => customers.length === 1 ? updateMessage("You have 1 customer")
        : updateMessage(`You have ${customers.length} customers`),
        [customers]
    )

    return (
        <>
            <h2>Customers</h2>
            <div>{totalCustomerMessage}</div>
            {
                customers.slice(0, 5).map(
                    (customer) => <h3 key={`customer--${customer.id}`} >
                        <Link to={`customers/${customer.id}`}>{customer.name}</Link></h3>
                )
            }
        </>
    )
}