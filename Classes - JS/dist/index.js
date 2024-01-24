class Player {
    //Static: Will not exist in individual instances but in the class
    //Acces via Player.method and not player1.method
    static description = "Player In Our Game"
    //Private
    #score = 0
    #numLives = 10
    constructor(first, last) {
        this.first = first
        this.last = last
    }
    static randomPlayer(){
        return new Player("a", "b")
    }

    get fullName() {
        return `${first} ${last}`
    }
    get score() {
        return this.#score
    }

    set score(newScore) {
        if(newScore < 0) {
            throw new Error("Score must be positive!")
        }
        this.#score = newScore
    }

    taunt() {
        console.log("BOOYAH!");
    }
    loseLife() {
        this.#numLives -= 1
    }
}

class AdminPlayer extends Player {
    constructor(first, last, powers) {
        //calls parents constructor
        super(first, last)
        this.powers = powers
    }
    isAdmin = true
}

const player1 = new Player("blue", "steele")
const player2 = new Player("charlie", "brown")
const admin = new AdminPlayer("admin", "mCadmin", ["delete", "restore"])

//get
console.log(player1.fullName + ": " + player1.score);
//set
player1.score = 1