/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// We declare the Game class
class Game {
    constructor(missed = 0,
            phrases = [new Phrase('all that glitters'),
                new Phrase('jack of all trades'),
                new Phrase('down to earth'),
                new Phrase('what goes arround'),
                new Phrase('give a man a fish')
            ],
            activePhrase = null) {
            this.missed = missed;
            this.phrases = phrases;
            this.activePhrase = activePhrase;
        }
        /**
         * Selects random phrase from phrases property
         * @return {Object} Phrase object chosen to be used
         */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        document.getElementById('overlay').style = 'visibility: hidden';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't
won */
    checkForWin() {
        let hidenLetters = document.querySelectorAll('.hide').length;
        if (hidenLetters == 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        let liveHearts = document.querySelectorAll('img');
        let liveHeart = liveHearts[this.missed];
        liveHeart.src = 'images/lostHeart.png';

        this.missed++;

        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    /**
     * Remove all `li` elements from the Phrase `ul` element.
     */
    resetPhraseOnBoard() {
        const ulElem = document.getElementsByTagName('UL');
        while (ulElem.firstChild) {
            ulElem.removeChild(ulElem.firstChild);
        }
    }

    /**
     * Enable all of the onscreen keyboard buttons and update their CSS class. 
     */
    resetLetters() {
        let keyElements = document.querySelectorAll('.chosen');
        keyElements.forEach((keyElement) => {
            keyElement.className = 'key';
            keyElement.disabled = false;
        });

        keyElements = document.querySelectorAll('.wrong');
        keyElements.forEach((keyElement) => {
            keyElement.className = 'key';
            keyElement.disabled = false;
        });
    }

    /**
     * Reset all of the heart images. 
     */
    resetLives() {
        const allLives = document.querySelectorAll('img');
        allLives.forEach(life => {
            life.src = 'images/liveHeart.png';
        });
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        if (gameWon === false) {
            document.getElementById('overlay').className = 'lose';
            document.getElementById('game-over-message').textContent = 'Sorry, better luck next time!';
        } else {
            document.getElementById('overlay').className = 'win';
            document.getElementById('game-over-message').textContent = 'Great job!';
        }
        document.getElementById('overlay').style = 'visibility: visible';

        this.resetPhraseOnBoard();
        this.resetLives();
        this.resetLetters();
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {
        if (this.activePhrase) {
            button.disabled = true;
            if (this.activePhrase.checkLetter(button.textContent)) {
                this.activePhrase.showMatchedLetter(button.textContent);
                button.className = 'chosen';
                if (this.checkForWin()) {
                    this.gameOver(true);
                }
            } else if (this.activePhrase) {
                button.className = 'wrong';
                this.removeLife();
            }
        }
    }
}