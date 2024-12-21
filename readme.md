# Number Guessing Game

Welcome to the **Number Guessing Game**! This is a command-line game where you try to guess a randomly generated number between 1 and 100. Test your guessing skills and challenge yourself by selecting different difficulty levels.

---

## How to Play

0. package installation
      ```bash
    npm i @pedrocxz_/number-guessing-game
      ```
1. Run the game using the command:
   ```bash
   node index.js or game
   ```
2. A random number between 1 and 100 will be generated for you to guess.
3. You will be presented with a difficulty menu:
   - **Easy**: 10 chances to guess.
   - **Medium**: 5 chances to guess.
   - **Hard**: 3 chances to guess.
4. Enter your guesses one at a time.
5. After each guess, you'll receive a hint:
   - If your guess is too high, you'll see: `Incorrect! The number is less than [your guess].`
   - If your guess is too low, you'll see: `Incorrect! The number is greater than [your guess].`
6. Keep guessing until you either find the correct number or run out of attempts.
7. At the end of the game, you'll be asked if you want to play again. Enter `y` for yes or `n` for no.

---

## Features

- **Random Number Generation**: The game generates a new random number for every session.
- **Difficulty Levels**: Choose from Easy, Medium, or Hard modes.
- **Hint System**: Receive feedback to help you narrow down your guesses.
- **Play Again Option**: Easily restart the game without re-running the script.
- **Input Validation**: Handles invalid inputs gracefully, ensuring a smooth experience.

---

## Example Gameplay

```
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Enter your choice: 2

Enter your guess: 50
Incorrect! The number is greater than 50.

Enter your guess: 75
Incorrect! The number is less than 75.

Enter your guess: 60
Congratulations! You guessed the correct number in 3 attempts.

Wanna play again? (y/n): n
Thanks for playing!
```

---

## Requirements

- Node.js (v16 or higher)

---

## Setup and Installation

1. Clone the repository or copy the `index.js` file into your project directory.
2. Ensure you have Node.js installed.
3. Run the game:
   ```bash
   game or node index.js
   ```

---

## Customization

Feel free to modify the game to suit your preferences:

- **Change the Range**: Update the `generateRandom` function to generate numbers in a different range.
- **Add More Difficulty Levels**: Extend the menu to include more options with varying attempts.
- **Enhance Feedback**: Customize the hints or add more detailed messages.

---

## License

This game is open-source and available for educational and personal use. Feel free to modify and share it.

---

Enjoy playing the Number Guessing Game! If you have any feedback or suggestions, feel free to share!
<hr>
<p align="center" ><a href="https://roadmap.sh/projects/number-guessing-game">roadmap.sh</a></p>
