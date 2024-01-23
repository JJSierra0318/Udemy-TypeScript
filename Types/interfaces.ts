//Describe the shape of objects
interface Point2 {
    x: number
    y: number,
}

interface Person {
    readonly id: string,
    first: string,
    second?: string,
    last: string,
    //requires a method, with 0 params that returns a string
    sayHi: () => string
}

//Interface methods
interface Product2 {
    name: string,
    price: number,
    applyDiscount: (discount: number) => number
}

const shoes: Product2 = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number): number {
        return 2
    }
}

//Combine interface
interface Dog {
    name: string,
    age: number
}

interface Dog {
    breed: string,
    bark: () => string
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "Woof"
    }
}

//Extend an interface
interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide"
}

interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Human, Employee {
    level: string,
    languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 1,
    email: "pierre@gmail.com",
    level: "Junior",
    languages: ["Javascript"]
}