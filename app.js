import {Student,RegularPassenger } from "./classes/Passenger.js"
import { Airport } from "./classes/Airport.js"

const airport = new Airport()
const moshe = new RegularPassenger("moshe",5000,null)
const david = new Student("david",5000,"kodcode")
moshe.buyAticket(airport.flights[0],"RegularTicket")
david.buyAticket(airport.flights[0],"vip")
