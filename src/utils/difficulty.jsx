class Difficulty {
    static Easy = new Difficulty('Easy');

    static Medium = new Difficulty('Medium');

    static Hard = new Difficulty('Hard');

    static Deadly = new Difficulty('Deadly');

    constructor(name) {
        this.name = name;
    }

    toString() {
        return `${this.name}`;
    }
}

export default Difficulty;
