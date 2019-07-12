/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// We declare the Game class
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }
    set createPhrases(phrases);

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game 
     */
    createPhrases() {
        return new Phrase([
            '', '', '', '', ''
        ]);
    };
}