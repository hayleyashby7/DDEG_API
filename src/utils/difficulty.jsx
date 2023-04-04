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

    static difficultyType(value) {
        switch (value) {
            case 'Easy':
            case 'Medium':
            case 'Hard':
            case 'Deadly':
                return true;
            default:
                return false;
        }
    }
}

export default Difficulty;
