# Rock Paper Scissors Game 🎮

A simple **Rock Paper Scissors** game implemented in JavaScript. This project allows a user to play multiple rounds of the classic game against the computer. The scores are tallied, and a final winner is determined based on the number of rounds won.

---

## Features

- Interactive user input for the number of rounds and choices.
- Computer randomly selects **rock**, **paper**, or **scissor**.
- Validates player input to ensure it's either **rock**, **paper**, or **scissor**.
- Displays round results and final scores in the console.

---

## How It Works

1. When the game starts, the user is prompted to enter:
   - The number of rounds they want to play.
   - Their choice for each round (**rock**, **paper**, or **scissor**).
2. The computer makes a random choice for each round.
3. The game determines the winner of each round based on the rules:
   - **Rock beats Scissors**
   - **Paper beats Rock**
   - **Scissors beats Paper**
4. The scores are updated and displayed after each round.
5. At the end of all rounds, the final scores and the overall winner are displayed.

---

## Rules

- If both players make the same choice, it's a **tie**.
- Each valid choice has one losing option and one winning option:
  - **Rock** beats **Scissors**, but loses to **Paper**.
  - **Paper** beats **Rock**, but loses to **Scissors**.
  - **Scissors** beats **Paper**, but loses to **Rock**.

---
