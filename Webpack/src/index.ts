//npm install --save-dev webpack webpack-cli typescript ts-loader
//Imports with webpack cant have extension
import Dog from "./Dog"
import ShelterDog from "./ShelterDog"
import { add, multiply, divide } from "./utils"

const elton = new Dog("Elton", "Aussie", 0.5)
elton.bark()

console.log(add(4, 5))
console.log(multiply(2, 4))
console.log(divide(7, 3))

const buffy = new ShelterDog("Buffy", "PitBull", 5, "ShelterX")