import { Flight } from "./Flight.js"

export class Airport {
    constructor() {
        this.flights = [
            new Flight("Paris", "", Math.floor(Math.random() * 10000000), 100, 300, 500,),
            new Flight("London", "", Math.floor(Math.random() * 10000000), 100, 300, 500,),
            new Flight("New York", "", Math.floor(Math.random() * 10000000), 100, 300, 500,)]
        this.runcreateTickets(this.flights[0])
        this.runcreateTickets(this.flights[1])
        this.runcreateTickets(this.flights[2])
    }
    runcreateTickets(flight) {
        if (flight instanceof Flight) flight.createTickets()
    }
}






