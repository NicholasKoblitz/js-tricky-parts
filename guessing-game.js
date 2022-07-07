function guessingGame() {
    let randomInt = Math.floor(Math.random() * 100);
    let hasWon = false;
    let guesses = 0;
 
    return function(num) {
        if(hasWon) return `The game is over, you already won!`
        if(num > randomInt) {
            guesses++;
            return `${num} is too high!`;
        }
        else if(num < randomInt) {
            guesses++;
            return `${num} is too low!`
        }
        else {
            hasWon = true;
            guesses++
            return `You win! You found ${randomInt} in ${guesses} guesses.`;
        }
    }
}

module.exports = { guessingGame };
