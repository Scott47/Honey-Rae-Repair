import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import "./Ticket.css"

export const TicketList = () => {
    const [tickets, setServiceTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch(`${process.env.REACT_APP_BASE_URL}/serviceTickets?_expand=customer&_expand=employee`)
                .then(res => res.json())
                .then(
                    (serviceTickets) => setServiceTickets(serviceTickets)
                )
        },
        []
    )

    return (
        <>
            <h2>Service Tickets</h2>
            <div>
                <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
            </div>
            {
                tickets.map(ticket =>
                    <div key={ticket.id}>Issue #: {ticket.id}
                        <p className={ticket.emergency ? "emergency" : "ticket"}>
                            {ticket.emergency ? "🚑" : ""} {ticket.description} submitted by {ticket.customer?.name} 
                            and worked on by {ticket.employee?.name}
                        </p>

                    </div>
                )
            }
        </>
    )
}
