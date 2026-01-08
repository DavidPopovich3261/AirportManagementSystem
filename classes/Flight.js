import { Ticket ,VIPTicket } from "./Ticket.js"
export class Flight {
    constructor(FlightName, Airline,FlightNumber, MaximumNumberOfPassengers, RegularTicketPrice, VIPTicketPrice) {
        this.FlightName = FlightName
        this.Airline = Airline
        this.FlightNumber = FlightNumber
        this.MaximumNumberOfPassengers = MaximumNumberOfPassengers
        this.RegularTicketPrice = RegularTicketPrice
        this.VIPTicketPrice = VIPTicketPrice
        this.TicketsList = []
    }

    createTickets(){
        for (let i = 0; i <= (this.MaximumNumberOfPassengers * 0.90); i++){
            this.TicketsList.push(new Ticket(this.RegularTicketPrice))
        }
        for (let i = 0; i <= (this.MaximumNumberOfPassengers * 0.10); i++){
            this.TicketsList.push(new VIPTicket(this.VIPTicketPrice))
        }        
    }
}