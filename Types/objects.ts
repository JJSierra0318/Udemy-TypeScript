function printName(person: { first: string, last: string }): void {
    console.log(person.first + " " + person.last);
}

const singer = {first: "Mick", last: "Jagger", age: 47}
printName(singer) //With a variable as a param, it only checks the minimum params are there

type Point = {
    x: number,
    y: number
}

let coordinate: Point = {x: 34, y: 2}

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 }
}

//Nested Objects
type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: {
        producer: string,
        writer: string
    }
}

function calculatePayout(song: Song): number {
    return 0.0033 * song.numStreams
}

//Optional params
type OptionalPoint = {
    x: number,
    y: number,
    z?: number
}

const myPoint = {x: 1, y: 2}

//readonly = cannot change value
type User = {
    readonly id: string,
    username: string
}

type Circle = {
    radius: number
}

type Color = {
    color: string
}

type ColorfulCircle = Circle & Color & {
    borderRadius: number
}

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow",
    borderRadius: 1
}