# techdegree-project4
 This is the forth project assigned for Treehouse's JavaScript Techdegree Program.

 In this project, we'll create a browser-based, word guessing game called: **"Phrase Hunter"**. We’ll use JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

More explicitly, we’ll create two JavaScript classes with specific properties and methods: a **Game** class for managing the game, and a **Phrase** class to help with creating an array of Phrase objects.

Our code will allow to choose a random phrase, split it into letters, and put those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, that letter will need to be disabled on the onscreen keyboard.
