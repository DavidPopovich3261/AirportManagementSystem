import { Ticket } from "./Ticket.js"
export class Baggage {
    constructor(Weight, Type, ticket) {
        if (!(ticket instanceof Ticket)) {
            console.log("ticket not instanceof Ticket");
            return false
        }
        this.BaggageID = Math.floor(Math.random() * 10000000)
        this.OwnerID = null
        this.Weight = Weight
        this.Type = Type
    }

}