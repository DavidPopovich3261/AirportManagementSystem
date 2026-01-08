export class Ticket {
    constructor(Price) {
        this.ticketNumber = Math.floor(Math.random() * 10000000)
        this.Price = Price
        this.OwnerName = null
    }
}


export class VIPTicket extends Ticket {
    constructor(Price) {
        super(Price)
        this.Benefitslist = ["Free alcohol", "Free food", "Hot towels"]
    }
}

