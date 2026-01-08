import { Ticket, VIPTicket } from "./Ticket.js"
import { Baggage } from "./bonusBaggage.js"
import { Passenger, Student } from "./Passenger.js"

export class Flight {
    constructor(FlightName, Airline, FlightNumber, MaximumNumberOfPassengers, RegularTicketPrice, VIPTicketPrice, maximumTotalBaggageWeight) {
        this.FlightName = FlightName
        this.Airline = Airline
        this.FlightNumber = FlightNumber
        this.MaximumNumberOfPassengers = MaximumNumberOfPassengers
        this.RegularTicketPrice = RegularTicketPrice
        this.VIPTicketPrice = VIPTicketPrice
        this.maximumTotalBaggageWeight = maximumTotalBaggageWeight
        this.CurrentWeight = 0
        this.TicketsList = []
        this.Baggagelist = []
    }

    BaggageRules(baggage, passenger) {
        if (!(baggage instanceof Baggage) || !(passenger instanceof Passenger)) {
            console.log("baggage not instanceof Baggage or passenger not instanceof Passenger");
            return false
        }
        if (this.CurrentWeight + baggage.Weight > this.maximumTotalBaggageWeight) {
            console.log("There is no free weight");
            return false
        }
        if (passenger instanceof Student) {
            if (baggage.Type == "carry_on" && baggage.Weight <= 7) {
                this.CurrentWeight += baggage.Weight
                this.Baggagelist.push(baggage)
                return true
            }
            if (baggage.Type == "carry_on") {
                if (passenger.payment(20)) {
                    this.CurrentWeight += baggage.Weight
                    this.Baggagelist.push(baggage)
                    return true
                } else {
                    console.log("not enough money");
                    return false
                }
            } if (baggage.Type == "checked") {
                if (passenger.payment(30)) {
                    this.CurrentWeight += baggage.Weight
                    this.Baggagelist.push(baggage)
                    return true
                } else {
                    console.log("not enough money");
                    return false
                }
            }
        } if (passenger instanceof RegularTicket) {
            if (passenger.KnowsAnAirportEmployee) {
                if (baggage.Type == "carry_on" && baggage.Weight <= 10) {
                    this.CurrentWeight += baggage.Weight
                    this.Baggagelist.push(baggage)
                    return true
                } if (baggage.Type == "carry_on") {
                    if (passenger.payment(10)) {
                        this.CurrentWeight += baggage.Weight
                        this.Baggagelist.push(baggage)
                        return true
                    } else {
                        console.log("not enough money");
                        return false
                    }
                } if (baggage.Type == "checked") {
                    if (passenger.payment(20)) {
                        this.CurrentWeight += baggage.Weight
                        this.Baggagelist.push(baggage)
                        return true
                    } else {
                        console.log("not enough money");
                        return false
                    }
                }
            } else {
                if (baggage.Type == "carry_on" && baggage.Weight <= 7) {
                    this.CurrentWeight += baggage.Weight
                    this.Baggagelist.push(baggage)
                    return true
                } if (baggage.Type == "carry_on") {
                    if (passenger.payment(20)) {
                        this.CurrentWeight += baggage.Weight
                        this.Baggagelist.push(baggage)
                        return true
                    } else {
                        console.log("not enough money");
                        return false
                    }
                } if (baggage.Type == "checked") {
                    if (passenger.payment(40)) {
                        this.CurrentWeight += baggage.Weight
                        this.Baggagelist.push(baggage)
                        return true
                    } else {
                        console.log("not enough money");
                        return false
                    }
                }
            }
        }
    }

    createTickets() {
        for (let i = 0; i <= (this.MaximumNumberOfPassengers * 0.90); i++) {
            this.TicketsList.push(new Ticket(this.RegularTicketPrice))
        }
        for (let i = 0; i <= (this.MaximumNumberOfPassengers * 0.10); i++) {
            this.TicketsList.push(new VIPTicket(this.VIPTicketPrice))
        }
    }
}