import React, { useState } from "react"
import { useHistory } from "react-router";

export const TicketForm = () => {
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false
        
    });
    const history = useHistory()
    
    const submitTicket = (e) => {
        e.preventDefault()
        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: 1,
            dateCompleted: ""
        }

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }
        return fetch("http://localhost:8088/serviceTickets", fetchOptions)
            .then(response => response.json())
            .then(() => history.push("/tickets"))
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={(evt) => {
                            const currentTicket = {...ticket}
                            currentTicket.description = evt.target.value
                            updateTicket(evt.target.value)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={(evt) => {
                            const currentTicket = {...ticket}
                            currentTicket.emergency = evt.target.checked
                            updateTicket(currentTicket)
                        }} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitTicket}>
                Submit Ticket
            </button>
        </form>
    )
}