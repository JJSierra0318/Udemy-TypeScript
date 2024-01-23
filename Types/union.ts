let age: number | string = 21
age = "20"

type Point = {
    x: number,
    y: number
}

type Loc = {
    lat: number,
    long: number
}

let coordinates: Point | Loc = { x: 1, y: 1 }

function calculateTax(price: number | string, tax: number): number {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""))
    }
    return price * tax
}

const stuff: (number | string)[] = [1, "1"]

//Literal Types, in this case, only these strings are allowed
const mood: "Happy" | "Sad" = "Happy"