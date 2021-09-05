
export const getTickets = () => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/serviceTickets?_expand=customer&_expand=employee`)
        .then(res => res.json())
}

export const deleteTicket = (id) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/serviceTickets/${id}`, {
        method: "DELETE"
    })
        .then(() => getTickets())
}

export const createTicket = (ticketObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ticketObj)
    }
    return fetch(`${process.env.REACT_APP_BASE_URL}/serviceTickets`, fetchOptions)
        .then(response => response.json())
}

export const retrieveOneTicket = (id) => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/serviceTickets/${id}?_expand=customer&_expand=employee`)
        .then(res => res.json())
}

export const getEmployees = () => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/employees`)
        .then(res => res.json())
}

export const retrieveOneEmployee = (employeeId) => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/employees/${employeeId}`)
        .then(res => res.json())
}

export const updateEmployeeOnTicket = (updatedTicketObj, id) => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/serviceTickets/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTicketObj)
    })
}

export const getCustomers = () => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/customers`)
        .then(res => res.json())

}
export const retrieiveOneCustomer = (id) => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/customers/${id}`)
        .then(res => res.json())
}
export const existingUserCheck = (email) => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/customers?email=${email}`)
        .then(res => res.json())

}