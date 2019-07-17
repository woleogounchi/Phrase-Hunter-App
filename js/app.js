/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// Test 1
// const phrase = new Phrase();
// const game = new Game();

// Test 2
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// Test 3
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// Test 4
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// Test 5
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// Test 6
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game = new Game();
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// get all keys
const keys = document.querySelectorAll('.key');
// add eventListener to all key elements
keys.forEach(key => {
    key.addEventListener('click', () => {
        game.handleInteraction(key);
    });
});