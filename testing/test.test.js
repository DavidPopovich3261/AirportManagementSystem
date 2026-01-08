import { Student, RegularPassenger } from "../classes/Passenger.js"
import { Airport } from "../classes/Airport.js"
import { test } from "node:test"
import assert from "node:assert";


const airport = new Airport()
const moshe = new RegularPassenger("moshe", 5000, null)
const david = new Student("david", 100, "kodcode")

console.log(david.buyAticket(airport.flights[0],"RegularTicket"));

await test("Not enough money", () => {
    assert.deepEqual(david.buyAticket(airport.flights[0],"RegularTicket"),false)
})

await test("The ticket owner name matches the passenger name",()=>{
    assert.deepEqual(moshe.buyAticket(airport.flights[0],"RegularTicket").OwnerName,"moshe")
})

const previousAmount = moshe.getAmountOfMoney()

await test("The passenger’s money is reduced by the correct ticket price",()=>{
    assert.deepEqual(moshe.buyAticket(airport.flights[0],"RegularTicket").Price ,(previousAmount - moshe.getAmountOfMoney()))
})

