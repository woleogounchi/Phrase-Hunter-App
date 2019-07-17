/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// We declare the Phrase class
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const ulElement = document.querySelector('ul');

        [...this.phrase].forEach(letter => {
            const textNode = document.createTextNode(letter);
            const liElement = document.createElement('li');
            liElement.appendChild(textNode);

            if (letter != '') {
                liElement.className = 'hide letter ' + letter;
            } else {
                liElement.className = 'space';
            }
            document.querySelector('ul').appendChild(liElement);
        });
    };

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    };

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll('.' + letter);
        letters.forEach(letterElement => {
            letterElement.className = 'show letter ' + letter;
        });
    };
}