#!/usr/bin/env node
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({
    input: input,
    output: output
})

const random = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const n = (number, random) => {
    if (number > random) {
        console.log(`Incorrect! The number is less than ${number}.\n`)
    } else if (number < random) {
        console.log(`Incorrect! The number is greater than ${number}.\n`)
    }
    else {
        console.log('deu bad!')
    }
}
const again = async () => {
    try {

        const play = await rl.question('wanna play again?(y/n)')
        if (play.toLowerCase().trim() === "y") {
            await run()
        }
        else if (play.toLowerCase().trim() === "n") {
            console.log('Thanks for playing!')
            rl.close();
        }
        else {
            console.log("the expected answer is 'yes' or 'not'")
            await again()
        }
    } catch (error) {
        console.log(`error - Again: ${error}`)
    }  
}
const numberGuess = async (attempts,random) => {
    try {
        for (let index = 1; index <= attempts; index++) {
            const number = await rl.question('Enter your guess:');
            const numberInt = Number(number)

            if (random === numberInt) {
                console.log(`Congratulations! You guessed the correct number in ${index} attempts.`)
                break;
            } else {
                n(number, random)
            }
        }
    } catch (error) {
        console.log(`error - NumberGuess: ${error}`)
    }
}
const showMenu = () => {
    try {
        console.log('\nWelcome to the Number Guessing Game!');
        console.log("I'm thinking of a number between 1 and 100.\n")
        console.log('Please select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)')
    } catch (error) {
        console.log(`error - showMenu: ${error}`)
    }

}
async function run() {
    try {
        showMenu()
        const choice = await rl.question('\nEnter your choice:')
        if (choice === '1') {
            await numberGuess(10,random())
        }
        else if (choice === '2') {
            await numberGuess(5,random())
        }
        else if (choice === '3') {
            await numberGuess(3,random())
        }
        else {
            console.log('Enter the numbers that appear in the menu!\n')
        }
        await again()
        rl.close()
    } catch (error) {
        console.log(`Error - run:${error}`)
    }
}
run()

