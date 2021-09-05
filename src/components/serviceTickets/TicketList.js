import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { getTickets, deleteTicket } from "../ApiManager"
import "./Ticket.css"

export const TicketList = () => {
    const [tickets, setServiceTickets] = useState([])
    const history = useHistory()

    useEffect(() => getTickets().then((serviceTickets) => setServiceTickets(serviceTickets)), [])

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
                            {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description} submitted by {ticket.customer?.name}
                                and worked on by {ticket.employee?.name}</Link>
                        </p>
                        <button onClick={() => {
                            deleteTicket(ticket.id)
                        }}>Delete</button>
                    </div>
                )
            }
        </>
    )
}
