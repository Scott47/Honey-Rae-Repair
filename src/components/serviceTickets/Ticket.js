import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { retrieveOneTicket, getEmployees, updateEmployeeOnTicket } from "../ApiManager"


export const Ticket = () => {
    const [ticket, setTicket] = useState({})
    const [employees, syncEmployees] = useState([])  // State variable for array of employees
    const history = useHistory()
    const { id } = useParams()



    useEffect(() => retrieveOneTicket(id).then(t => setTicket(t)), [id])

    useEffect(() => getEmployees().then(syncEmployees),[])

    const assignEmployee = (evt) => {

        // Construct a new object to replace the existing one in the API
        const updatedTicket = {
            customerId: ticket.customerId,
            employeeId: parseInt(evt.target.value),
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: ticket.dateCompleted
        }

    
        updateEmployeeOnTicket(updatedTicket, id).then(() => history.push("/tickets"))
    }
    
    return (
        <>
            <h2>Ticket {id} Details {ticket.emergency ? "🚑" : ""}</h2>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to
                    <select
                        value={ ticket.employeeId }
                        onChange={ assignEmployee }>
                        {
                            employees.map(e => <option key={`employee--${e.id}`} value={e.id}>{e.name}</option>)
                        }
                    </select>
                </div>
            </section>
        </>
    )
}