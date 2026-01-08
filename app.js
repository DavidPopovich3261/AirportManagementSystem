import { Student, RegularPassenger } from "./classes/Passenger.js"
import { Airport } from "./classes/Airport.js"
import { Baggage } from "./classes/bonusBaggage.js"

const airport = new Airport()
const moshe = new RegularPassenger("moshe", 5000, null)
const david = new Student("david", 5000, "kodcode")
const baggage = new Baggage(10,"carry_on",tic2)

const tic1 = moshe.buyAticket(airport.flights[0], "RegularTicket")
const tic2 = david.buyAticket(airport.flights[0], "vip")

console.log(airport.flights[0].BaggageRules(baggage,david))
console.log(david.getAmountOfMoney());
