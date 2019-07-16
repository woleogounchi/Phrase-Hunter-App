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
    };

};