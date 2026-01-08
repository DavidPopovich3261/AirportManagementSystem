import { VIPTicket } from "./Ticket.js"
import { Flight } from "./Flight.js"

class Passenger {
    #AmountOfMoney
    constructor(Name, AmountOfMoney,) {
        this.Name = Name
        this.IDnumber = Math.floor(Math.random() * 10000000)
        this.#AmountOfMoney = AmountOfMoney
        this.discount = { vip: 1, regular: 1 }
    }

    getAmountOfMoney(){
        return this.#AmountOfMoney
    }

    buyAticket(flight, typeTicket) {
        if (!(flight instanceof Flight)) {
            console.log("flight not instanceof Flight");
            return false
        }

        if (typeTicket == "vip") {
            for (let ticket of flight.TicketsList) {
                if (ticket instanceof VIPTicket && ticket.OwnerName == null) {
                    if ((ticket.Price * this.discount.vip) <= this.#AmountOfMoney) {
                        this.#AmountOfMoney -= (ticket.Price * this.discount.vip)
                        ticket.OwnerName = this.Name
                        console.log("buy A ticket", ticket);
                        return ticket
                    } else {
                        console.log("not enough money");
                        return false
                    }
                }
            }
        } else if (typeTicket == "RegularTicket") {
            for (let ticket of flight.TicketsList) {
                if (!(ticket instanceof VIPTicket) && ticket.OwnerName == null) {
                    if ((ticket.Price * this.discount.regular) <= this.#AmountOfMoney) {
                        this.#AmountOfMoney -= (ticket.Price * this.discount.regular)
                        ticket.OwnerName = this.Name
                        console.log("buy A ticket", ticket);
                        return ticket
                    } else {
                        console.log("not enough money");
                        return false
                    }
                }
            }
        } return false
    }
}


export class Student extends Passenger {
    constructor(Name, AmountOfMoney, universityName) {
        super(Name, AmountOfMoney)
        this.universityName = universityName
        this.discount.vip = 0.75
    }
}


export class RegularPassenger extends Passenger {
    constructor(Name, AmountOfMoney, Workplace, KnowsAnAirportEmployee = false) {
        super(Name, AmountOfMoney)
        this.Workplace = Workplace
        this.KnowsAnAirportEmployee = KnowsAnAirportEmployee
        this.UpdateDiscounts()
    }
    UpdateDiscounts() {
        if (this.KnowsAnAirportEmployee) {
            this.discount = { vip: 0.85, regular: 0.80 }
        }
    }
}