import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/EmployeeList"
import { CustomerList } from "./customers/CustomerList"
import { TicketList } from "./serviceTickets/TicketList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { Ticket } from "./serviceTickets/Ticket"
import { Employee } from "./employees/Employee"
import { Customer } from "./customers/Customer"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <h1>Welcome to Honey Rae's Repairs</h1>
            </Route>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/customers/:customerId(\d+)">
                <Customer />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
            <Route exact path="/ticket/create">
                <TicketForm />
            </Route>
            <Route exact path="/tickets/:id(\d+)">
                <Ticket />
            </Route>
        </>
    )
}