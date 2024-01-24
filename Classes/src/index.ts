class Player {
    //Have to initialize variables
    //public is default so its optional
    public readonly first: string
    public readonly last: string
    //Private doesnt affect after compile, better use #score
    //protected allows to access in child classes
    protected _score = 0

    //Shortcut for constructor, no need to initialize
    //constructor(public first: string, public last: string) {}

    constructor(first: string, last: string) {
        this.first = first
        this.last = last
    }

    get fullName() {
        return `${this.first} ${this.last}`
    }

    get score() {
        return this._score
    }
    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score can't be negative")
        }
        this._score = newScore
    }
}

class SuperPlayer extends Player {
    public isAdmin = true

    maxScore() {
        this._score = 999999
    }
}

////////////////////////////////

interface Colorful {
    color: string
}

interface Printable {
    print(): void
}

class Bike implements Colorful {
    constructor(public color: string) { }
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) { }

    print() {
        console.log(this.color + " " + this.brand);

    }
}

//Only use for inheritance, cant instance an abstract class
abstract class Employee {
    constructor(public first: string, public last: string) { }
    abstract getPay(): number
    greet() {
        console.log("HELLO");

    }
}

class FullTimeEmployee extends Employee {
    constructor(public first: string, public last: string, private salary: number) {
        super(first, last)
    }
    getPay() {
        return this.salary
    }
}