const inputElement = document.querySelector<HTMLInputElement>("#username")

const btn = document.querySelector<HTMLButtonElement>(".btn")

function numberIdentity(item: number): number {
    return item
}

function stringIdentity(item: string): string {
    return item
}

function booleanIdentity(item: boolean): boolean {
    return item
}

//Recieves any type, and will return the SAME type
function identity<T>(item: T): T {
    return item
}
identity<number>(7)

function getRandomElement<T>(list: T[]): T {
    const index = Math.floor(Math.random() * list.length)
    return list[index]
}
getRandomElement<string>(["a", "b", "c"])
getRandomElement([1, 2, 3])

//Can use multiple generics, and can restrict, in this case to alteast e an object of any type
function merge<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}
const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] })

interface Lengthy {
    length: number
}
//T must be anything with a property length
function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2
}

//Defaults type to number
function makeList<T = number>(): T[] {
    return []
}
const numbers = makeList() //type number
const booleans = makeList<boolean>()

interface Song {
    title: string,
    artist: string
}
interface Video {
    title: string,
    creator: string,
    resolution: string
}
class Playlist<T> {
    public queue: T[] = []
    add(element: T) {
        this.queue.push(element)
    }
}