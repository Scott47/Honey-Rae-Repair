import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [tickets, setServiceTickets] = useState([])
    const baseUrl = "http://localhost:8088"

    useEffect(
        () => {
            fetch(`${baseUrl}/serviceTickets?_expand=customer&_expand=employee`)
                .then(res => res.json())
                .then(
                    (serviceTickets) => setServiceTickets(serviceTickets)
                )
        },
        []
    )

    return (
        <>
            {
                tickets.map(ticket =>
                    <div key={ticket.id}>Issue #: {ticket.id}
                        <p>Description: {ticket.description}</p>
                        <p>Customer: {ticket.customer?.name}</p>
                        <p>Employee: {ticket.employee?.name}</p>
                    </div>
                )
            }
        </>
    )
}