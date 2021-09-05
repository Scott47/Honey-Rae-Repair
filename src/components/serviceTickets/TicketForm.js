import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { createTicket } from "../ApiManager";

export const TicketForm = () => {
    const [ticket, setTicket] = useState({
        description: null,
        emergency: false
    });

    const history = useHistory()

    const submitTicket = () => {
        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: 1,
            dateCompleted: ""
        }
        createTicket(newTicket).then(() => history.push("/tickets"))
    }

    return (
        <form className="ticketForm" onSubmit={(e) => e.preventDefault()}>
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
                            const currentTicket = { ...ticket }
                            currentTicket.description = evt.target.value
                            setTicket(currentTicket)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={(evt) => {
                            const currentTicket = { ...ticket }
                            currentTicket.emergency = evt.target.checked
                            setTicket(currentTicket)
                        }} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitTicket}>
                Submit Ticket
            </button>
        </form>
    )
}