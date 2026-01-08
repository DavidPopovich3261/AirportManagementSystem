class Baggage {
    constructor(Weight, Type ,ticket) {
        this.BaggageID = Math.floor(Math.random() * 10000000)
        this.OwnerID = null
        this.Weight = Weight
        this.Type = Type
    }

}