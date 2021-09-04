import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const Ticket = () => {
    const [ticket, setTicket] = useState({})

    const { id } = useParams()

    useEffect(() => {
       fetch(`${process.env.REACT_APP_BASE_URL}/serviceTickets/${id}?_expand=customer&_expand=employee`)
            .then(res => res.json())
            .then(t => setTicket(t))
    }, [id]
    )

    return (
        <>
            <h2>Ticket {id} Details {ticket.emergency ? "🚑" : ""}</h2>
            <section className="ticket">
                <h3 className="ticket__description">Description: {ticket.description}</h3>
                <div className="ticket__customer">Customer: {ticket.customer?.name}</div>
                <div className="ticket__employee">Employee: {ticket.employee?.name}</div>
            </section>
        </>
    )
}