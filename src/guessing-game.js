class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.currGuessingGame = 0;
    }

    setRange(_min, _max) {
        this.min = _min;
        this.max = _max;
    }

    guess() {
        return this.currGuessingGame = Math.round((this.min + this.max) / 2);
    }

    lower() {
        this.max = this.currGuessingGame;
    }

    greater() {
        this.min = this.currGuessingGame;
    }
}

module.exports = GuessingGame;