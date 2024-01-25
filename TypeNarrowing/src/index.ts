//typeof guard (only works with primitive types)
function triple(value: number | string) {
    if (typeof value === "string") {
        return value.repeat(3)
    }
    return value * 3
}

//truthiness guard
const element = document.getElementById("idk")
if (element) {
    element
}

const printLetters = (word?: string) => {
    if (word) {
        for (let char of word) {
            console.log(char)
        }
    }
    else {
        console.log("You Did Not Pass In A Word!")
    }
}

//Equality narrowing
function someDemo(x: string | number, y: string | boolean) {
    //Both have to be strings (Triple =)
    if (x === y) {
        x
        y
    }
}

//In operation narrowing
interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    espideDuration: number
}

function getRunTime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.espideDuration
    }
    return media.duration
}

//instanceof narrowing
function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString())
    }
    else {
        console.log(new Date(date).toUTCString())
    }
}

class User {
    constructor(username: string) { }
}
class Company {
    constructor(name: string) { }
}
function getName(entity: User | Company) {
    if(entity instanceof User) {
        entity
    }
}

//Type predicates
interface Cat {
    name: string,
    numLives: number
}

interface Dog {
    name: string,
    breed: string
}

//If this returns true, variable is Cat
function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined
}

function makeNoise(animal: Cat | Dog): string {
    if(isCat(animal)) {
        animal
        return "Meow"
    }
    animal
    return "Woof"
}

//Discriminated Unions
interface Rooster {
    name: string,
    weight: number,
    age: number,
    kind: "rooster"
}
interface Cow {
    name: string,
    weight: number,
    age: number,
    kind: "cow"
}
interface Pig {
    name: string,
    weight: number,
    age: number,
    kind: "pig"
}

type FarmAnimal = Rooster | Cow | Pig

function getFarmAnimalSound(animal: FarmAnimal) {
    switch(animal.kind) {
        case("pig"):
            return "Oink"
        case("cow"):
            return "Moo"
        case("rooster"):
            return "a"
        default:
            //Check if we handle every possible case
            const shouldNeverGetHere: never = animal
    }
}