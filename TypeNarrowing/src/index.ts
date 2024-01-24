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