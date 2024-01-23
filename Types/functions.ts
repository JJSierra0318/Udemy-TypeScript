function square(num: number): number {
    return num * num;
}

const doSomething = (person: string = "stranger", age: number, isFunny: boolean): void => {}

const colors = ["yellow", "blue", "red"]
colors.map(color => {
    color.toUpperCase()
})

function makeError(msg: string): never {
    throw new Error(msg)
}